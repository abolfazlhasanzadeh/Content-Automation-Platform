import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const fakePost = {
  slug: "fake-post-" + Date.now(),
  title: "پست آزمایشی: هوش مصنوعی در سال ۲۰۲۶",
  excerpt: "این یک پست آزمایشی برای تست سیستم است.",
  body: [
    "این اولین پاراگراف پست آزمایشی است. هوش مصنوعی در سال ۲۰۲۶ به پیشرفت‌های چشمگیری دست یافته است.",
    "پاراگراف دوم شامل اطلاعات بیشتر درباره موضوع پست است.",
  ],
  category: "هوش مصنوعی",
  category_slug: "ai",
  source: "test.com",
  url: "https://example.com",
  display_time: "۱۲:۰۰",
  status: "منتشر شده",
  is_lead: false,
}

const { data, error } = await supabase
  .from("content_post")
  .insert(fakePost)
  .select()
  .single()

if (error) {
  console.error("Error:", error.message)
  process.exit(1)
}

console.log("Created post:", data)
