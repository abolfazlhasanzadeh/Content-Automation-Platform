"use client"
import Link from "next/link"
import ArticleCard from "@/components/core/ArticleCard/ArticleCard"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { EASE, Stagger, Item } from "@/components/core/motion/StaggerGroup"
import type { Article } from "@/lib/articles"

export default function ContentPageClient({
  article,
  related,
}: {
  article: Article
  related: Article[]
}) {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 pb-14 pt-8 sm:px-6">
      <motion.nav
        className="mb-6 flex min-w-0 items-center gap-2 truncate text-[11px] text-muted-foreground"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Link href="/" className="shrink-0 transition-colors hover:text-primary">
          خانه
        </Link>
        <span className="shrink-0 opacity-40">/</span>
        <Link
          href={`/category/${article.categorySlug}`}
          className="shrink-0 transition-colors hover:text-primary"
        >
          {article.category}
        </Link>
        <span className="shrink-0 opacity-40">/</span>
        <span className="truncate text-foreground/70">{article.title}</span>
      </motion.nav>

      <motion.span
        aria-hidden
        className="mb-5 block h-1 w-10 bg-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        style={{ transformOrigin: "right" }}
      />

      <motion.div
        className="flex flex-wrap items-center gap-x-3 gap-y-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
      >
        <Link
          href={`/category/${article.categorySlug}`}
          className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground transition-colors hover:text-primary"
        >
          <span aria-hidden className="size-1.5 rounded-[1px] bg-primary" />
          {article.category}
        </Link>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] leading-none font-bold",
            article.status === "فوری"
              ? "border-primary bg-primary text-primary-foreground"
              : article.status === "در انتظار تأیید"
                ? "border-primary/40 bg-primary/5 text-primary"
                : "border-border text-muted-foreground"
          )}
        >
          {article.status}
        </span>
      </motion.div>

      <motion.h1
        className="mt-5 font-extrabold leading-[1.35] tracking-tight text-balance text-[1.65rem] sm:text-[2.1rem] sm:leading-[1.3]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
      >
        {article.title}
      </motion.h1>

      <motion.p
        className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
      >
        {article.excerpt}
      </motion.p>

      <motion.div
        className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border pb-6 text-[11px] tabular-nums text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          تولید خودکار
        </span>
        <span className="opacity-40">/</span>
        <span>بازبینی انسانی</span>
        <span aria-hidden className="hidden opacity-40 sm:block sm:ms-auto">
          —
        </span>
        <time>{article.time}</time>
        <span className="opacity-40">·</span>
        <span className="font-mono">{article.source}</span>
      </motion.div>

      <section className="mt-8 space-y-6">
        {article.body.map((paragraph, index) => (
          <motion.p
            key={index}
            className={cn(
              "text-[1.05rem] leading-8 text-foreground/85 sm:leading-9",
              index === 0 && "text-foreground/95"
            )}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, ease: EASE, delay: index * 0.05 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </section>

      <aside className="mt-14 border-t border-border pt-8">
        <h2 className="mb-4 text-xs font-bold text-muted-foreground">
          ادامهٔ خواندن
        </h2>
        <Stagger className="grid gap-4 sm:grid-cols-3">
          {related.map((item) => (
            <Item key={item.slug} hover>
              <ArticleCard
                category={item.category}
                title={item.title}
                excerpt={item.excerpt}
                source={item.source}
                time={item.time}
                status={item.status}
                href={`/content/${item.slug}`}
                className="min-h-64"
              />
            </Item>
          ))}
        </Stagger>
      </aside>
    </div>
  )
}
