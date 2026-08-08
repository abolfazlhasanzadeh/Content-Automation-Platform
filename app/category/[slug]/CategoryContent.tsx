"use client"
import Link from "next/link"
import ArticleCard from "@/components/core/ArticleCard/ArticleCard"
import { motion } from "framer-motion"
import { EASE, Stagger, Item } from "@/components/core/motion/StaggerGroup"
import type { Article, Category } from "@/lib/articles"

interface ICategory {
  category: Category
  count: string
  items: Article[]
}

export default function CategoryContent({ category, count, items }: ICategory) {
  return (
    <>
      <motion.nav
        className="mb-6 flex items-center gap-2 text-[11px] text-muted-foreground"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Link href="/" className="transition-colors hover:text-primary">
          خانه
        </Link>
        <span className="opacity-40">/</span>
        <span className="text-foreground/70">{category.title}</span>
      </motion.nav>

      <motion.span
        aria-hidden
        className="mb-5 block h-1 w-10 bg-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        style={{ transformOrigin: "right" }}
      />

      <motion.h1
        className="text-2xl font-extrabold tracking-tight sm:text-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
      >
        {category.title}
      </motion.h1>
      <motion.p
        className="mt-2 text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
      >
        {category.description}
      </motion.p>
      <motion.p
        className="mt-1.5 text-[11px] tabular-nums text-muted-foreground/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        {count} خبر
      </motion.p>

      <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.1}>
        {items.map((item) => (
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
    </>
  )
}
