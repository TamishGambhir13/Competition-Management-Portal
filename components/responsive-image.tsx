"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useResponsive } from "@/hooks/use-responsive"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  width?: number
  height?: number
  mobileSrc?: string
}

export function ResponsiveImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  quality = 75,
  fill = false,
  width,
  height,
  mobileSrc,
}: ResponsiveImageProps) {
  const { lessThan } = useResponsive()
  const [imageSrc, setImageSrc] = useState(src)

  useEffect(() => {
    if (mobileSrc && lessThan.md) {
      setImageSrc(mobileSrc)
    } else {
      setImageSrc(src)
    }
  }, [src, mobileSrc, lessThan.md])

  return (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      className={className}
      sizes={sizes}
      priority={priority}
      quality={quality}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
    />
  )
}

