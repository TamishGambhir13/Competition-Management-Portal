"use client"

import { useResponsive } from "@/hooks/use-responsive"
import type { ReactNode } from "react"

interface ResponsiveContainerProps {
  children: ReactNode
  breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl"
  showOnMobile?: boolean
}

export function MobileOnly({ children }: { children: ReactNode }) {
  const { lessThan } = useResponsive()

  if (!lessThan.md) return null
  return <>{children}</>
}

export function DesktopOnly({ children }: { children: ReactNode }) {
  const { greaterThan } = useResponsive()

  if (!greaterThan.sm) return null
  return <>{children}</>
}

export function ResponsiveContainer({ children, breakpoint = "md", showOnMobile = false }: ResponsiveContainerProps) {
  const { lessThan, greaterThan } = useResponsive()

  if (showOnMobile) {
    // Show on mobile, hide on desktop
    if (!lessThan[breakpoint]) return null
  } else {
    // Hide on mobile, show on desktop
    if (
      !greaterThan[
        breakpoint === "sm"
          ? "xs"
          : breakpoint === "md"
            ? "sm"
            : breakpoint === "lg"
              ? "md"
              : breakpoint === "xl"
                ? "lg"
                : "xl"
      ]
    )
      return null
  }

  return <>{children}</>
}

