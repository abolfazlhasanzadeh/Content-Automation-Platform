"use client"
import { cn } from "@/lib/utils"
import { Stagger, Item } from "@/components/core/motion/StaggerGroup"
import AnimatedNumber from "@/components/core/motion/AnimatedNumber"
import type { Article, Category } from "@/lib/articles"

type Stat = {
  label: string
  value: number
  accent?: boolean
}

export default function StatsStrip({
  articles,
  categories,
}: {
  articles: Article[]
  categories: Category[]
}) {
  const stats: Stat[] = [
    {
      label: "در انتظار تأیید",
      value: articles.filter((a) => a.status === "در انتظار تأیید").length,
      accent: true,
    },
    {
      label: "منتشر شده",
      value: articles.filter((a) => a.status === "منتشر شده").length,
    },
    {
      label: "فوری",
      value: articles.filter((a) => a.status === "فوری").length,
    },
    {
      label: "کانال‌ها",
      value: categories.length,
    },
  ]

  return (
    <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <Item key={stat.label} hover>
          <div
            className={cn(
              "flex flex-col gap-1.5 rounded-lg border p-4 shadow-sm",
              stat.accent
                ? "border-primary/40 bg-primary/5"
                : "border-border bg-card"
            )}
          >
            <span className="text-[11px] font-bold text-muted-foreground">
              {stat.label}
            </span>
            <span className="text-2xl font-extrabold tabular-nums">
              <AnimatedNumber value={stat.value} />
            </span>
          </div>
        </Item>
      ))}
    </Stagger>
  )
}
