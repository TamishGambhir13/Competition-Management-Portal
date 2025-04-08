"use client"

import { useState, useEffect } from "react"

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export function useResponsive() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs")
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth)

    // Determine initial breakpoint
    const determineBreakpoint = () => {
      const width = window.innerWidth
      if (width >= breakpoints["2xl"]) return "2xl"
      if (width >= breakpoints.xl) return "xl"
      if (width >= breakpoints.lg) return "lg"
      if (width >= breakpoints.md) return "md"
      if (width >= breakpoints.sm) return "sm"
      return "xs"
    }

    setBreakpoint(determineBreakpoint())

    // Update on resize
    const handleResize = () => {
      setWidth(window.innerWidth)
      setBreakpoint(determineBreakpoint())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isXs = width < breakpoints.sm
  const isSm = width >= breakpoints.sm && width < breakpoints.md
  const isMd = width >= breakpoints.md && width < breakpoints.lg
  const isLg = width >= breakpoints.lg && width < breakpoints.xl
  const isXl = width >= breakpoints.xl && width < breakpoints["2xl"]
  const is2Xl = width >= breakpoints["2xl"]

  const lessThan = {
    sm: width < breakpoints.sm,
    md: width < breakpoints.md,
    lg: width < breakpoints.lg,
    xl: width < breakpoints.xl,
    "2xl": width < breakpoints["2xl"],
  }

  const greaterThan = {
    xs: width >= breakpoints.sm,
    sm: width >= breakpoints.md,
    md: width >= breakpoints.lg,
    lg: width >= breakpoints.xl,
    xl: width >= breakpoints["2xl"],
  }

  return {
    width,
    breakpoint,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    lessThan,
    greaterThan,
  }
}

