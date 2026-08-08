"use client"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"
import { useReducedMotion } from "framer-motion"

export default function AnimatedNumber({
  value,
  locale = "fa-IR",
}: {
  value: number
  locale?: string
}) {
  const reduced = useReducedMotion()
  const motionVal = useMotionValue(reduced ? value : 0)
  const displayed = useTransform(motionVal, (v) => Math.round(v).toLocaleString(locale))

  useEffect(() => {
    if (reduced) return
    const controls = animate(motionVal, value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    })
    return () => controls.stop()
  }, [value, motionVal, reduced])

  return <motion.span>{displayed}</motion.span>
}
