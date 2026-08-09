"use client"
import Link from "next/link"
import { Stagger, Item } from "@/components/core/motion/StaggerGroup"
import { fallbackIcon, iconBySlug } from "@/lib/category-icons"
import type { Category, CategoryCount } from "@/lib/articles"

export default function CategoryNav({
  categories,
  counts,
}: {
  categories: Category[]
  counts: CategoryCount[]
}) {
  const countBySlug = new Map(counts.map((c) => [c.categorySlug, c.count]))

  return (
    <Stagger className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4" delay={0.1}>
      {categories.map((category) => {
        const Icon = iconBySlug[category.slug] ?? fallbackIcon
        const count = countBySlug.get(category.slug) ?? 0
        return (
          <Item key={category.slug} hover>
            <Link
              href={`/category/${category.slug}`}
              className="group flex items-center justify-between gap-2 rounded-lg border border-border bg-card px-3.5 py-3 transition-colors hover:border-primary/50"
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <Icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                <span className="truncate text-sm font-bold">{category.title}</span>
              </span>
              <span className="flex shrink-0 items-center gap-1 text-[11px] text-muted-foreground">
                <span className="tabular-nums">{count.toLocaleString("fa-IR")}</span>
                <span>خبر</span>
              </span>
            </Link>
          </Item>
        )
      })}
    </Stagger>
  )
}