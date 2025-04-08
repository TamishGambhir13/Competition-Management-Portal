import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Competitions",
      links: [
        { name: "Browse All", href: "/competitions" },
        { name: "Gaming", href: "/competitions/gaming" },
        { name: "Creative", href: "/competitions/creative" },
        { name: "Technology", href: "/competitions/technology" },
        { name: "Featured", href: "/competitions/featured" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "About Us", href: "/about" },
        { name: "How to Compete", href: "/guides/how-to-compete" },
        { name: "Rules & Guidelines", href: "/rules" },
        { name: "Prize Distribution", href: "/prizes" },
        { name: "FAQ", href: "/faq" },
        { name: "Support", href: "/support" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Leaderboards", href: "/leaderboards" },
        { name: "Winners Circle", href: "/winners" },
        { name: "Discord", href: "https://discord.com/invite/competitionportal" },
        { name: "Forum", href: "/forum" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Competition Rules", href: "/competition-rules" },
        { name: "Refund Policy", href: "/refunds" },
        { name: "Fair Play Policy", href: "/fair-play" },
      ],
    },
  ]

  return (
    <footer className="border-t border-gray-800 bg-[#0f1117]">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="w-8 h-8 mr-2 rounded-md bg-amber-500">
                <div className="flex items-center justify-center w-full h-full text-white">
                  <span className="text-lg font-bold">C</span>
                </div>
              </div>
              <span className="text-lg font-bold">CompetitionPortal</span>
            </Link>

            <p className="mb-4 text-sm text-gray-400">
              The ultimate platform for competitions with rewards and cash prizes.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-amber-400">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-amber-400">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-amber-400">
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-amber-400">
                <Youtube className="w-4 h-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row">
            <p className="text-sm text-gray-500">© {currentYear} CompetitionPortal. All rights reserved.</p>

            <div className="flex mt-4 space-x-6 md:mt-0">
              <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-400">
                Terms
              </Link>
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-400">
                Privacy
              </Link>
              <Link href="/cookies" className="text-xs text-gray-500 hover:text-gray-400">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

