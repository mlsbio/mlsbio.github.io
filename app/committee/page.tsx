import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

import Navbar from "@/components/navbar"
import SponsorsSection from "@/components/sponsors-section"
import NewsletterSection from "@/components/newsletter-section"
import { Calendar, MapPin, FileText, Mail, ExternalLink } from "lucide-react"


export default function CommitteePage() {
  const organizers = [
    {
      name: "Chaitanya Joshi",
      affiliation: "University of Cambridge",
      role: "",
      image: "/organizer/chaitanya.jpg",
      bio: "",
    },
    {
      name: "Gina El Nesr",
      affiliation: "Stanford University",
      role: "",
      image: "/organizer/gina.jpg",
      bio: "",
    },
    {
      name: "Vignesh Ram Somnath",
      affiliation: "ETH Zurich",
      role: "",
      image: "/organizer/vignesh.png",
      bio: "",
    },
    {
      name: "Zeming Lin",
      affiliation: "EvolutionaryScale",
      role: "",
      image: "/organizer/zeming_lin.jpg",
      bio: "",
    },
    {
      name: "Simon Duerr",
      affiliation: "HES-SO Valais-Wallis",
      role: "",
      image: "/organizer/simon.jpg",
      bio: "",
    },
    {
      name: "Zhidian Zhang",
      affiliation: "MIT",
      role: "",
      image: "/organizer/zhidian.jpg",
      bio: "",
    },
  ]
  const organizerseu = [
    {
      name: "Nele Quast",
      affiliation: "University of Oxford",
      role: "",
      image: "/organizer/nele.jfif",
      bio: "",
    },
    {
      name: "Jonathan Ziegler",
      affiliation: "Cradle",
      role: "",
      image: "/organizer/jonathan.png",
      bio: "",
    },
    {
      name: "Johanna Haffner",
      affiliation: "ETH Zurich",
      role: "",
      image: "/organizer/johanna.jfif",
      bio: "",
    },
    {
      name: "Nissrine Hatibi",
      affiliation: "ENSIAS",
      role: "",
      image: "/organizer/nissrine.jfif",
      bio: "",
    },
    {
      name: "Simon Duerr",
      affiliation: "HES-SO Valais-Wallis",
      role: "",
      image: "/organizer/simon.jpg",
      bio: "",
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
     
      <Navbar highlight="committee" />

      {/* Header */}
      <section className="pt-8 pb-3 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Organizing Committee</h1>
          <div className="mx-auto max-w-xl flex justify-center">
           <span className="flex items-center text-xl mt-2 space-x-1 text-blue-600 font-semibold"> <MapPin className="w-5 h-5" /> <span>San Diego, US</span> </span>

          </div>
           
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-2 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {organizers.map((member, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-1">{member.name}</h3>
                  {/*<p className="text-blue-600 font-medium mb-2"></p>*/}
                  <p className="text-sm font-semibold text-slate-700 mb-3 bg-slate-100 px-2 py-1 rounded">
                    {member.affiliation}
                  </p>
                  {/*<p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>*/}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="pt-8 pb-3 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Organizing Committee</h1>
          <div className="mx-auto max-w-xl flex justify-center">
           <span className="flex items-center text-xl mt-2 space-x-1 text-red-600 font-semibold"> <MapPin className="w-5 h-5" /> <span>Copenhagen, DK</span> </span>

          </div>
           
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {organizerseu.map((member, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-1">{member.name}</h3>
                  {/*<p className="text-blue-600 font-medium mb-2"></p>*/}
                  <p className="text-sm font-semibold text-slate-700 mb-3 bg-slate-100 px-2 py-1 rounded">
                    {member.affiliation}
                  </p>
                  {/*<p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>*/}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Contact the Organizing Committee</h3>
              <p className="text-slate-600 mb-6">
                For questions about the conference, submissions, or general inquiries, please reach out to us:
              </p>
              <a
                href="mailto:workshopmlsb@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                workshopmlsb@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors */}
      <SponsorsSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
     
    </div>
  )
}
