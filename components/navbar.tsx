"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X } from "lucide-react"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { useState } from "react"

interface NavbarProps {
  highlight?: string;
}


export default function Navbar({ highlight }: NavbarProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Use highlight prop if provided, otherwise use pathname
  const activePath = highlight ? `/${highlight}` : pathname;
  const isActive = (path: string) => activePath === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
           <Link href="/" className="flex items-center space-x-2">
            <img src="/mlsb.svg" alt="MLSB Logo" className="h-12" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
             <a
              href="/#speakers"
              className={`transition-colors ${
                isActive("/") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Speakers
            </a>
            <Link
              href="/schedule"
              className={`transition-colors ${
                isActive("/schedule") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Schedule
            </Link>
            <Link
              href="/call-for-papers"
              className={`transition-colors ${
                isActive("/call-for-papers") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Call for Papers
            </Link>
            <Link
              href="/committee"
              className={`transition-colors ${
                isActive("/committee") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Organizing Committee
            </Link>
            <Link
              href="/past-editions"
              className={`transition-colors ${
                isActive("/past-editions") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Past Editions
            </Link>
            <Button variant="outline" disabled className="opacity-50 cursor-not-allowed relative bg-transparent">
              <span className="mr-2">Registration</span>
              <Badge className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                Coming Soon
              </Badge>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
               <a
              href="/#speakers"
              className={`transition-colors ${
                isActive("/") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Speakers
            </a>
              <Link
                href="/schedule"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/schedule")
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                href="/call-for-papers"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/call-for-papers")
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Call for Papers
              </Link>
              <Link
                href="/committee"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/committee")
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Organizing Committee
              </Link>
              <Link
                href="/past-editions"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/past-editions")
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Past Editions
              </Link>
              <div className="px-4">
                <Button
                  variant="outline"
                  disabled
                  className="w-full opacity-50 cursor-not-allowed relative bg-transparent"
                >
                  <span className="mr-2">Registration</span>
                  <Badge className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                    Coming Soon
                  </Badge>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
