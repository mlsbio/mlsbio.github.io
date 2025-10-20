import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Clock, Video, Mail, MapPin, Users, Coffee, Presentation, Award } from "lucide-react"
import Navbar from "@/components/navbar"
import SponsorsSection from "@/components/sponsors-section"
import NewsletterSection from "@/components/newsletter-section"
import { VenueModal } from "@/components/venue-modal"

export default function SchedulePage() {

  const scheduleItems = [
    {
      time: "08:30",
      endTime: "08:35",
      title: "Opening Remarks",
      type: "admin",
      icon: Presentation,
    },
    {
      time: "08:35",
      endTime: "09:00",
      title: "Invited Speaker - Sam Rodrigues",
      subtitle: "",
      type: "invited",
      icon: Users,
    },
    {
      time: "09:00",
      endTime: "09:25",
      title: "Invited Speaker - Bruno Correia",
      subtitle: "",
      authors:
        "",
    type: "invited",
      icon: Users,
    },
    {
      time: "09:25",
      endTime: "09:40",
      title: "Contributed Talk - SwitchCraft",
      subtitle: "SwitchCraft: Programmatic Design of State-Switching Proteins",
      authors:"Bowen Jing · Mihir Bafna · Adam Klivans · Bonnie Berger",
       type: "contributed",
      icon: Presentation,
    },
    {
      time: "09:40",
      endTime: "09:55",
      title: "Break",
      type: "break",
      icon: Coffee,
    },
    {
      time: "09:55",
      endTime: "10:10",
      title: "Contributed Talk - Caliby",
      subtitle: "Ensemble-conditioned protein sequence design with Caliby",
      authors: "Richard Shuai · Tianyu Lu · Subhang Bhatti · Petr Kouba · Possu Huang",
        type: "contributed",
      icon: Presentation,
    },
    {
      time: "10:10",
      endTime: "10:45",
      title: "Invited Talk - Hannah Wayment-Steele",
      subtitle: "",
      authors:
        "",
     type: "invited",
      icon: Users,
    },
    {
      time: "10:45",
      endTime: "11:10",
      title: "Invited Talk - Pratyush Tiwary",
      subtitle: "",
      authors: "",
      type: "invited",
      icon: Users,
    },
    {
      time: "11:10",
      endTime: "11:15",
      title: "Word from Sponsors",
      type: "admin",
      icon: Award,
    },
    {
      time: "11:15",
      endTime: "12:45",
      title: "Poster Session / Lunch",
      type: "break",
      icon: Coffee,
    },
    {
      time: "12:45",
      endTime: "01:10",
      title: "Invited Speaker - Ellen Zhong",
      subtitle: "",
      type: "invited",
      icon: Users,
    },
    {
      time: "01:10",
      endTime: "01:25",
      title: "Contributed Talk - Alternative conformations",
      subtitle: "Can Biomolecular Structure Predictors Generalize to Alternative Conformations?",
      authors: "Karson Chrispens · Henry van den Bedem · Stephanie Wankowicz · James Fraser",
      type: "contributed",
      icon: Presentation,
    },
    {
      time: "01:25",
      endTime: "01:40",
      title: "Contributed Talk - CryoEM",
      subtitle: "Separating signal from noise: a self-distillation approach for amortized heterogeneous cryo-EM reconstruction",
      authors: "Minkyu Jeon · Jeffrey Gu · Ambri Ma · Serena Yeung-Levy · Vincent Sitzmann · Ellen Zhong",
      type: "contributed",
      icon: Presentation,
    },
    {
      time: "01:40",
      endTime: "1:50",
      title: "Break",
      type: "break",
      icon: Coffee,
    },
    {
      time: "01:50",
      endTime: "02:05",
      title: "Contributed Talk - Taxoformer",
      subtitle: "TaxoFormer: Hierarchical Transformer for Predicting the Full Taxonomic Lineage of Protein Sequences",
      authors: "Mohammad Parsa · Kathy Wei · Koosh Azimian",
      type: "contributed",
      icon: Presentation,
    },
    {
      time: "02:05",
      endTime:"02:20",
      title: "Contributed Talk - RNA",
      subtitle: "RNA thermodynamics can be replaced with learnable representations",
      authors: "Murphy Angelo · Debbie Marks · Rose Orenbuch",
           type: "contributed",
      icon: Presentation,
    },
     {
      time: "02:20",
      endTime: "02:55",
      title: "Invited Speaker - Mile Sikic",
      subtitle: "",
      type: "invited",
      icon: Users,
    },
    {
      time: "02:55",
      endTime: "03:20",
      title: "Invited Speaker - Krysztof Fidelis, John Moult",
      subtitle: "",
      type: "invited",
      icon: Users,
    },
    {
      time: "03:20",
      endTime: "03:25",
      title: "Break",
      type: "break",
      icon: Coffee,
    },
    
    {
      time: "03:25",
      endTime: "04:00",
      title: "Panel Discussion",
      type: "panel",
      icon: Users,
    },
    {
      time: "04:05",
      endTime: "04:05",
      title: "Closing Remarks",
      type: "admin",
      icon: Presentation,
    },
     {
      time: "04:05",
      endTime: "05:00",
      title: "Poster Session",
      type: "break",
      icon: Presentation,
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
    
      <Navbar highlight="schedule" />

      {/* Header */}
      <section className="py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Workshop Schedule</h1>
          <div className="flex items-center space-x-2 justify-center py-3"><span className="text-xl text-slate-600 ">December 7, 2025 &middot;</span> <div className="inline-block" ><VenueModal /></div></div>
          <div className="flex items-center justify-center gap-2 text-slate-700 mb-8">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>8:30 AM - 5:00 PM PST</span>
          </div>
        </div>
      </section>

      {/* Coming Soon Section 
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="w-16 h-16 text-blue-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-slate-800 mb-2">Schedule</CardTitle>
              <CardDescription className="text-lg text-slate-600">
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                {/* <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-lg mb-6">
                  Schedule will be announced in October 2025
                </Badge> d
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
                      <span className="font-semibold">8:30 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="font-semibold">UCSD Park & Market</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-semibold">In-person</span>
                    </div>
                  </div>
                </div>
              </div>



              {/* Live Stream Button 
              <div className="text-center pt-6 border-t border-blue-200">
                <h4 className="font-semibold text-slate-800 mb-4">Can't Attend in Person?</h4>
                <p className="text-slate-600 mb-6">
                  Join us virtually! The conference will be live-streamed for remote participants.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                  disabled
                >
                  <Video className="w-4 h-4 mr-2" />
                  Live Stream Access
                  <Badge className="ml-2 text-xs bg-white/20 text-white border-0">Available on Conference Day</Badge>
                </Button>
                <p className="text-sm text-slate-500 mt-3">
                  Live stream link will be shared with registered participants
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>*/}

 {/* Schedule */}
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

          {/* Live Stream Info 
          <Card className="mt-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6 text-center">
              <Video className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Can't Attend in Person?</h3>
              <p className="text-slate-600 mb-4">
                Join us virtually! The workshop will be live-streamed for remote participants.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                disabled
              >
                <Video className="w-4 h-4 mr-2" />
                Live Stream Access
                <Badge className="ml-2 text-xs bg-white/20 text-white border-0">Available on Workshop Day</Badge>
              </Button>
              <p className="text-sm text-slate-500 mt-3">
                Live stream link will be shared with registered participants
              </p>
            </CardContent>
          </Card>*/}
        </div>
      </section>

      {/* Sponsors */}
      <SponsorsSection />

      {/* Newsletter */}
      <NewsletterSection />

 
    </div>
  )
}
