import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/client"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 200)
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  if (!body.title || !body.category || !body.category_slug) {
    return NextResponse.json(
      { error: "Missing required fields: title, category, category_slug" },
      { status: 400 }
    )
  }

  const supabase = createClient()

  const slug = (body.slug as string) || slugify(body.title as string)

  const { data, error } = await supabase
    .from("content_post")
    .insert({
      slug,
      title: body.title as string,
      excerpt: (body.excerpt as string) ?? null,
      body: (body.body as string[]) ?? null,
      category: body.category as string,
      category_slug: body.category_slug as string,
      source: (body.source as string) ?? null,
      url: (body.url as string) ?? null,
      display_time: (body.display_time as string) ?? null,
      status: (body.status as string) ?? "منتشر شده",
      is_lead: (body.is_lead as boolean) ?? false,
    })
    .select()
    .single()

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ post: data }, { status: 201 })
}
