"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Trophy } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === `/${path}` ? "bg-amber-900/50" : ""
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0f1117]/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 mr-2 rounded-md bg-amber-500"
            >
              <div className="flex items-center justify-center w-full h-full text-black">
                <Trophy className="w-5 h-5" />
              </div>
            </motion.div>
            <span className="text-lg font-bold">CompetitionPortal</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {["tournaments", "leaderboards", "prizes", "rules", "support", "about"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                href={`/${item}`}
                className={`px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-amber-900/30 ${isActive(item)}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center space-x-2"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-amber-900/30">
              Log In
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-black">
              Sign Up
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.9 }}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-2 md:hidden bg-gray-900 border-b border-gray-800 absolute left-0 right-0 z-50"
          >
            <nav className="flex flex-col space-y-2">
              {["tournaments", "leaderboards", "prizes", "rules", "support", "about"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  <Link
                    href={`/${item}`}
                    className={`block px-3 py-2 text-sm rounded-md hover:bg-amber-900/30 ${isActive(item)}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col pt-2 mt-2 space-y-2 border-t border-gray-800"
              >
                <Button variant="ghost" size="sm" className="justify-center w-full hover:bg-amber-900/30">
                  Log In
                </Button>
                <Button size="sm" className="justify-center w-full bg-amber-500 hover:bg-amber-600 text-black">
                  Sign Up
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

