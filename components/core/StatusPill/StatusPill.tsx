"use client"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export type ArticleStatus = "فوری" | "در انتظار تأیید" | "منتشر شده"

const statusStyles: Record<ArticleStatus, string> = {
  "فوری": "border-primary bg-primary text-primary-foreground",
  "در انتظار تأیید": "border-primary/40 bg-primary/5 text-primary",
  "منتشر شده": "border-border text-muted-foreground",
}

export default function StatusPill({
  status,
  className,
}: {
  status: ArticleStatus
  className?: string
}) {
  const reduced = useReducedMotion()

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] leading-none font-bold",
        statusStyles[status],
        className
      )}
    >
      <span aria-hidden className="relative flex size-1.5">
        {status === "فوری" && !reduced && (
          <motion.span
            className="absolute inline-flex size-full rounded-full bg-current"
            animate={{ scale: [1, 2.6], opacity: [0.8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <motion.span
          className={cn(
            "relative inline-flex size-full rounded-full bg-current",
            status === "منتشر شده" && "opacity-70"
          )}
          animate={
            status === "در انتظار تأیید" && !reduced
              ? { opacity: [0.25, 1, 0.25] }
              : undefined
          }
          transition={
            status === "در انتظار تأیید"
              ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        />
      </span>
      {status}
    </span>
  )
}
