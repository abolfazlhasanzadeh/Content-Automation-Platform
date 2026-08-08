"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

export const EASE = [0.22, 1, 0.36, 1] as const

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.06, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function Item({
  children,
  className,
  hover = false,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: EASE },
        },
      }}
      {...(hover
        ? {
            whileHover: { y: -4 },
            transition: {
              type: "spring",
              stiffness: 350,
              damping: 25,
            },
          }
        : {})}
    >
      {children}
    </motion.div>
  )
}
