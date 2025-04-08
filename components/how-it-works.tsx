"use client"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Choose a Competition",
      description:
        "Browse our wide range of competitions across gaming, creative, technology, and more categories. Find the perfect match for your skills.",
    },
    {
      number: 2,
      title: "Register & Compete",
      description:
        "Sign up for your chosen competition, pay the entry fee, and follow the specific rules and guidelines to submit your entry or participate in live events.",
    },
    {
      number: 3,
      title: "Win & Collect Prizes",
      description:
        "Top performers win cash prizes and rewards. Winners receive their earnings instantly through our secure payment system.",
    },
  ]

  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="mb-16 text-3xl font-bold text-center md:text-4xl">How It Works</h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={0.2 * index} direction="up">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)" }}
                className="relative p-6 rounded-lg bg-[hsl(var(--brand-color-canvas-subtle))] transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 + index * 0.2 }}
                  className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 -mt-5 -ml-2 text-lg font-bold text-black bg-amber-500 rounded-full"
                >
                  {step.number}
                </motion.div>
                <h3 className="mt-4 mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <FadeIn delay={0.6}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="px-8 bg-amber-500 hover:bg-amber-600 text-black">
                Find a Competition
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

