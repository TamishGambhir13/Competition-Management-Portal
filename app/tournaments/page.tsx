"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Clock, Filter, Search } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function TournamentsPage() {
  // Sample tournament data
  const tournaments = [
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
    {
      id: 4,
      title: "Mobile Gaming Tournament",
      category: "Gaming",
      entryFee: "₹999",
      prize: "₹2,50,000",
      participants: 512,
      endsIn: "7 days",
      image: "/images/esports-competition.png",
      featured: false,
    },
    {
      id: 5,
      title: "Video Editing Contest",
      category: "Creative",
      entryFee: "₹1,299",
      prize: "₹4,00,000",
      participants: 128,
      endsIn: "10 days",
      image: "/images/trophy-computers.png",
      featured: false,
    },
    {
      id: 6,
      title: "Data Science Challenge",
      category: "Technology",
      entryFee: "₹1,799",
      prize: "₹6,00,000",
      participants: 96,
      endsIn: "14 days",
      image: "/images/hackathon.png",
      featured: false,
    },
  ]

  const categories = ["All", "Gaming", "Creative", "Technology", "Sports", "Education"]

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <FadeIn>
          <h1 className="text-3xl font-bold mb-2">Tournaments</h1>
          <p className="text-gray-400 mb-8">Browse and join tournaments across various categories</p>
        </FadeIn>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-0 z-10 bg-[#0f1117]/80 backdrop-blur-sm py-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search tournaments..."
              className="w-full pl-10 pr-4 py-2 bg-blue-900/20 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0 ? "bg-amber-500 hover:bg-amber-600" : "border-gray-700 text-gray-300 hover:bg-gray-800"
                }
              >
                {category}
              </Button>
            ))}
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <Filter className="h-4 w-4 mr-1" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tournaments.map((tournament, index) => (
            <FadeIn key={tournament.id} delay={0.1 * index}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <Card className="overflow-hidden border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                  <div className="relative">
                    <Image
                      src={tournament.image || "/placeholder.svg"}
                      alt={tournament.title}
                      width={350}
                      height={200}
                      className="object-cover w-full h-48"
                    />
                    {tournament.featured && <Badge className="absolute top-3 right-3 bg-amber-500">Featured</Badge>}
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center mb-2 space-x-2">
                      <Badge variant="outline" className="text-xs bg-amber-900/50 text-amber-300 border-amber-800">
                        {tournament.category}
                      </Badge>
                      <span className="text-xs text-gray-400">Entry: {tournament.entryFee}</span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold">{tournament.title}</h3>

                    <div className="flex items-center mb-4 text-gray-300">
                      <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
                      <span className="text-sm font-medium">{tournament.prize} Prize Pool</span>
                    </div>

                    <div className="flex flex-wrap justify-between pt-3 mt-3 text-sm text-gray-400 border-t border-gray-700">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{tournament.participants} participants</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Ends in {tournament.endsIn}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600">Join Tournament</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 bg-blue-900/30 text-white">
              1
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              2
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              3
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              Next
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

