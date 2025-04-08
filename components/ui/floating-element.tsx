"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  yOffset = 10,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-yOffset / 2, yOffset / 2],
        transition: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration,
          delay,
          ease: "easeInOut",
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

