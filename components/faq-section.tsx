"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FaqItem[] = [
    {
      question: "How do I enter a competition?",
      answer:
        "To enter a competition, browse our available tournaments, select the one you're interested in, and click the 'Register' button. You'll need to create an account if you don't already have one, pay any applicable entry fee, and follow the specific submission guidelines for that competition.",
    },
    {
      question: "What types of competitions do you offer?",
      answer:
        "We offer a wide range of competitions across multiple categories including gaming (esports tournaments, battle royales), creative (design, photography, writing), technology (coding, AI development), and more. New competitions are added regularly.",
    },
    {
      question: "How are winners determined?",
      answer:
        "Winner determination varies by competition type. Some competitions use automated scoring systems, others are judged by panels of experts, and some use community voting. The specific judging criteria and process are always clearly outlined in each competition's rules section.",
    },
    {
      question: "When and how do I receive my prize if I win?",
      answer:
        "Prizes are distributed within 48 hours after competition results are finalized and verified. Winners can receive their prizes via UPI, direct bank transfer, or other payment methods available in India. All prizes are paid in Indian Rupees (₹).",
    },
    {
      question: "What is the minimum prize amount I can win?",
      answer:
        "Prize amounts vary by competition, but our smallest competitions typically have prize pools starting at ₹10,000, with individual prizes beginning at ₹1,000. Our largest tournaments offer prize pools of up to ₹50,00,000 for major national competitions.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="px-4 py-20 border-t border-gray-800">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Frequently Asked Questions</h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <motion.div
                className="mb-4 border-b border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <motion.button
                  className="flex items-center justify-between w-full py-4 text-left"
                  onClick={() => toggleFaq(index)}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[hsl(var(--brand-color-canvas-subtle))] rounded-b-lg p-4"
                    >
                      <p className="pb-4 text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

