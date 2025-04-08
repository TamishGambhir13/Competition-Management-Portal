"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/ui/fade-in"
import { FloatingElement } from "@/components/ui/floating-element"

interface FeatureSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition: "left" | "right"
}

export function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: FeatureSectionProps) {
  return (
    <section className="px-4 py-20 border-t border-gray-800">
      <div className="container mx-auto">
        <div
          className={cn(
            "flex flex-col items-center gap-12 md:flex-row",
            imagePosition === "left" && "md:flex-row-reverse",
          )}
        >
          <FadeIn direction={imagePosition === "right" ? "left" : "right"} className="flex-1">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">{title}</h2>
            <p className="text-gray-300">{description}</p>
          </FadeIn>

          <FadeIn direction={imagePosition === "right" ? "right" : "left"} className="flex-1">
            <FloatingElement yOffset={15} duration={6}>
              <Image
                src={imageSrc || "/placeholder.svg"}
                width={400}
                height={400}
                alt={imageAlt}
                className="mx-auto rounded-lg"
              />
            </FloatingElement>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

