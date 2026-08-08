"use client"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { motion } from "framer-motion"

export default function SiteHeader() {
  return (
    <motion.header
      className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background/90 px-4 shadow-sm backdrop-blur sm:px-6"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <SidebarTrigger className="-ms-1" />
      <Link href="/" className="flex min-w-0 items-center gap-2.5">
        <span aria-hidden className="size-2.5 shrink-0 bg-primary" />
        <span className="truncate text-sm font-extrabold">اتوماسیون محتوا</span>
      </Link>
    </motion.header>
  )
}
