"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, Check, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RulesPage() {
  const generalRules = [
    "All participants must be at least 18 years of age or have parental consent.",
    "Participants must register with accurate personal information.",
    "Each participant may only have one account on the platform.",
    "Sharing accounts or collaborating on individual competitions is prohibited.",
    "All submissions must be original work created by the participant.",
    "Plagiarism or copyright infringement will result in immediate disqualification.",
    "Harassment or unsportsmanlike conduct towards other participants is prohibited.",
    "CompetitionPortal reserves the right to disqualify any participant who violates the rules.",
    "Prize winners may be required to verify their identity before receiving prizes.",
    "All decisions by judges and CompetitionPortal administrators are final.",
  ]

  const gamingRules = [
    "Participants must use their own accounts for all gaming platforms.",
    "Use of cheats, hacks, or exploits is strictly prohibited.",
    "Participants must be available during scheduled tournament times.",
    "Screen sharing or streaming may be required for verification purposes.",
    "Disconnections during matches will be handled according to specific tournament rules.",
    "Participants must use approved hardware and software configurations.",
    "Smurfing (using alternative accounts to compete below your skill level) is prohibited.",
    "Match results must be reported within the specified timeframe.",
    "Toxic behavior in game chat or voice communications will result in penalties.",
    "Tournament administrators have final say on all disputes.",
  ]

  const creativeRules = [
    "All submissions must be original work created by the participant.",
    "Submissions must adhere to the specific requirements of each competition.",
    "Submissions must not contain offensive, explicit, or inappropriate content.",
    "Participants retain copyright of their work but grant CompetitionPortal license to display submissions.",
    "Submissions must be made before the specified deadline.",
    "File formats and sizes must comply with competition specifications.",
    "Participants may be required to provide source files to verify originality.",
    "Submissions may be subject to plagiarism checks.",
    "Feedback and critiques from judges are final and non-negotiable.",
    "Winners may be featured in CompetitionPortal promotional materials.",
  ]

  const technologyRules = [
    "Code submissions must be original and created by the participant.",
    "Open source libraries may be used if properly attributed and allowed by the competition.",
    "Solutions must solve the specified problem or meet the challenge requirements.",
    "Submissions must include documentation as specified in the competition guidelines.",
    "Code must be functional and executable in the specified environment.",
    "Performance metrics may be considered in judging criteria.",
    "Intellectual property rights must be respected.",
    "Security vulnerabilities in submissions may result in disqualification.",
    "Participants may be required to explain their solution approach.",
    "Code quality and best practices may be considered in judging.",
  ]

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <FadeIn>
          <h1 className="text-3xl font-bold mb-2">Competition Rules</h1>
          <p className="text-gray-400 mb-8">Guidelines and regulations for fair play across all competitions</p>
        </FadeIn>

        {/* Rules Overview */}
        <FadeIn>
          <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white mb-8">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 mr-2 text-amber-400" />
                <h2 className="text-xl font-bold">Fair Play Policy</h2>
              </div>
              <p className="mb-4">
                At CompetitionPortal, we are committed to maintaining a fair and transparent competition environment.
                Our rules are designed to ensure all participants have an equal opportunity to showcase their skills and
                compete on a level playing field.
              </p>
              <p className="mb-4">
                Violations of these rules may result in disqualification, removal from the platform, or forfeiture of
                prizes. We encourage all participants to compete with integrity and respect for fellow competitors.
              </p>
              <div className="flex items-center p-4 bg-amber-900/30 border border-amber-600/50 rounded-lg shadow-lg shadow-amber-900/20">
                <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                <p className="text-sm text-amber-200">
                  By participating in any competition on our platform, you agree to abide by these rules and accept the
                  decisions of our administrators and judges as final.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Rules Tabs */}
        <FadeIn>
          <Tabs defaultValue="general" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 overflow-x-auto">
              <TabsTrigger value="general">General Rules</TabsTrigger>
              <TabsTrigger value="gaming">Gaming</TabsTrigger>
              <TabsTrigger value="creative">Creative</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="mt-4">
              <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">General Competition Rules</h3>
                  <ul className="space-y-3">
                    {generalRules.map((rule, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="gaming" className="mt-4">
              <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Gaming Competition Rules</h3>
                  <ul className="space-y-3">
                    {gamingRules.map((rule, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="creative" className="mt-4">
              <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Creative Competition Rules</h3>
                  <ul className="space-y-3">
                    {creativeRules.map((rule, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="technology" className="mt-4">
              <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Technology Competition Rules</h3>
                  <ul className="space-y-3">
                    {technologyRules.map((rule, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </FadeIn>

        {/* Download Rules */}
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-8 p-4 sm:p-8 mt-10 rounded-lg md:flex-row bg-[hsl(var(--brand-color-canvas-subtle))] backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-bold mb-2">Need a copy of our rules?</h3>
              <p className="text-gray-300">Download our complete rulebook for offline reference.</p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="px-8 bg-amber-500 hover:bg-amber-600">
                <Download className="mr-2 h-4 w-4" />
                Download Rulebook
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

