"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trophy, Users } from "lucide-react"
import { HowItWorks } from "@/components/how-it-works"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { FeatureSection } from "@/components/feature-section"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { FeaturedCompetitions } from "@/components/featured-competitions"
import { UpcomingTournaments } from "@/components/upcoming-tournaments"
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background"
import { FloatingElement } from "@/components/ui/floating-element"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white overflow-hidden">
      <AnimatedGradientBackground />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative px-4 py-20 overflow-hidden md:py-32">
          <div className="container relative z-10 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between px-2 sm:px-0">
              {/* Left side with 3D Trophy */}
              <div className="hidden md:block w-1/4 relative">
                <motion.div
                  animate={{
                    y: [-30, 30, -30],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/trophy-cartoon.png"
                    width={300}
                    height={300}
                    alt="3D Trophy"
                    className="opacity-80"
                  />
                </motion.div>
              </div>

              {/* Center content */}
              <div className="flex flex-col items-center max-w-3xl mx-auto text-center md:w-1/2">
                <FadeIn delay={0.1} direction="down">
                  <motion.div
                    className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium rounded-full text-black"
                    animate={{
                      backgroundColor: ["rgba(245, 158, 11, 0.7)", "rgba(251, 191, 36, 0.7)"],
                      boxShadow: [
                        "0 0 5px rgba(245, 158, 11, 0.7)",
                        "0 0 15px rgba(245, 158, 11, 0.5)",
                        "0 0 5px rgba(251, 191, 36, 0.7)",
                        "0 0 15px rgba(251, 191, 36, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.5, 1],
                        backgroundColor: ["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0.6)"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="w-2 h-2 mr-2 rounded-full"
                    ></motion.span>
                    <motion.span
                      animate={{
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      TOURNAMENTS LIVE
                    </motion.span>
                  </motion.div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-300">
                      Compete & Win Big Prizes
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <p className="mb-10 text-lg text-gray-300 md:text-xl">
                    Join thousands of players in exciting competitions across multiple categories. Showcase your skills,
                    climb the leaderboards, and win amazing cash prizes.
                  </p>
                </FadeIn>

                <FadeIn delay={0.7}>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="w-full sm:w-auto px-8 bg-amber-500 hover:bg-amber-600 text-black"
                        asChild
                      >
                        <Link href="/tournaments">Browse Competitions</Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto px-8 border-amber-700 text-gray-300 hover:bg-amber-900/30"
                        asChild
                      >
                        <Link href="/dashboard/join-tournament">
                          <Users className="w-4 h-4 mr-2" />
                          Join Tournament
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </FadeIn>
              </div>

              {/* Right side with Trophy */}
              <div className="hidden md:block w-1/4 relative">
                <motion.div
                  animate={{
                    y: [-35, 35, -35],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/grand-prize.png"
                    width={300}
                    height={300}
                    alt="Trophy Star"
                    className="opacity-80"
                  />
                </motion.div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <FloatingElement delay={0.5} duration={7} yOffset={30} className="absolute -top-10 left-10 hidden lg:block">
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/trophy-computers.png"
                  width={180}
                  height={180}
                  alt="Gaming controller"
                  className="opacity-20"
                />
              </motion.div>
            </FloatingElement>

            <FloatingElement
              delay={0.2}
              duration={8}
              yOffset={40}
              className="absolute bottom-0 right-20 hidden lg:block"
            >
              <motion.div
                animate={{
                  y: [-25, 25, -25],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image src="/images/win-prize.png" width={150} height={150} alt="Medal" className="opacity-20" />
              </motion.div>
            </FloatingElement>
          </div>

          {/* Marquee Effect */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 amber-gradient-subtle backdrop-blur-sm">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              }}
              className="whitespace-nowrap flex items-center"
            >
              {[
                "₹50,00,000 Grand Prize Tournament",
                "Join 10,000+ Competitors",
                "Weekly Cash Prizes",
                "Gaming Championships",
                "Creative Contests",
                "Technology Hackathons",
                "Exclusive Partner Events",
                "New User Bonus",
                "Refer & Earn Rewards",
              ].map((text, i) => (
                <span key={i} className="inline-flex items-center mx-8">
                  <span className="w-2 h-2 mr-2 rounded-full bg-amber-400"></span>
                  <span className="text-lg font-medium text-white">{text}</span>
                </span>
              ))}
            </motion.div>
          </div>

          <div className="absolute bottom-16 left-0 w-full overflow-hidden py-4">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              }}
              className="whitespace-nowrap flex items-center opacity-30"
            >
              {[
                "Battle Royale",
                "Photography Contest",
                "Mobile Gaming",
                "Coding Challenge",
                "Design Masters",
                "Quiz Competition",
                "Esports Tournament",
                "Content Creation",
                "AI Innovation",
              ].map((text, i) => (
                <span key={i} className="inline-flex items-center mx-12">
                  <Trophy className="w-4 h-4 mr-2 text-amber-400" />
                  <span className="text-md font-medium text-amber-300">{text}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Competitions */}
        <FeaturedCompetitions />

        {/* Partner Logos */}
        <section className="px-4 py-16 border-t border-b border-gray-800">
          <div className="container mx-auto">
            <FadeIn>
              <h3 className="mb-8 text-xl font-medium text-center">Our Partners & Sponsors</h3>
            </FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {/* Replace these placeholders with actual partner logos */}
              {[
                { name: "Gaming Studio", logo: "/placeholder.svg?height=40&width=120" },
                { name: "Tech Company", logo: "/placeholder.svg?height=40&width=120" },
                { name: "Media Partner", logo: "/placeholder.svg?height=40&width=120" },
                { name: "Tournament Sponsor", logo: "/placeholder.svg?height=40&width=120" },
                { name: "Hardware Provider", logo: "/placeholder.svg?height=40&width=120" },
                { name: "Streaming Platform", logo: "/placeholder.svg?height=40&width=120" },
              ].map((partner, i) => (
                <FadeIn key={i} delay={0.1 * i} direction="up">
                  <motion.div whileHover={{ y: -5 }} className="text-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <p className="mt-2 text-xs text-gray-400">{partner.name}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Upcoming Tournaments */}
        <UpcomingTournaments />

        {/* Leaderboard Section */}
        <LeaderboardSection />

        {/* Feature Sections */}
        <FeatureSection
          title="Fair Play Guarantee"
          description="Our advanced anti-cheat systems and transparent judging ensure all competitions are fair and balanced. Every participant has an equal opportunity to win based purely on skill and performance."
          imageSrc="/images/trophy-cartoon.png"
          imageAlt="Trophy illustration"
          imagePosition="right"
        />

        <FeatureSection
          title="Real-Time Tournament Tracking"
          description="Follow competitions as they happen with our live leaderboards and real-time updates. Watch your ranking change dynamically as you and other competitors submit results and progress through tournament stages."
          imageSrc="/images/esports-competition.png"
          imageAlt="Esports competition"
          imagePosition="left"
        />

        <FeatureSection
          title="Instant Prize Distribution"
          description="No waiting for your winnings. Our automated prize distribution system ensures winners receive their rewards immediately after competition results are verified and finalized."
          imageSrc="/images/grand-prize.png"
          imageAlt="Grand prize"
          imagePosition="right"
        />

        {/* CTA Section */}
        <section className="px-4 py-20 text-center">
          <div className="container mx-auto">
            <FadeIn>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to compete at the highest level?</h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center justify-between gap-8 p-8 mt-10 rounded-lg md:flex-row bg-[hsl(var(--brand-color-canvas-subtle))] backdrop-blur-sm">
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center mb-4 space-x-2">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 10, 0] }}
                      transition={{ duration: 0.5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                      className="p-1 rounded-md bg-amber-500"
                    >
                      <Trophy className="w-4 h-4 text-black" />
                    </motion.div>
                    <span className="text-sm font-medium text-amber-400">ACTIVE TOURNAMENTS</span>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-2 text-2xl font-bold"
                  >
                    24
                  </motion.h3>
                  <p className="text-gray-400">Live competitions right now</p>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="px-8 bg-amber-500 hover:bg-amber-600 text-black" asChild>
                    <Link href="/dashboard/join-tournament">Join Competition</Link>
                  </Button>
                </motion.div>

                <FloatingElement yOffset={10} duration={3}>
                  <div className="flex items-center">
                    <Image src="/images/trophy-cartoon.png" width={150} height={150} alt="Trophy illustration" />
                  </div>
                </FloatingElement>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="max-w-lg mx-auto mt-6 text-sm text-gray-400">
                CompetitionPortal has hosted over 5,000+ tournaments with more than ₹18.75 crore in prizes awarded!
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />
      </main>

      <Footer />
    </div>
  )
}

