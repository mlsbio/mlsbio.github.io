import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Video, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "@/components/navbar"
import SponsorsSection from "@/components/sponsors-section"
import NewsletterSection from "@/components/newsletter-section"

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
    
      <Navbar highlight="scheduleeu" />

      {/* Header */}
      <section className="py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Workshop Schedule</h1>
          <p className="text-xl text-slate-600 mb-8">December 6/7, 2025 &middot; Bella Center Copenhagen</p>
          <div className="flex items-center justify-center gap-2 text-slate-700 mb-8">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>9:00 AM - 5:00 PM CET</span>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="w-16 h-16 text-blue-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-slate-800 mb-2">Detailed Schedule Coming Soon</CardTitle>
              <CardDescription className="text-lg text-slate-600">
                We're finalizing the workshop program with exciting speakers and sessions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-lg mb-6">
                  Schedule will be announced in October 2025
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-slate-800 mb-3">What to Expect</h4>
                  <ul className="space-y-2 text-slate-600 list-disc pl-5">
                    <li> Keynote presentations from leading researchers</li>
                    <li> Technical paper presentations</li>
                    <li> Interactive poster sessions</li>
                    <li> Lunch and Happy Hour</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-slate-800 mb-3">Confirmed Details</h4>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-semibold">December 6/7, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-semibold">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="font-semibold">Bella Center, Copenhagen</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-semibold">In-person only</span>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors */}
      {/* <SponsorsSection /> */}

      {/* Newsletter */}
      <NewsletterSection />

 
    </div>
  )
}
