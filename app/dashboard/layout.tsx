"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  // Simulate checking authentication status
  useEffect(() => {
    // In a real app, you would check for a token in localStorage or cookies
    // or make an API call to verify the user's session
    const checkAuth = () => {
      const token = localStorage.getItem("auth_token")
      if (!token) {
        setIsAuthenticated(false)
        router.push("/login?redirect=" + encodeURIComponent(window.location.pathname))
      } else {
        setIsAuthenticated(true)
      }
    }

    checkAuth()
  }, [router])

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0f1117] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  // If authenticated, render the dashboard layout with children
  return (
    <div className="min-h-screen bg-[#0f1117] text-white overflow-hidden">
      {/* Add the animated gradient background that's used in the rest of the site */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-amber-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-blue-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-amber-800/10 rounded-full filter blur-3xl"></div>
      </div>

      <Navbar />
      <main className="container mx-auto px-4 py-4 sm:py-8 relative">{children}</main>
      <Footer />
    </div>
  )
}

