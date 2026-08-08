import { cache } from "react"
import { createClient } from "@/lib/supabase/client"
import type { ContentPost } from "@/types/content-post"

export type Article = {
  slug: string
  category: string
  categorySlug: string
  title: string
  excerpt: string
  source: string
  time: string
  status: ContentPost["status"]
  body: string[]
  lead?: boolean
}

export type Category = {
  slug: string
  title: string
  description: string
}

export type CategoryCount = {
  categorySlug: string
  count: number
}

export const getCategoryCounts = cache(async (): Promise<CategoryCount[]> => {
  const supabase = createClient()
  const { data, error } = await supabase.from("category_counts").select("*")

  if (error) {
    throw new Error(`getCategoryCounts: ${error.message}`, { cause: error })
  }

  return (data ?? []).map((row) => ({
    categorySlug: row.category_slug,
    count: Number(row.count),
  }))
})
export const categories: Category[] = [
  { slug: "python", title: "پایتون", description: "تازه‌های زبان پایتون، نسخه‌ها و اکوسیستم آن" },
  { slug: "react", title: "ری‌اکت", description: "اخبار ری‌اکت، کامپوننت‌ها و ابزارهای اطرافش" },
  { slug: "javascript", title: "جاوااسکریپت", description: "موتورها، استانداردها و اخبار جاوااسکریپت" },
  { slug: "ai", title: "هوش مصنوعی", description: "مدل‌ها، ابزارها و تازه‌های هوش مصنوعی برای توسعه‌دهندگان" },
  { slug: "rust", title: "راست", description: "زبان راست و اخبار جامعهٔ آن" },
  { slug: "node", title: "نود.جی‌اس", description: "نود.جی‌اس، سمت سرور و ابزارهای آن" },
  { slug: "frontend", title: "فرانت‌اند", description: "طراحی رابط کاربری، CSS و ابزارهای فرانت‌اند" },
  { slug: "laravel", title: "لاراول", description: "فریم‌ورک لاراول، پکیج‌ها و اکوسیستم PHP وب" },
  { slug: "php", title: "پی‌اچ‌پی", description: "زبان پی‌اچ‌پی، نسخه‌ها و ابزارهای توسعه‌ی وب" },
  { slug: "soft-skills", title: "مهارت‌های نرم", description: "مدیریت پروژه، رهبری فنی و رشد شغلی توسعه‌دهندگان" },
  { slug: "infrastructure", title: "زیرساخت", description: "معماری سیستم‌های مقیاس‌پذیر و مهندسی زیرساخت" },
  { slug: "devops", title: "دواپس", description: "ابزارها و فرهنگ DevOps، CI/CD و اتوماسیون" },
  { slug: "database", title: "پایگاه داده", description: "پایگاه‌های داده، بهینه‌سازی کوئری و ابزارهای ذخیره‌سازی" },
  { slug: "security", title: "امنیت", description: "آسیب‌پذیری‌ها، ابزارهای امنیتی و اخبار سایبری" },
]
export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

function toArticle(row: ContentPost): Article {
  return {
    slug: row.slug,
    category: row.category,
    categorySlug: row.category_slug,
    title: row.title,
    excerpt: row.excerpt ?? "",
    source: row.source ?? "",
    time: row.display_time ?? "",
    status: row.status,
    body: row.body ?? [],
    lead: row.is_lead,
  }
}

export async function getAllArticles(): Promise<Article[]> {
  const supabase = createClient()
  const { data } = await supabase
    .from("content_post")
    .select("*")
    .order("created_at", { ascending: false })

  return (data ?? []).map(toArticle)
}
  
export async function getArticle(slug: string): Promise<Article | null> {
  const supabase = createClient()
  const { data } = await supabase
    .from("content_post")
    .select("*")
    .eq("slug", slug)
    .single()
    
  return data ? toArticle(data) : null
}

export async function articlesByCategory(categorySlug: string): Promise<Article[]> {
  const supabase = createClient()
  const { data } = await supabase
    .from("content_post")
    .select("*")
    .eq("category_slug", categorySlug)
    .order("created_at", { ascending: false })



  return (data ?? []).map(toArticle)
}

export async function getRelatedArticles(slug: string, limit = 3): Promise<Article[]> {
  const supabase = createClient()
  const { data } = await supabase
    .from("content_post")
    .select("*")
    .neq("slug", slug)
    .order("created_at", { ascending: false })
    .limit(limit)

  return (data ?? []).map(toArticle)
}
