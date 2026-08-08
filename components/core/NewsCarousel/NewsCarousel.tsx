"use client"
import useEmblaCarousel from 'embla-carousel-react'
import ArticleCard from '@/components/core/ArticleCard/ArticleCard'
import { cn } from '@/lib/utils'
import type { Article } from '@/lib/articles'

export default function NewsCarousel({ articles }: { articles: Article[] }) {
  const OPTIONS = {
    dragFree: true,
    direction: 'rtl' as const,
  }
  const [emblaRef] = useEmblaCarousel(OPTIONS)

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex items-stretch gap-4">
        {articles.map((article) => (
          <div
            key={article.slug}
            className={cn(
              "min-w-0",
              article.lead
                ? "flex-[0_0_88%] sm:flex-[0_0_480px]"
                : "flex-[0_0_88%] sm:flex-[0_0_360px]"
            )}
          >
            <ArticleCard
              variant={article.lead ? "lead" : "default"}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              source={article.source}
              time={article.time}
              status={article.status}
              href={`/content/${article.slug}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
