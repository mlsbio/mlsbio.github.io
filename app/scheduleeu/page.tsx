import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Clock, Video, Mail, MapPin, Users, Coffee, Presentation, Award } from "lucide-react"
import {  Calendar } from "lucide-react"
import Navbar from "@/components/navbar"
import SponsorsEUSection from "@/components/sponsors-eu"
import NewsletterSection from "@/components/newsletter-section"

export default function SchedulePage() {

  
  const scheduleItems = [
    {
      time: "09:00",
      endTime: "09:05",
      title: "Opening Remarks",
      type: "admin",
      icon: Presentation,
    },
    {
      time: "09:05",
      endTime: "09:30",
      title: "Invited Talk 1",
      subtitle: "Anastassia Vorobieva, Group Leader at VIB-VUB Center for Structural Biology",
      type: "invited",
      icon: Users,
    },
    {
      time: "09:30",
      endTime: "09:45",
      title: "Contributed Talk: ProFam",
      subtitle: "ProFam: an autoregressive protein family language model for fitness prediction and sequence generation",
      authors: "Jude Wells",
      type: "contributed",
      icon: Presentation,
    },
    {
      time: "09:45",
      endTime: "10:00",
      title: "Contributed Talk: ProteomeLM",
      subtitle: "ProteomeLM: A proteome-scale language model enables accurate and rapid prediction of protein-protein interactions",
      authors: "Cyril Malbranke",
      type: "contributed",
      icon: Presentation,
    },
    {
      time: "10:00",
      endTime: "10:25",
      title: "Invited Talk 2",
      subtitle: "Patrick Byrant, Assistant Professor at Stockholm University",
      type: "invited",
      icon: Users,
    },
    {
      time: "10:30",
      endTime: "11:00",
      title: "Coffee Break",
      type: "break",
      icon: Coffee,
    },
    {
      time: "11:00",
      endTime: "11:40",
      title: "Industry Panel: Academia & Industry Interface in BioML",
      subtitle: "Moderator: Johanna Haffner, PhD student at ETH",
      authors: "Julian Englert (Adaptyv Bio), Charlie Harris (UK Government Sovereign AI), Constance Ferragu (Cradle), Paolo Marcatili (Novo Nordisk)",
      type: "panel",
      icon: Users,
    },
    {
      time: "11:45",
      endTime: "12:00",
      title: "Contributed Talk: BLOSUM Is All You Learn",
      subtitle: "BLOSUM Is All You Learn — Generative Antibody Models Reflect Evolutionary Priors",
      authors: "Talip Ucar",
      type: "contributed",
      icon: Presentation,
    },
    {
      time: "12:00",
      endTime: "12:15",
      title: "Contributed Talk: Rewriting protein alphabets",
      subtitle: "Rewriting protein alphabets with language models",
      authors: "Lorenzo Pantolini",
      type: "contributed",
      icon: Presentation,
    },
    {
      time: "12:15",
      endTime: "14:00",
      title: "Poster Session 1 & Lunch",
      type: "break",
      icon: Coffee,
    },
    {
      time: "14:00",
      endTime: "14:25",
      title: "Invited Speaker 3",
      subtitle: "Haris Saeed, PhD student at the University of Oxford",
      type: "invited",
      icon: Users,
    },
    {
      time: "14:30",
      endTime: "14:45",
      title: "Contributed Talk: AbTune",
      subtitle: "AbTune: layer-wise selective Fine-Tuning of protein language models for Antibodies",
      authors: "Xiatong Xu",
      type: "contributed",
      icon: Presentation,
    },
    {
      time: "14:45",
      endTime: "15:00",
      title: "Contributed Talk: Enzyme Design",
      subtitle: "Computational Design of Monomeric Variants of Multimeric Enzymes",
      authors: "Jakub Lála",
      type: "contributed",
      icon: Presentation,
    },
    {
      time: "15:00",
      endTime: "17:00",
      title: "Poster Session 2 & Coffee",
      subtitle: "Same posters as earlier, now with more time to discuss!",
      type: "break",
      icon: Coffee,
    },
  ]

     const getTypeColor = (type: string) => {
    switch (type) {
      case "invited":
        return "bg-blue-50 border-blue-200"
      case "contributed":
        return "bg-green-50 border-green-200"
      case "break":
        return "bg-orange-50 border-orange-200"
      case "panel":
        return "bg-purple-50 border-purple-200"
      case "admin":
        return "bg-slate-50 border-slate-200"
      default:
        return "bg-slate-50 border-slate-200"
    }
  }

  
  // Split schedule into two columns
  const midpoint = Math.ceil(scheduleItems.length / 2)
  const leftColumn = scheduleItems.slice(0, midpoint)
  const rightColumn = scheduleItems.slice(midpoint)

  const renderScheduleItem = (item: (typeof scheduleItems)[0], index: number) => {
    const Icon = item.icon
    return (
      <Card key={index} className={`border-l-4 ${getTypeColor(item.type)} transition-all hover:shadow-md`}>
        <CardContent className="p-5">
          <div className="flex gap-4">
            {/* Time */}
            <div className="flex-shrink-0">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-base">{item.time}</span>
                </div>
                <span className="text-sm text-slate-500 ml-6">{item.endTime}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-slate-800 mb-1">{item.title}</h3>
                  {item.subtitle && <p className="text-sm text-slate-700 mb-1 italic line-clamp-2">{item.subtitle}</p>}
                  {item.authors && <p className="text-xs text-slate-600 line-clamp-2">{item.authors}</p>}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
    
      <Navbar highlight="scheduleeu" />

      {/* Header */}
      <section className="py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Workshop Schedule</h1>
          <p className="text-xl text-slate-600 mb-8">December 7, 2025 &middot; Bella Center Copenhagen</p>
          <div className="flex items-center justify-center gap-2 text-slate-700 mb-8">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>9:00 AM - 5:00 PM CET</span>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      {/* <section className="py-8 px-4">
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
                  Schedule will be announced in November 2025
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
                      <span className="font-semibold">December 7, 2025</span>
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
      </section> */}

    <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-4 lg:items-start">
            {/* Left Column */}
            <div className="space-y-4">{leftColumn.map((item, index) => renderScheduleItem(item, index))}</div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumn.map((item, index) => renderScheduleItem(item, index + midpoint))}
            </div>
          </div>
        </div>
      </section>


      {/* Sponsors */}
      {/* <SponsorsSection /> */}
      <SponsorsEUSection />

      {/* Newsletter */}
      <NewsletterSection />

 
    </div>
  )
}
