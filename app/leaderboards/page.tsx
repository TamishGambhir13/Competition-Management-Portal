"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Search, Filter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export default function LeaderboardsPage() {
  const categories = ["Global", "Gaming", "Creative", "Technology", "Monthly", "Weekly"]

  const topPlayers = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "alexj",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹9,33,750",
      competitions: 32,
      rank: 1,
    },
    {
      id: 2,
      name: "Sarah Williams",
      username: "sarahw",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹7,71,000",
      competitions: 28,
      rank: 2,
    },
    {
      id: 3,
      name: "Michael Chen",
      username: "mikec",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹7,40,625",
      competitions: 25,
      rank: 3,
    },
    {
      id: 4,
      name: "Jessica Lee",
      username: "jesslee",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹6,25,500",
      competitions: 22,
      rank: 4,
    },
    {
      id: 5,
      name: "David Kim",
      username: "davidk",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹5,94,000",
      competitions: 20,
      rank: 5,
    },
    {
      id: 6,
      name: "Priya Patel",
      username: "priyap",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹5,62,500",
      competitions: 18,
      rank: 6,
    },
    {
      id: 7,
      name: "Raj Sharma",
      username: "rajs",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹5,31,000",
      competitions: 24,
      rank: 7,
    },
    {
      id: 8,
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹4,99,500",
      competitions: 19,
      rank: 8,
    },
    {
      id: 9,
      name: "John Smith",
      username: "johns",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹4,68,000",
      competitions: 21,
      rank: 9,
    },
    {
      id: 10,
      name: "Lisa Wang",
      username: "lisaw",
      avatar: "/placeholder.svg?height=40&width=40",
      winnings: "₹4,36,500",
      competitions: 17,
      rank: 10,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <FadeIn>
          <h1 className="text-3xl font-bold mb-2">Leaderboards</h1>
          <p className="text-gray-400 mb-8">See who's leading the competition across different categories</p>
        </FadeIn>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-0 z-10 bg-[#0f1117]/80 backdrop-blur-sm py-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search players..."
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

        {/* Leaderboard */}
        <FadeIn>
          <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Global Leaderboard</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Player
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Competitions
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Total Winnings
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {topPlayers.map((player, index) => (
                      <motion.tr
                        key={player.id}
                        className="hover:bg-blue-900/30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index, duration: 0.5 }}
                        whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                      >
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {player.rank === 1 ? (
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
                              >
                                <Trophy className="w-5 h-5 mr-1 text-yellow-500" />
                              </motion.div>
                            ) : (
                              <span className="text-lg font-bold">{player.rank}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarImage src={player.avatar} alt={player.name} />
                              <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{player.name}</div>
                              <div className="text-sm text-gray-400">@{player.username}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right whitespace-nowrap">{player.competitions}</td>
                        <td className="px-4 py-4 text-right whitespace-nowrap font-medium text-green-400">
                          {player.winnings}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                    disabled
                  >
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
            </CardContent>
          </Card>
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

