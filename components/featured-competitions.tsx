"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Clock } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"

export function FeaturedCompetitions() {
  const competitions = [
    {
      id: 1,
      title: "Battle Royale Championship",
      category: "Gaming",
      entryFee: "₹1,999",
      prize: "₹7,50,000",
      participants: 128,
      endsIn: "2 days",
      image: "/images/gaming-competition.png",
      featured: true,
    },
    {
      id: 2,
      title: "Photography Masters",
      category: "Creative",
      entryFee: "₹1,199",
      prize: "₹3,75,000",
      participants: 256,
      endsIn: "5 days",
      image: "/images/trophy-stage.png",
      featured: false,
    },
    {
      id: 3,
      title: "Coding Challenge",
      category: "Technology",
      entryFee: "₹1,499",
      prize: "₹5,50,000",
      participants: 192,
      endsIn: "3 days",
      image: "/images/hackathon.png",
      featured: false,
    },
  ]

  return (
    <section className="px-4 py-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <FadeIn direction="left">
            <h2 className="text-2xl font-bold">Featured Competitions</h2>
          </FadeIn>
          <FadeIn direction="right">
            <Link href="/dashboard/competitions" className="text-sm text-amber-400 hover:underline">
              View all competitions
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {competitions.map((competition, index) => (
            <FadeIn key={competition.id} delay={0.2 * index} direction="up">
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <Card className="overflow-hidden border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                  <div className="relative">
                    <Image
                      src={competition.image || "/placeholder.svg"}
                      alt={competition.title}
                      width={350}
                      height={200}
                      className="object-cover w-full h-48"
                    />
                    {competition.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                      >
                        <Badge className="absolute top-3 right-3 bg-amber-500 text-black">Featured</Badge>
                      </motion.div>
                    )}
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center mb-2 space-x-2">
                      <Badge variant="outline" className="text-xs bg-amber-900/30 text-amber-300 border-amber-800">
                        {competition.category}
                      </Badge>
                      <span className="text-xs text-gray-400">Entry: {competition.entryFee}</span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold">{competition.title}</h3>

                    <div className="flex items-center mb-4 text-gray-300">
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 15, 0] }}
                        transition={{
                          duration: 0.5,
                          delay: 1 + index * 0.3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 4,
                        }}
                      >
                        <Trophy className="w-4 h-4 mr-1 text-amber-500" />
                      </motion.div>
                      <span className="text-sm font-medium">{competition.prize} Prize Pool</span>
                    </div>

                    <div className="flex flex-wrap justify-between pt-3 mt-3 text-sm text-gray-400 border-t border-gray-700">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{competition.participants} participants</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Ends in {competition.endsIn}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

