import Navbar from "@/components/navbar"
import SponsorsSection from "@/components/sponsors-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import NewsletterSection from "@/components/newsletter-section"
import SponsorsEUSection from "@/components/sponsors-eu"

export default function PastEditionsPage() {
  const pastEditions = [
    {
      year: "2024",
      location: "Vancouver, Canada",
      url: "https://www.mlsb.io/index_2024.html",
    },
    {
      year: "2023",
      location: "New Orleans, USA",
      url: "https://www.mlsb.io/index_2023.html",
    },
    {
      year: "2022",
      location: "New Orleans, USA",
      url: "https://www.mlsb.io/index_2022.html",
    },
    {
      year: "2021",
      location: "Virtual Event",
      url: "https://www.mlsb.io/index_2021.html",
    },
    {
      year: "2020",
      location: "Virtual Event",
      url: "https://www.mlsb.io/index_2020.html",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
     <Navbar highlight="past-editions" />

      {/* Header */}
      <section className="py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Past Editions</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Explore the history of the MLSB workshop series. 
          </p>

        </div>
      </section>

      {/* Past Editions Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEditions.map((edition, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">MLSB {edition.year}</h3>
                  <p className="text-slate-600 mb-4">{edition.location}</p>
                  <a
                    href={edition.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <SponsorsSection />
<SponsorsEUSection />
      {/* Newsletter */}
      <NewsletterSection />

      {/* Contact Information */}

      {/* Footer */}
     
    </div>
  )
}
