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

             <div className="pl-4 flex flex-col justify-start">
            <span className=" text-sm text-slate-600 leading-tight flex items-center space-x-2">
<svg  viewBox="0 0 130 120" enableBackground="new 0 0 130 120"  fill="#000000" className="h-3 w-3"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Infos"> <rect id="BG" x="-200" y="-1350" fill="#D8D8D8" width="2180" height="1700"></rect> </g> <g id="Others"> <g> <rect y="0" fill="#DC4437" width="130" height="13.3"></rect> <rect y="26.7" fill="#DC4437" width="130" height="13.3"></rect> <rect y="80" fill="#DC4437" width="130" height="13.3"></rect> <rect y="106.7" fill="#DC4437" width="130" height="13.3"></rect> <rect y="53.3" fill="#DC4437" width="130" height="13.3"></rect> <rect y="13.3" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="40" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="93.3" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="66.7" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="0" fill="#2A66B7" width="70" height="66.7"></rect> <polygon fill="#FFFFFF" points="13.5,4 15.8,8.9 21,9.7 17.2,13.6 18.1,19 13.5,16.4 8.9,19 9.8,13.6 6,9.7 11.2,8.9 "></polygon> <polygon fill="#FFFFFF" points="34,4 36.3,8.9 41.5,9.7 37.8,13.6 38.6,19 34,16.4 29.4,19 30.2,13.6 26.5,9.7 31.7,8.9 "></polygon> <polygon fill="#FFFFFF" points="54.5,4 56.8,8.9 62,9.7 58.2,13.6 59.1,19 54.5,16.4 49.9,19 50.8,13.6 47,9.7 52.2,8.9 "></polygon> <polygon fill="#FFFFFF" points="24,24 26.3,28.9 31.5,29.7 27.8,33.6 28.6,39 24,36.4 19.4,39 20.2,33.6 16.5,29.7 21.7,28.9 "></polygon> <polygon fill="#FFFFFF" points="44.5,24 46.8,28.9 52,29.7 48.2,33.6 49.1,39 44.5,36.4 39.9,39 40.8,33.6 37,29.7 42.2,28.9 "></polygon> <polygon fill="#FFFFFF" points="13.5,45.2 15.8,50.1 21,50.9 17.2,54.7 18.1,60.2 13.5,57.6 8.9,60.2 9.8,54.7 6,50.9 11.2,50.1 "></polygon> <polygon fill="#FFFFFF" points="34,45.2 36.3,50.1 41.5,50.9 37.8,54.7 38.6,60.2 34,57.6 29.4,60.2 30.2,54.7 26.5,50.9 31.7,50.1 "></polygon> <polygon fill="#FFFFFF" points="54.5,45.2 56.8,50.1 62,50.9 58.2,54.7 59.1,60.2 54.5,57.6 49.9,60.2 50.8,54.7 47,50.9 52.2,50.1 "></polygon> </g> </g> <g id="Europe"> <g id="Row_5"> </g> <g id="Row_4"> </g> <g id="Row_3"> </g> <g id="Row_2"> </g> <g id="Row_1"> </g> </g> </g></svg>
              <span>San Diego</span>

            </span>
            <span className=" text-sm text-slate-600 leading-tight flex items-center space-x-2">
              



              <svg version="1.1" viewBox="0 0 130 120" enableBackground="new 0 0 130 120" fill="#000000" className="w-3 h-3"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Infos"> <rect id="BG" x="-200" y="-740" fill="#D8D8D8" width="2180" height="1700"></rect> </g> <g id="Others"> </g> <g id="Europe"> <g id="Row_5"> </g> <g id="Row_4"> </g> <g id="Row_3"> </g> <g id="Row_2"> <g> <rect y="0" fill="#DB3A49" width="130" height="120"></rect> <rect x="37" fill="#FFFFFF" width="30" height="120"></rect> <rect y="46" fill="#FFFFFF" width="130" height="28"></rect> </g> </g> <g id="Row_1"> </g> </g> </g></svg>
              <span>Copenhagen</span>
            </span>

          </div>
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
              className={`transition-colors flex items-center space-x-1 ${
                isActive("/schedule") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              <span>Schedule</span>  
              <svg  viewBox="0 0 130 120" enableBackground="new 0 0 130 120"  fill="#000000" className="h-3 w-3"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Infos"> <rect id="BG" x="-200" y="-1350" fill="#D8D8D8" width="2180" height="1700"></rect> </g> <g id="Others"> <g> <rect y="0" fill="#DC4437" width="130" height="13.3"></rect> <rect y="26.7" fill="#DC4437" width="130" height="13.3"></rect> <rect y="80" fill="#DC4437" width="130" height="13.3"></rect> <rect y="106.7" fill="#DC4437" width="130" height="13.3"></rect> <rect y="53.3" fill="#DC4437" width="130" height="13.3"></rect> <rect y="13.3" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="40" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="93.3" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="66.7" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="0" fill="#2A66B7" width="70" height="66.7"></rect> <polygon fill="#FFFFFF" points="13.5,4 15.8,8.9 21,9.7 17.2,13.6 18.1,19 13.5,16.4 8.9,19 9.8,13.6 6,9.7 11.2,8.9 "></polygon> <polygon fill="#FFFFFF" points="34,4 36.3,8.9 41.5,9.7 37.8,13.6 38.6,19 34,16.4 29.4,19 30.2,13.6 26.5,9.7 31.7,8.9 "></polygon> <polygon fill="#FFFFFF" points="54.5,4 56.8,8.9 62,9.7 58.2,13.6 59.1,19 54.5,16.4 49.9,19 50.8,13.6 47,9.7 52.2,8.9 "></polygon> <polygon fill="#FFFFFF" points="24,24 26.3,28.9 31.5,29.7 27.8,33.6 28.6,39 24,36.4 19.4,39 20.2,33.6 16.5,29.7 21.7,28.9 "></polygon> <polygon fill="#FFFFFF" points="44.5,24 46.8,28.9 52,29.7 48.2,33.6 49.1,39 44.5,36.4 39.9,39 40.8,33.6 37,29.7 42.2,28.9 "></polygon> <polygon fill="#FFFFFF" points="13.5,45.2 15.8,50.1 21,50.9 17.2,54.7 18.1,60.2 13.5,57.6 8.9,60.2 9.8,54.7 6,50.9 11.2,50.1 "></polygon> <polygon fill="#FFFFFF" points="34,45.2 36.3,50.1 41.5,50.9 37.8,54.7 38.6,60.2 34,57.6 29.4,60.2 30.2,54.7 26.5,50.9 31.7,50.1 "></polygon> <polygon fill="#FFFFFF" points="54.5,45.2 56.8,50.1 62,50.9 58.2,54.7 59.1,60.2 54.5,57.6 49.9,60.2 50.8,54.7 47,50.9 52.2,50.1 "></polygon> </g> </g> <g id="Europe"> <g id="Row_5"> </g> <g id="Row_4"> </g> <g id="Row_3"> </g> <g id="Row_2"> </g> <g id="Row_1"> </g> </g> </g></svg>

            </Link>
            <Link
              href="/scheduleeu"
              className={`transition-colors flex items-center space-x-1 ${
                isActive("/scheduleeu") ? "text-blue-600 font-medium" : "text-slate-600 hover:text-blue-600"
              }`}
            >
             <span> Schedule </span> 
              <svg version="1.1" viewBox="0 0 130 120" enableBackground="new 0 0 130 120" fill="#000000" className="w-3 h-3"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Infos"> <rect id="BG" x="-200" y="-740" fill="#D8D8D8" width="2180" height="1700"></rect> </g> <g id="Others"> </g> <g id="Europe"> <g id="Row_5"> </g> <g id="Row_4"> </g> <g id="Row_3"> </g> <g id="Row_2"> <g> <rect y="0" fill="#DB3A49" width="130" height="120"></rect> <rect x="37" fill="#FFFFFF" width="30" height="120"></rect> <rect y="46" fill="#FFFFFF" width="130" height="28"></rect> </g> </g> <g id="Row_1"> </g> </g> </g></svg>

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
            <a href="https://luma.com/yifbtxtw" target="_blank">
            <Button variant="outline" className="relative" >
              <span className="mr-2">Registration</span>
            <Badge className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                    Free
                  </Badge>
            </Button></a>
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
             className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/")
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
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
                <a href="https://luma.com/yifbtxtw" target="_blank">
            <Button variant="outline" className="" >
              <span className="mr-2">Registration</span>
            <Badge className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                    free
                  </Badge>
            </Button></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
