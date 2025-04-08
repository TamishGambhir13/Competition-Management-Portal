import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, ArrowRight } from "lucide-react"
import Image from "next/image"

export function UpcomingTournaments() {
  const tournaments = [
    {
      id: 1,
      title: "Global Gaming Cup",
      date: "June 15, 2023",
      prize: "₹18,75,000",
      registrationEnds: "June 10, 2023",
      category: "Gaming",
      image: "/images/gaming-competition.png",
    },
    {
      id: 2,
      title: "Design Masters Challenge",
      date: "June 22, 2023",
      prize: "₹9,00,000",
      registrationEnds: "June 18, 2023",
      category: "Creative",
      image: "/images/trophy-computers.png",
    },
    {
      id: 3,
      title: "AI Innovation Tournament",
      date: "July 5, 2023",
      prize: "₹22,50,000",
      registrationEnds: "June 30, 2023",
      category: "Technology",
      image: "/images/hackathon.png",
    },
    {
      id: 4,
      title: "Content Creator Showdown",
      date: "July 12, 2023",
      prize: "₹11,25,000",
      registrationEnds: "July 8, 2023",
      category: "Media",
      image: "/images/esports-competition.png",
    },
  ]

  return (
    <section className="px-4 py-16 border-t border-gray-800 bg-[#0f1117]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Upcoming Tournaments</h2>
          <Link href="/tournaments" className="text-sm text-amber-400 hover:underline">
            View all tournaments
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {tournaments.map((tournament) => (
            <Card key={tournament.id} className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <div className="flex items-center mb-1 space-x-2">
                    <Badge variant="outline" className="text-xs bg-amber-900/50 text-amber-300 border-amber-800">
                      {tournament.category}
                    </Badge>
                  </div>

                  <h3 className="mb-1 text-lg font-bold">{tournament.title}</h3>

                  <div className="flex items-center mb-2 text-gray-300">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{tournament.date}</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
                    <span className="text-sm font-medium">{tournament.prize} Prize Pool</span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <Image
                    src={tournament.image || "/placeholder.svg"}
                    width={80}
                    height={80}
                    alt={tournament.title}
                    className="rounded-md mb-2 hidden md:block"
                  />
                  <Button size="sm" className="mb-2 bg-amber-500 hover:bg-amber-600">
                    Register
                  </Button>
                  <p className="text-xs text-gray-400">Registration ends {tournament.registrationEnds}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="border-gray-700 text-amber-300 hover:bg-gray-800">
            View All Tournaments
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

