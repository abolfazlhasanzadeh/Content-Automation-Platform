import type { Metadata } from "next"
import { articlesByCategory, categories, getCategory } from "@/lib/articles"
import { notFound } from "next/navigation"
import CategoryContent from "./CategoryContent"

type Params = { slug: string }

export const revalidate = 1800

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return {
    title: `${category.title} | اتوماسیون محتوا`,
    description: category.description,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  const items = await articlesByCategory(slug)
  const count = items.length.toLocaleString("fa-IR")

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 pb-14 pt-8 sm:px-6">
      <CategoryContent category={category} count={count} items={items} />
    </div>
  )
}
