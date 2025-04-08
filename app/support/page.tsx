"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, MessageSquare, Phone, Mail, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button in the top right corner of the page. Fill in your details, verify your email address, and you're ready to go!",
    },
    {
      question: "How do I join a competition?",
      answer:
        "Browse our available competitions, select the one you're interested in, and click the 'Register' or 'Join Competition' button. You'll need to be logged in and may need to pay an entry fee for some competitions.",
    },
    {
      question: "When do I receive my prize if I win?",
      answer:
        "Prizes are distributed within 48 hours after competition results are finalized and verified. You'll receive your prize through your preferred payment method set in your account settings.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, UPI, net banking, and popular digital wallets. All transactions are processed securely through our payment partners.",
    },
    {
      question: "How do I report a technical issue?",
      answer:
        "You can report technical issues through our support form on this page, or by emailing support@competitionportal.com with details of the issue you're experiencing.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <FadeIn>
          <h1 className="text-3xl font-bold mb-2">Support Center</h1>
          <p className="text-gray-400 mb-8">Get help with your account, competitions, or technical issues</p>
        </FadeIn>

        {/* Support Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <FadeIn delay={0.1}>
            <motion.div whileHover={{ y: -5 }} className="h-full">
              <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="p-3 rounded-full bg-amber-900/50 mb-4">
                    <MessageSquare className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                  <p className="text-gray-300 mb-4">
                    Chat with our support team in real-time for immediate assistance with your queries.
                  </p>
                  <div className="flex items-center mt-auto">
                    <Clock className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-sm text-green-400">Available 24/7</span>
                  </div>
                  <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-black">Start Chat</Button>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <motion.div whileHover={{ y: -5 }} className="h-full">
              <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="p-3 rounded-full bg-amber-900/50 mb-4">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                  <p className="text-gray-300 mb-4">
                    Call our dedicated support line to speak directly with a customer service representative.
                  </p>
                  <div className="flex items-center mt-auto">
                    <Clock className="w-4 h-4 mr-2 text-amber-400" />
                    <span className="text-sm">10:00 AM - 7:00 PM IST</span>
                  </div>
                  <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-black">+91 1800-123-4567</Button>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <motion.div whileHover={{ y: -5 }} className="h-full">
              <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="p-3 rounded-full bg-amber-900/50 mb-4">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Support</h3>
                  <p className="text-gray-300 mb-4">
                    Send us an email for detailed inquiries or issues that require thorough investigation.
                  </p>
                  <div className="flex items-center mt-auto">
                    <Clock className="w-4 h-4 mr-2 text-sm" />
                    <span className="text-sm">Response within 24 hours</span>
                  </div>
                  <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-black">
                    support@competitionportal.com
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>
        </div>

        {/* Support Tabs */}
        <FadeIn>
          <Tabs defaultValue="contact" className="mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
            </TabsList>
            <TabsContent value="contact" className="mt-4">
              <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-[hsl(var(--brand-color-canvas-subtle))] border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-[hsl(var(--brand-color-canvas-subtle))] border-gray-700"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is your inquiry about?"
                        className="bg-[hsl(var(--brand-color-canvas-subtle))] border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Please describe your issue or question in detail"
                        className="w-full p-3 rounded-md bg-[hsl(var(--brand-color-canvas-subtle))] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="faq" className="mt-4">
              <Card className="border-0 bg-[hsl(var(--brand-color-canvas-subtle))] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="p-4 rounded-lg bg-[hsl(var(--brand-color-canvas-subtle))]"
                      >
                        <div className="flex items-start">
                          <HelpCircle className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold mb-2">{faq.question}</h4>
                            <p className="text-gray-300 text-sm">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-400 mb-4">Can't find what you're looking for?</p>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black">Contact Support</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </FadeIn>

        {/* Help Categories */}
        <FadeIn>
          <h2 className="text-2xl font-bold mb-6">Help Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { title: "Account Issues", icon: "user" },
              { title: "Payment Help", icon: "credit-card" },
              { title: "Competition Rules", icon: "book" },
              { title: "Technical Support", icon: "settings" },
              { title: "Prize Distribution", icon: "gift" },
              { title: "Platform Bugs", icon: "bug" },
              { title: "Mobile App Help", icon: "smartphone" },
              { title: "Security Concerns", icon: "shield" },
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: "rgba(245, 158, 11, 0.2)" }}
                className="p-4 rounded-lg bg-[hsl(var(--brand-color-canvas-subtle))] bg-opacity-60 border border-amber-800/20 text-center cursor-pointer"
              >
                <h3 className="font-medium">{category.title}</h3>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

