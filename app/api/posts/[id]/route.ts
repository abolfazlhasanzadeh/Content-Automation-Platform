import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/client"

function verifyApiKey(request: NextRequest): boolean {
  const apiKey = request.headers.get("x-api-key")
  return apiKey === process.env.API_KEY
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const supabase = createClient()

  const isNumeric = /^\d+$/.test(id)

  let query = supabase.from("content_post").select("*")
  query = isNumeric ? query.eq("id", id) : query.eq("slug", id)

  const { data, error } = await query.single()

  if (error || !data) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }

  return NextResponse.json({ post: data })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyApiKey(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const supabase = createClient()

  const isNumeric = /^\d+$/.test(id)

  const updateData: Record<string, unknown> = {}
  if (body.title !== undefined) updateData.title = body.title
  if (body.excerpt !== undefined) updateData.excerpt = body.excerpt
  if (body.body !== undefined) updateData.body = body.body
  if (body.category !== undefined) updateData.category = body.category
  if (body.category_slug !== undefined) updateData.category_slug = body.category_slug
  if (body.source !== undefined) updateData.source = body.source
  if (body.url !== undefined) updateData.url = body.url
  if (body.display_time !== undefined) updateData.display_time = body.display_time
  if (body.status !== undefined) updateData.status = body.status
  if (body.is_lead !== undefined) updateData.is_lead = body.is_lead
  if (body.slug !== undefined) updateData.slug = body.slug

  let query = supabase.from("content_post").update(updateData)
  query = isNumeric ? query.eq("id", id) : query.eq("slug", id)

  const { data, error } = await query.select().single()

  if (error) {
    if (error.code === "PGRST116") {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ post: data })
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyApiKey(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const supabase = createClient()

  const isNumeric = /^\d+$/.test(id)

  let query = supabase.from("content_post").delete()
  query = isNumeric ? query.eq("id", id) : query.eq("slug", id)

  const { error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return new NextResponse(null, { status: 204 })
}
