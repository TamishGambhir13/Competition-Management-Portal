"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Gift, Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function PrizesPage() {
  const prizes = [
    {
      id: 1,
      title: "Grand Championship",
      category: "Gaming",
      firstPrize: "₹5,00,000",
      secondPrize: "₹2,50,000",
      thirdPrize: "₹1,00,000",
      totalPool: "₹10,00,000",
      date: "December 15, 2023",
      featured: true,
    },
    {
      id: 2,
      title: "Design Masters",
      category: "Creative",
      firstPrize: "₹3,00,000",
      secondPrize: "₹1,50,000",
      thirdPrize: "₹75,000",
      totalPool: "₹6,00,000",
      date: "November 30, 2023",
      featured: false,
    },
    {
      id: 3,
      title: "Coding Challenge",
      category: "Technology",
      firstPrize: "₹4,00,000",
      secondPrize: "₹2,00,000",
      thirdPrize: "₹1,00,000",
      totalPool: "₹8,00,000",
      date: "January 15, 2024",
      featured: true,
    },
    {
      id: 4,
      title: "Mobile Gaming Cup",
      category: "Gaming",
      firstPrize: "₹2,50,000",
      secondPrize: "₹1,25,000",
      thirdPrize: "₹50,000",
      totalPool: "₹5,00,000",
      date: "December 5, 2023",
      featured: false,
    },
    {
      id: 5,
      title: "Content Creator Awards",
      category: "Creative",
      firstPrize: "₹3,50,000",
      secondPrize: "₹1,75,000",
      thirdPrize: "₹75,000",
      totalPool: "₹7,00,000",
      date: "February 10, 2024",
      featured: false,
    },
    {
      id: 6,
      title: "AI Innovation Challenge",
      category: "Technology",
      firstPrize: "₹4,50,000",
      secondPrize: "₹2,25,000",
      thirdPrize: "₹1,00,000",
      totalPool: "₹9,00,000",
      date: "March 1, 2024",
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <FadeIn>
          <h1 className="text-3xl font-bold mb-2">Prizes & Rewards</h1>
          <p className="text-gray-400 mb-8">Discover the exciting prizes available across our competitions</p>
        </FadeIn>

        {/* Prize Distribution Info */}
        <FadeIn>
          <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">How Prize Distribution Works</h2>
              <p className="mb-4">
                At CompetitionPortal, we ensure fair and transparent prize distribution. All prizes are paid out in
                Indian Rupees (₹) through secure payment methods including UPI, direct bank transfer, and digital
                wallets.
              </p>
              <p className="mb-4">
                Winners receive their prizes within 48 hours after competition results are verified and finalized. Our
                automated prize distribution system ensures quick and hassle-free payouts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-[hsl(var(--brand-color-canvas-subtle))] bg-opacity-60 rounded-lg border-2 border-amber-500/50 shadow-lg shadow-amber-500/20">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-5 h-5 mr-2 text-amber-500" />
                    <h3 className="font-bold">First Place</h3>
                  </div>
                  <div className="flex justify-center my-4">
                    <Image
                      src="/images/trophy-cartoon.png"
                      width={100}
                      height={100}
                      alt="First place trophy"
                      className="h-24 object-contain"
                    />
                  </div>
                  <p className="text-sm text-amber-200">Typically 50% of the total prize pool</p>
                </div>
                <div className="p-4 bg-[hsl(var(--brand-color-canvas-subtle))] bg-opacity-60 rounded-lg border-2 border-amber-500/50 shadow-lg shadow-amber-500/20">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-5 h-5 mr-2 text-amber-400" />
                    <h3 className="font-bold">Second Place</h3>
                  </div>
                  <div className="flex justify-center my-4">
                    <Image
                      src="/images/trophy-computers.png"
                      width={100}
                      height={100}
                      alt="Second place trophy"
                      className="h-24 object-contain"
                    />
                  </div>
                  <p className="text-sm text-amber-200">Typically 25% of the total prize pool</p>
                </div>
                <div className="p-4 bg-[hsl(var(--brand-color-canvas-subtle))] bg-opacity-60 rounded-lg border-2 border-amber-500/50 shadow-lg shadow-amber-500/20">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-5 h-5 mr-2 text-amber-400" />
                    <h3 className="font-bold">Third Place</h3>
                  </div>
                  <div className="flex justify-center my-4">
                    <Image
                      src="/images/trophy-stage.png"
                      width={100}
                      height={100}
                      alt="Third place trophy"
                      className="h-24 object-contain"
                    />
                  </div>
                  <p className="text-sm text-amber-200">Typically 10-15% of the total prize pool</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Upcoming Prize Pools */}
        <FadeIn>
          <h2 className="text-2xl font-bold mb-6">Upcoming Prize Pools</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mx-auto max-w-7xl">
          {prizes.map((prize, index) => (
            <FadeIn key={prize.id} delay={0.1 * index}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white h-full flex flex-col">
                  <CardContent className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs bg-amber-900/50 text-amber-300 border-amber-800">
                        {prize.category}
                      </Badge>
                      {prize.featured && <Badge className="bg-amber-500">Featured</Badge>}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{prize.title}</h3>

                    <div className="flex items-center mb-4 text-gray-300">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{prize.date}</span>
                    </div>

                    <div className="flex justify-center items-center my-4 h-32">
                      <Image
                        src={
                          prize.category === "Gaming"
                            ? "/images/gaming-competition.png"
                            : prize.category === "Creative"
                              ? "/images/trophy-computers.png"
                              : "/images/hackathon.png"
                        }
                        width={120}
                        height={120}
                        alt={prize.title}
                        className="rounded-md object-contain max-h-full"
                      />
                    </div>

                    <div className="flex items-center mb-6">
                      <Gift className="w-5 h-5 mr-2 text-blue-400" />
                      <span className="text-lg font-bold text-blue-400">{prize.totalPool} Prize Pool</span>
                    </div>

                    <div className="space-y-3 mb-4 mt-auto">
                      <div className="flex justify-between">
                        <span className="text-sm">1st Place:</span>
                        <span className="font-medium text-yellow-400">{prize.firstPrize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">2nd Place:</span>
                        <span className="font-medium text-gray-300">{prize.secondPrize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">3rd Place:</span>
                        <span className="font-medium text-amber-700">{prize.thirdPrize}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600">View Details</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Section */}
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-8 p-4 sm:p-8 mt-10 rounded-lg md:flex-row bg-[hsl(var(--brand-color-canvas-subtle))] backdrop-blur-sm">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to win big?</h3>
              <p className="text-gray-300">Join our competitions today and compete for amazing prizes!</p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="px-8 bg-amber-500 hover:bg-amber-600">
                Browse Competitions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

