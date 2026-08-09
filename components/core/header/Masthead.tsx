"use client"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Masthead({
  date,
  total,
}: {
  date: string
  total: string
}) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-border pb-4">
      <div className="flex min-w-0 items-center gap-2.5">
        <SidebarTrigger
          className="md:hidden"
          aria-label="باز کردن فهرست موضوع‌ها"
          title="باز کردن فهرست موضوع‌ها"
        />
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span aria-hidden className="size-2.5 shrink-0 bg-primary" />
          <span className="truncate text-sm font-extrabold tracking-tight sm:text-base">
            اخبار برنامه‌نویسی، به فارسی
          </span>
        </Link>
      </div>
      <p className="flex shrink-0 items-center gap-x-2.5 text-xs text-muted-foreground">
        <time className="hidden tabular-nums sm:inline">{date}</time>
        <span aria-hidden className="hidden sm:inline">
          · 
        </span>
        <span className="tabular-nums">{total} مطلب</span>
      </p>
    </header>
  )
}