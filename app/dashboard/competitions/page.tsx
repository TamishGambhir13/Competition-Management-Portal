import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Clock, Filter, Search } from "lucide-react"

export default function CompetitionsPage() {
  // Sample competition data - in a real app, this would come from an API
  const competitions = [
    {
      id: 1,
      title: "Battle Royale Championship",
      category: "Gaming",
      entryFee: "₹1,999",
      prize: "₹7,50,000",
      participants: 128,
      endsIn: "2 days",
      image: "/placeholder.svg?height=200&width=350",
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
      image: "/placeholder.svg?height=200&width=350",
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
      image: "/placeholder.svg?height=200&width=350",
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
      image: "/placeholder.svg?height=200&width=350",
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
      image: "/placeholder.svg?height=200&width=350",
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
      image: "/placeholder.svg?height=200&width=350",
      featured: false,
    },
  ]

  const categories = ["All", "Gaming", "Creative", "Technology", "Sports", "Education"]

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">All Competitions</h1>
          <p className="text-gray-400">Browse and join competitions across various categories</p>
        </div>
        <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700">Create Competition</Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-0 z-10 bg-[#0f1117]/80 backdrop-blur-sm py-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search competitions..."
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
                index === 0 ? "bg-blue-600 hover:bg-blue-700" : "border-gray-700 text-gray-300 hover:bg-gray-800"
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

      {/* Competitions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {competitions.map((competition) => (
          <Card key={competition.id} className="overflow-hidden border-0 bg-blue-900/20 text-white">
            <div className="relative">
              <Image
                src={competition.image || "/placeholder.svg"}
                alt={competition.title}
                width={350}
                height={200}
                className="object-cover w-full h-48"
              />
              {competition.featured && <Badge className="absolute top-3 right-3 bg-blue-600">Featured</Badge>}
            </div>

            <CardContent className="p-5">
              <div className="flex items-center mb-2 space-x-2">
                <Badge variant="outline" className="text-xs bg-blue-900/50 text-blue-300 border-blue-800">
                  {competition.category}
                </Badge>
                <span className="text-xs text-gray-400">Entry: {competition.entryFee}</span>
              </div>

              <h3 className="mb-2 text-xl font-bold">{competition.title}</h3>

              <div className="flex items-center mb-4 text-gray-300">
                <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
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

              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Join Competition</Button>
            </CardContent>
          </Card>
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
    </div>
  )
}

