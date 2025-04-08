"use client"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"
import {
  Trophy,
  Calendar,
  Users,
  Clock,
  MapPin,
  Award,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Share2,
  BookmarkPlus,
  MessageSquare,
  User,
} from "lucide-react"

export default function TournamentDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [isRegistering, setIsRegistering] = useState(false)
  const tournamentId = params.id as string

  // Sample tournament data - in a real app, you would fetch this based on the ID
  const tournaments = [
    {
      id: "1",
      title: "Battle Royale Championship",
      category: "Gaming",
      entryFee: "₹1,999",
      prize: "₹7,50,000",
      participants: 128,
      maxParticipants: 256,
      endsIn: "2 days",
      startDate: "June 15, 2023",
      endDate: "June 18, 2023",
      registrationDeadline: "June 10, 2023",
      image: "/images/gaming-competition.png",
      featured: true,
      location: "Online",
      organizer: "GamersHub India",
      description:
        "Join the ultimate Battle Royale showdown where 256 players will compete for glory and massive cash prizes. This tournament features multiple rounds of intense gameplay across three days, with the final 16 players competing in a grand finale streamed live to thousands of viewers.",
      rules: [
        "Players must be 16+ years old",
        "Valid game account required",
        "Players must be available for all scheduled matches",
        "Use of cheats or exploits will result in immediate disqualification",
        "Tournament administrators' decisions are final",
        "Players must use the official tournament Discord for communication",
        "Screen sharing may be required for verification purposes",
      ],
      schedule: [
        {
          date: "June 15, 2023",
          time: "18:00 - 22:00 IST",
          stage: "Qualification Rounds",
          description: "256 players compete in 16 lobbies of 16 players each. Top 8 from each lobby advance.",
        },
        {
          date: "June 16, 2023",
          time: "18:00 - 22:00 IST",
          stage: "Quarter Finals",
          description: "128 qualified players compete in 8 lobbies. Top 8 from each lobby advance.",
        },
        {
          date: "June 17, 2023",
          time: "18:00 - 22:00 IST",
          stage: "Semi Finals",
          description: "64 players compete in 4 lobbies. Top 4 from each lobby advance.",
        },
        {
          date: "June 18, 2023",
          time: "19:00 - 22:00 IST",
          stage: "Grand Finale",
          description: "Final 16 players compete in a series of 6 matches to determine the champion.",
        },
      ],
      prizes: [
        { position: "1st Place", amount: "₹3,00,000" },
        { position: "2nd Place", amount: "₹1,50,000" },
        { position: "3rd Place", amount: "₹75,000" },
        { position: "4th Place", amount: "₹50,000" },
        { position: "5th-10th Place", amount: "₹25,000 each" },
        { position: "11th-16th Place", amount: "₹10,000 each" },
      ],
      requirements: {
        hardware: "PC with minimum i5 processor, 8GB RAM, GTX 1060 or equivalent",
        software: "Latest game client version, Discord with microphone",
        other: "Stable internet connection with minimum 10Mbps download speed",
      },
    },
    {
      id: "2",
      title: "Photography Masters",
      category: "Creative",
      entryFee: "₹1,199",
      prize: "₹3,75,000",
      participants: 256,
      maxParticipants: 500,
      endsIn: "5 days",
      startDate: "June 22, 2023",
      endDate: "July 15, 2023",
      registrationDeadline: "June 18, 2023",
      image: "/images/trophy-stage.png",
      featured: false,
      location: "Online Submission",
      organizer: "Creative Arts Foundation",
      description:
        "Photography Masters is a prestigious competition for photographers across India to showcase their talent and creativity. This year's theme is 'Urban Wilderness' - capturing the contrast between urban environments and nature. Submit your best work and get a chance to be featured in our annual exhibition and photography book.",
      rules: [
        "Open to all photographers in India",
        "Maximum 3 entries per participant",
        "Photos must be taken within the last 12 months",
        "Basic editing allowed, but no composite images",
        "Minimum resolution of 12 megapixels required",
        "All submissions must be original work",
        "Photos must not contain watermarks or borders",
      ],
      schedule: [
        {
          date: "June 22, 2023",
          time: "00:01 IST",
          stage: "Submission Period Begins",
          description: "Portal opens for photo submissions",
        },
        {
          date: "July 15, 2023",
          time: "23:59 IST",
          stage: "Submission Deadline",
          description: "Last day to submit entries",
        },
        {
          date: "July 16-30, 2023",
          time: "All Day",
          stage: "Judging Period",
          description: "Expert panel reviews all submissions",
        },
        {
          date: "August 5, 2023",
          time: "18:00 IST",
          stage: "Winners Announcement",
          description: "Live stream event to announce winners",
        },
      ],
      prizes: [
        { position: "1st Place", amount: "₹1,50,000 + Professional Camera Kit" },
        { position: "2nd Place", amount: "₹75,000 + Professional Lens" },
        { position: "3rd Place", amount: "₹50,000 + Photography Accessories" },
        { position: "People's Choice", amount: "₹50,000" },
        { position: "10 Honorable Mentions", amount: "₹5,000 each + Exhibition Feature" },
      ],
      requirements: {
        hardware: "Digital camera or smartphone with minimum 12MP resolution",
        software: "Basic photo editing software (optional)",
        other: "Ability to upload high-resolution JPEG or PNG files",
      },
    },
    {
      id: "3",
      title: "Coding Challenge",
      category: "Technology",
      entryFee: "₹1,499",
      prize: "₹5,50,000",
      participants: 192,
      maxParticipants: 300,
      endsIn: "3 days",
      startDate: "July 5, 2023",
      endDate: "July 7, 2023",
      registrationDeadline: "June 30, 2023",
      image: "/images/hackathon.png",
      featured: false,
      location: "Online + Final Round in Bangalore",
      organizer: "TechMinds Foundation",
      description:
        "A three-day intensive coding competition designed to test your problem-solving skills, algorithmic thinking, and coding efficiency. Participants will face increasingly difficult challenges across multiple domains including algorithms, data structures, machine learning, and system design. The top performers will be invited to an in-person final round in Bangalore.",
      rules: [
        "Open to all coders in India",
        "Individual participation only, no teams",
        "Solutions must be original and created during the competition",
        "Plagiarism will result in immediate disqualification",
        "Participants must solve problems in the allowed time frame",
        "Participants must solve problems in the allowed time frame",
        "Multiple programming languages supported",
        "Final round participants must be able to travel to Bangalore",
      ],
      schedule: [
        {
          date: "July 5, 2023",
          time: "10:00 - 18:00 IST",
          stage: "Preliminary Round",
          description: "Online coding challenges to select top 100 participants",
        },
        {
          date: "July 6, 2023",
          time: "10:00 - 18:00 IST",
          stage: "Semi-Final Round",
          description: "Advanced problems for the top 100 to select finalists",
        },
        {
          date: "July 7, 2023",
          time: "10:00 - 17:00 IST",
          stage: "Final Round (In-person)",
          description: "Top 20 finalists compete in Bangalore for the grand prize",
        },
      ],
      prizes: [
        { position: "1st Place", amount: "₹2,50,000 + Job Opportunity" },
        { position: "2nd Place", amount: "₹1,25,000" },
        { position: "3rd Place", amount: "₹75,000" },
        { position: "4th-10th Place", amount: "₹20,000 each" },
        { position: "Best Rookie (< 2 years experience)", amount: "₹50,000" },
      ],
      requirements: {
        hardware: "Computer with reliable internet connection",
        software: "Modern web browser, code editor of choice",
        other: "Knowledge of at least one programming language (Python, Java, C++, JavaScript)",
      },
    },
  ]

  const tournament = tournaments.find((t) => t.id === tournamentId)

  if (!tournament) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <AlertCircle className="w-16 h-16 text-amber-500 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Tournament Not Found</h1>
        <p className="text-gray-400 mb-6">The tournament you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.back()} className="bg-amber-500 hover:bg-amber-600">
          <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
        </Button>
      </div>
    )
  }

  const handleRegister = () => {
    setIsRegistering(true)
  }

  return (
    <div className="pb-16">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" onClick={() => router.back()} className="border-gray-700 text-gray-300">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tournaments
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative mb-8 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        <Image
          src={tournament.image || "/placeholder.svg"}
          alt={tournament.title}
          width={1200}
          height={400}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge className="bg-amber-500">{tournament.category}</Badge>
            {tournament.featured && <Badge className="bg-blue-600">Featured</Badge>}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{tournament.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{tournament.startDate}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{tournament.location}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>
                {tournament.participants}/{tournament.maxParticipants} Participants
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Tournament Details */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <FadeIn>
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="rules">Rules</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="prizes">Prizes</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4">
                <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Tournament Overview</h2>
                    <p className="text-gray-300 mb-6">{tournament.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Details</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Organizer:</span>
                            <span>{tournament.organizer}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Start Date:</span>
                            <span>{tournament.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">End Date:</span>
                            <span>{tournament.endDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Registration Deadline:</span>
                            <span>{tournament.registrationDeadline}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Entry Fee:</span>
                            <span className="font-semibold text-amber-400">{tournament.entryFee}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Requirements</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Hardware:</span>
                            <span className="text-right">{tournament.requirements.hardware}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Software:</span>
                            <span className="text-right">{tournament.requirements.software}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Other:</span>
                            <span className="text-right">{tournament.requirements.other}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-blue-900/30 rounded-lg">
                      <Clock className="w-5 h-5 mr-2 text-blue-400" />
                      <p className="text-sm">
                        Registration closes on <span className="font-semibold">{tournament.registrationDeadline}</span>.
                        Don't miss your chance to participate!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rules" className="mt-4">
                <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Tournament Rules</h2>
                    <ul className="space-y-3">
                      {tournament.rules.map((rule, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * index }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{rule}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="mt-4">
                <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Tournament Schedule</h2>
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-900/50"></div>

                      <div className="space-y-6 ml-2">
                        {tournament.schedule.map((event, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="relative pl-8"
                          >
                            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-amber-500"></div>
                            <h3 className="text-lg font-semibold">{event.stage}</h3>
                            <div className="flex items-center text-sm text-amber-300 mb-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{event.date}</span>
                              <span className="mx-2">•</span>
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{event.time}</span>
                            </div>
                            <p className="text-gray-300">{event.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prizes" className="mt-4">
                <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Prize Distribution</h2>
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                        <h3 className="text-lg font-semibold">Total Prize Pool: {tournament.prize}</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {tournament.prizes.map((prize, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.05 * index }}
                            className={`p-4 rounded-lg ${
                              index === 0
                                ? "bg-yellow-900/30 border border-yellow-700"
                                : index === 1
                                  ? "bg-gray-700/30 border border-gray-600"
                                  : index === 2
                                    ? "bg-amber-900/30 border border-amber-700"
                                    : "bg-blue-900/20 border border-blue-900/30"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                {index === 0 && (
                                  <>
                                    <Award className="w-5 h-5 mr-2 text-yellow-500" />
                                    <Image
                                      src="/images/trophy-cartoon.png"
                                      width={40}
                                      height={40}
                                      alt="First place"
                                      className="mr-2"
                                    />
                                  </>
                                )}
                                {index === 1 && (
                                  <>
                                    <Award className="w-5 h-5 mr-2 text-gray-300" />
                                    <Image
                                      src="/images/trophy-computers.png"
                                      width={40}
                                      height={40}
                                      alt="Second place"
                                      className="mr-2"
                                    />
                                  </>
                                )}
                                {index === 2 && (
                                  <>
                                    <Award className="w-5 h-5 mr-2 text-amber-700" />
                                    <Image
                                      src="/images/trophy-stage.png"
                                      width={40}
                                      height={40}
                                      alt="Third place"
                                      className="mr-2"
                                    />
                                  </>
                                )}
                                <span className="font-medium">{prize.position}</span>
                              </div>
                              <span className="font-bold text-lg">{prize.amount}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </FadeIn>

          {/* Comments Section */}
          <FadeIn delay={0.2}>
            <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
              <CardHeader>
                <CardTitle className="text-xl">Discussion</CardTitle>
                <CardDescription className="text-gray-400">Join the conversation about this tournament</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="Ask a question or leave a comment..."
                      className="w-full p-3 rounded-md bg-blue-900/30 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      rows={2}
                    ></textarea>
                  </div>
                </div>

                <Button className="mb-6">Post Comment</Button>

                <div className="space-y-4">
                  {/* Sample comments */}
                  <div className="p-4 rounded-lg bg-blue-900/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-medium">Rahul Sharma</div>
                        <div className="text-xs text-gray-400">2 days ago</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Is there a specific game version required for this tournament? I want to make sure I have
                      everything set up correctly before registering.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-900/20 ml-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-900/50 flex items-center justify-center">
                        <User className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <div className="font-medium">Tournament Admin</div>
                        <div className="text-xs text-gray-400">1 day ago</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Hi Rahul, you'll need the latest version of the game (v2.5.1). Make sure to update before the
                      tournament starts. All participants will receive detailed setup instructions via email after
                      registration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Right Column - Registration and Info */}
        <div className="space-y-6 order-1 lg:order-2 mb-8 lg:mb-0">
          <FadeIn>
            <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white sticky top-4">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Registration</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry Fee:</span>
                      <span className="font-bold text-amber-400">{tournament.entryFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Registration Closes:</span>
                      <span>{tournament.registrationDeadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Participants:</span>
                      <span>
                        {tournament.participants}/{tournament.maxParticipants}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-amber-500 h-2.5 rounded-full"
                        style={{ width: `${(tournament.participants / tournament.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 text-right">
                      {tournament.maxParticipants - tournament.participants} spots remaining
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 mb-4" size="lg" onClick={handleRegister}>
                      Register Now
                    </Button>
                  </motion.div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-gray-700">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-700">
                      <BookmarkPlus className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h3 className="font-semibold mb-2">Organized by</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-900/50 flex items-center justify-center">
                      <span className="font-bold">{tournament.organizer.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium">{tournament.organizer}</div>
                      <div className="text-xs text-blue-400">View organizer profile</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Need Help?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Have questions about this tournament? Contact the organizer or our support team.
                </p>
                <Button variant="outline" className="w-full border-gray-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      {/* Registration Modal */}
      {isRegistering && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
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
                  Complete your registration for {tournament.title}
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
                      <span className="font-bold text-amber-400">{tournament.entryFee}</span>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        className="flex-1 bg-amber-500 hover:bg-amber-600"
                        onClick={(e) => {
                          e.preventDefault()
                          // Handle payment and registration
                          alert("Registration successful!")
                          setIsRegistering(false)
                        }}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Confirm & Pay
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-700"
                        onClick={() => setIsRegistering(false)}
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

