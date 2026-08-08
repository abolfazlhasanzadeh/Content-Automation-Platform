"use client"
import { motion } from "framer-motion"
import { EASE } from "@/components/core/motion/StaggerGroup"
import type { ReactNode } from "react"

export default function MotionArticleCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    >
      {children}
    </motion.div>
  )
}
