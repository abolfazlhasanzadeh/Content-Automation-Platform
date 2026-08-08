"use client"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Atom, Bot, Braces, Cpu, FileCode2, Server } from "lucide-react"
import { Stagger, Item } from "@/components/core/motion/StaggerGroup"
import type { Article, Category } from "@/lib/articles"

const iconBySlug: Record<string, LucideIcon> = {
  python: FileCode2,
  react: Atom,
  javascript: Braces,
  ai: Bot,
  rust: Cpu,
  node: Server,
}

export default function CategoryNav({
  categories,
  articles,
}: {
  categories: Category[]
  articles: Article[]
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold tracking-tight">
        <span aria-hidden className="size-1.5 rounded-[1px] bg-primary" />
        دسته‌بندی‌ها
      </h2>
      <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" delay={0.1}>
        {categories.map((category) => {
          const Icon = iconBySlug[category.slug]
          const count = articles
            .filter((a) => a.categorySlug === category.slug)
            .length.toLocaleString("fa-IR")
          return (
            <Item key={category.slug} hover>
              <Link
                href={`/category/${category.slug}`}
                className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                <span className="text-sm font-bold">{category.title}</span>
                <span className="text-[11px] text-muted-foreground">
                  {count} خبر
                </span>
              </Link>
            </Item>
          )
        })}
      </Stagger>
    </section>
  )
}
