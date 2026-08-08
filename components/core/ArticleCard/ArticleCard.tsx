import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export type ArticleStatus = "فوری" | "در انتظار تأیید" | "منتشر شده"

export type ArticleCardProps = {
  variant?: "default" | "lead"
  category: string
  title: string
  excerpt?: string
  source: string
  time: string
  status?: ArticleStatus
  href?: string
  className?: string
}

const statusStyles: Record<ArticleStatus, string> = {
  "فوری": "border-primary bg-primary text-primary-foreground",
  "در انتظار تأیید": "border-primary/40 bg-primary/5 text-primary",
  "منتشر شده": "border-border text-muted-foreground",
}

function StatusPill({
  status,
  className,
}: {
  status: ArticleStatus
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] leading-none font-bold",
        statusStyles[status],
        className
      )}
    >
      <span aria-hidden className="size-1 rounded-full bg-current" />
      {status}
    </span>
  )
}

export default function ArticleCard({
  variant = "default",
  category,
  title,
  excerpt,
  source,
  time,
  status = "منتشر شده",
  href,
  className,
}: ArticleCardProps) {
  const isLead = variant === "lead"

  return (
    <article
      aria-label={title}
      className={cn(
        "flex h-full flex-col rounded-lg p-5 shadow-sm transition-shadow hover:shadow-md",
        isLead
          ? "bg-foreground text-background"
          : "border border-border bg-card text-foreground",
        className
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            "flex items-center gap-1.5 text-[11px] font-bold",
            isLead ? "text-background/70" : "text-muted-foreground"
          )}
        >
          {!isLead && <span aria-hidden className="size-1.5 rounded-[1px] bg-primary" />}
          {category}
        </span>
        <div
          className={cn(
            "flex min-w-0 items-center gap-1.5 truncate text-[11px] tabular-nums",
            isLead ? "text-background/60" : "text-muted-foreground"
          )}
        >
          <time>{time}</time>
          <span aria-hidden className="opacity-40">·</span>
          <span className="truncate font-mono">{source}</span>
        </div>
      </header>

      <h3
        className={cn(
          "mt-3 font-extrabold tracking-tight",
          isLead
            ? "text-2xl leading-[1.3] md:text-[1.7rem]"
            : "text-[1.15rem] leading-[1.35]"
        )}
      >
        {title}
      </h3>

      {excerpt && (
        <p
          className={cn(
            "line-clamp-2 text-sm leading-7",
            isLead
              ? "mt-3 text-background/70"
              : "mt-2 text-muted-foreground"
          )}
        >
          {excerpt}
        </p>
      )}

      <footer className="mt-auto flex items-center justify-between gap-3 pt-5">
        <StatusPill status={status} />
        {href && (
          <Link
            href={href}
            className={cn(
              "inline-flex items-center gap-1.5 font-extrabold text-[11px] transition-colors",
              isLead
                ? "text-background/70 hover:text-background"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            مطالعهٔ کامل
            <ArrowLeft className="size-3" />
          </Link>
        )}
      </footer>
    </article>
  )
}