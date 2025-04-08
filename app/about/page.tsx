"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { motion } from "framer-motion"
import { Users, Trophy, Shield, Target, Clock, Heart } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former esports champion with a vision to create India's largest competition platform.",
    },
    {
      name: "Priya Patel",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Tech innovator with 15+ years experience building scalable platforms.",
    },
    {
      name: "Amit Kumar",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Logistics expert ensuring smooth execution of all competitions.",
    },
    {
      name: "Neha Gupta",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Award-winning designer passionate about creating engaging experiences.",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "CompetitionPortal was founded with a simple gaming tournament platform.",
    },
    {
      year: "2019",
      title: "Expansion",
      description: "Added creative and technology competition categories, reaching 100,000 users.",
    },
    {
      year: "2020",
      title: "Going National",
      description: "Expanded to all major Indian cities with our first ₹1 crore prize tournament.",
    },
    {
      year: "2021",
      title: "Mobile App Launch",
      description: "Released our mobile app, increasing accessibility for competitors across India.",
    },
    {
      year: "2022",
      title: "Corporate Partnerships",
      description: "Established partnerships with major tech and gaming companies.",
    },
    {
      year: "2023",
      title: "5 Million Users",
      description: "Reached 5 million registered users and awarded over ₹18 crore in prizes.",
    },
  ]

  const values = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Integrity",
      description: "We maintain the highest standards of fairness and transparency in all competitions.",
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our platform and operations.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Community",
      description: "We foster a supportive community where competitors can grow and thrive.",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Innovation",
      description: "We continuously innovate to provide the best competition experience.",
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-400" />,
      title: "Passion",
      description: "We are passionate about helping people showcase their talents and skills.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-blue-400" />,
      title: "Recognition",
      description: "We believe in recognizing and rewarding exceptional talent and hard work.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative px-4 py-20 overflow-hidden md:py-32 border-b border-gray-800">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
                    About CompetitionPortal
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mb-10 text-lg text-gray-300 md:text-xl">
                  India's premier platform for competitions across gaming, creative, and technology categories. We
                  connect talented individuals with opportunities to showcase their skills and win rewards.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <FadeIn direction="right" className="flex-1">
                <Image
                  src="/images/trophy-cartoon.png"
                  width={400}
                  height={400}
                  alt="Our Mission"
                  className="rounded-lg"
                />
              </FadeIn>

              <FadeIn direction="left" className="flex-1">
                <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
                <p className="mb-6 text-gray-300">
                  At CompetitionPortal, our mission is to democratize competitive opportunities for all Indians. We
                  believe that talent exists everywhere, but opportunities don't. Our platform bridges this gap by
                  providing accessible competitions with meaningful rewards.
                </p>
                <p className="text-gray-300">
                  We're committed to creating a fair, transparent ecosystem where participants can showcase their
                  skills, gain recognition, and earn rewards based purely on merit. Through our platform, we aim to
                  discover and nurture the next generation of Indian talent across multiple domains.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-16 border-t border-gray-800">
          <div className="container mx-auto">
            <FadeIn>
              <h2 className="mb-12 text-3xl font-bold text-center">Our Values</h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-lg bg-[hsl(var(--brand-color-canvas-subtle))] bg-opacity-60 border border-amber-800/20"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-md bg-amber-900/50 mr-4">{value.icon}</div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                    </div>
                    <p className="text-amber-100">{value.description}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 py-16 border-t border-gray-800">
          <div className="container mx-auto">
            <FadeIn>
              <h2 className="mb-12 text-3xl font-bold text-center">Our Team</h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <motion.div whileHover={{ y: -10 }} className="text-center">
                    <div className="mb-4 overflow-hidden rounded-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={200}
                        height={200}
                        alt={member.name}
                        className="object-cover w-40 h-40 mx-auto transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                    <p className="mb-3 text-blue-400">{member.role}</p>
                    <p className="text-sm text-gray-300">{member.bio}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-4 py-16 border-t border-gray-800">
          <div className="container mx-auto">
            <FadeIn>
              <h2 className="mb-12 text-3xl font-bold text-center">Our Journey</h2>
            </FadeIn>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 h-full w-1 bg-blue-900/50 transform -translate-x-1/2"></div>

              {milestones.map((milestone, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <div
                    className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 p-4">
                      <motion.div className="p-6 rounded-lg bg-[hsl(var(--brand-color-canvas-subtle))] border border-amber-800/30">
                        <h3 className="mb-2 text-xl font-bold">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </motion.div>
                    </div>

                    <div className="flex items-center justify-center md:w-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className="flex items-center justify-center w-24 h-16 rounded-full bg-amber-600 z-10 shadow-lg px-4"
                      >
                        <span className="font-bold text-lg">{milestone.year}</span>
                      </motion.div>
                    </div>

                    <div className="md:w-1/2"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-16 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                { number: "5M+", label: "Registered Users", image: "/images/esports-competition.png" },
                { number: "₹18Cr+", label: "Prizes Awarded", image: "/images/grand-prize.png" },
                { number: "5000+", label: "Competitions Hosted", image: "/images/gaming-competition.png" },
                { number: "24/7", label: "Customer Support", image: "/images/trophy-computers.png" },
              ].map((stat, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 text-center rounded-lg bg-[hsl(var(--brand-color-canvas-subtle))] h-full flex flex-col items-center justify-between"
                  >
                    <div className="flex justify-center mb-4 h-20">
                      <Image
                        src={stat.image || "/placeholder.svg"}
                        width={80}
                        height={80}
                        alt={stat.label}
                        className="rounded-md object-contain"
                      />
                    </div>
                    <motion.h3
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      className="mb-2 text-4xl font-bold text-amber-400"
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-gray-300">{stat.label}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

