import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getArticle, getAllArticles } from "@/lib/articles"
import ContentPageClient from "./ContentPageClient"

type Params = { slug: string }

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} | اتوماسیون محتوا`,
    description: article.excerpt,
  }
}

export default async function ContentPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const allArticles = await getAllArticles()
  const related = allArticles.filter((a) => a.slug !== slug).slice(0, 3)

  return <ContentPageClient article={article} related={related} />
}
