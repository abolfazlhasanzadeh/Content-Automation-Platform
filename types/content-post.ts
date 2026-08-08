export type ContentPost = {
  id: number
  slug: string
  title: string
  excerpt: string | null
  body: string[] | null
  category: string
  category_slug: string
  source: string | null
  url: string | null
  display_time: string | null
  status: "فوری" | "در انتظار تأیید" | "منتشر شده"
  is_lead: boolean
  created_at: string
  updated_at: string
}

export type CreatePostInput = {
  slug?: string
  title: string
  excerpt?: string
  body?: string[]
  category: string
  category_slug: string
  source?: string
  url?: string
  display_time?: string
  status?: ContentPost["status"]
  is_lead?: boolean
}

export type UpdatePostInput = Partial<CreatePostInput>
