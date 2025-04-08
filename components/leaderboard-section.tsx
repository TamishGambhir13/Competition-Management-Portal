"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"

export function LeaderboardSection() {
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
  ]

  return (
    <section className="px-4 py-16 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <FadeIn direction="left">
            <h2 className="text-2xl font-bold">Top Competitors</h2>
          </FadeIn>
          <FadeIn direction="right">
            <Link href="/leaderboards" className="text-sm text-amber-400 hover:underline">
              View full leaderboard
            </Link>
          </FadeIn>
        </div>

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
                        className="hover:bg-amber-900/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        whileHover={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}
                      >
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {player.rank === 1 ? (
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
                              >
                                <Trophy className="w-5 h-5 mr-1 text-amber-500" />
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
                        <td className="px-4 py-4 text-right whitespace-nowrap font-medium text-amber-400">
                          {player.winnings}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center mt-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-amber-900/20">
                    View Complete Leaderboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

