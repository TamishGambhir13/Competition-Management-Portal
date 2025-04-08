"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Users, Clock, Search, Filter, Check } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function JoinTournamentPage() {
  const [selectedTournament, setSelectedTournament] = useState<number | null>(null)

  // Sample tournament data
  const tournaments = [
    {
      id: 1,
      title: "Battle Royale Championship",
      category: "Gaming",
      entryFee: "₹1,999",
      prize: "₹7,50,000",
      participants: 128,
      maxParticipants: 256,
      endsIn: "2 days",
      startDate: "June 15, 2023",
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
      maxParticipants: 500,
      endsIn: "5 days",
      startDate: "June 22, 2023",
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
      maxParticipants: 300,
      endsIn: "3 days",
      startDate: "July 5, 2023",
      image: "/images/hackathon.png",
      featured: false,
    },
  ]

  const categories = ["All", "Gaming", "Creative", "Technology", "Sports", "Education"]

  const handleJoin = (tournamentId: number) => {
    setSelectedTournament(tournamentId)
  }

  return (
    <div>
      <FadeIn>
        <h1 className="text-3xl font-bold mb-2">Join Tournament</h1>
        <p className="text-gray-400 mb-8">Select a tournament to join and compete for amazing prizes</p>
      </FadeIn>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-0 z-10 bg-[#0f1117]/80 backdrop-blur-sm py-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search tournaments..."
            className="w-full pl-10 pr-4 py-2 bg-amber-900/10 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tournaments.map((tournament) => (
          <FadeIn key={tournament.id} delay={0.1 * tournament.id}>
            <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
              <Card className="overflow-hidden border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white h-full">
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
                      <span>
                        {tournament.participants}/{tournament.maxParticipants}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Starts: {tournament.startDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center mt-3 text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Registration ends in {tournament.endsIn}</span>
                  </div>

                  <Link href={`/dashboard/tournament/${tournament.id}`} className="w-full">
                    <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* Registration Modal */}
      {selectedTournament && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#0f1117]/70 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="w-full max-w-md"
          >
            <Card className="border-0 bg-[#0f1117] text-white">
              <CardHeader>
                <CardTitle>Tournament Registration</CardTitle>
                <CardDescription className="text-gray-400">
                  Complete your registration for {tournaments.find((t) => t.id === selectedTournament)?.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="gamertag">Gamer Tag / Username</Label>
                    <Input
                      id="gamertag"
                      placeholder="Enter your in-game name"
                      className="bg-amber-900/10 border-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platform">Platform</Label>
                    <select
                      id="platform"
                      className="w-full p-2 rounded-md bg-amber-900/10 border border-gray-700 text-white"
                    >
                      <option value="">Select your platform</option>
                      <option value="pc">PC</option>
                      <option value="playstation">PlayStation</option>
                      <option value="xbox">Xbox</option>
                      <option value="mobile">Mobile</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <span>Entry Fee:</span>
                      <span className="font-bold text-amber-400">
                        {tournaments.find((t) => t.id === selectedTournament)?.entryFee}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        className="flex-1 bg-amber-500 hover:bg-amber-600"
                        onClick={(e) => {
                          e.preventDefault()
                          // Handle payment and registration
                          alert("Registration successful!")
                          setSelectedTournament(null)
                        }}
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Confirm & Pay
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-700"
                        onClick={() => setSelectedTournament(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

