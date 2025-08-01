import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, FileText, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { VenueModal } from "@/components/venue-modal"

import Navbar from "@/components/navbar"

import SponsorsSection from "@/components/sponsors-section"
import NewsletterSection from "@/components/newsletter-section"



import { MolStarWrapper } from "@/components/molstar-wrapper"

export default function MLSBLandingPage() {
  const speakers = [
    {
      name: "Hannah K. Wayment-Steele",
      affiliation: "UW Madison",
      expertise: "Biomolecular Dynamics",
      image: "/speakers/hannah.jpeg",
    },
    {
      name: "Sam Rodrigues",
      affiliation: "Future House",
      expertise: "AI Agents",
      image: "/speakers/sam.jpg",
    },
    {
      name: "Bruno Correia",
      affiliation: "EPFL",
      expertise: "Protein Design",
      image: "/speakers/bruno.jpg",
    },
    {
      name: "Mile Sikic",
      affiliation: "Genome Institute of Singapore",
      expertise: "Nucleic Acid Structure Prediction",
      image: "/speakers/mile.jpg",
    },
    {
      name: "Ellen Zhong",
      affiliation: "Princeton University",
      expertise: "Cryo-EM",
      image: "/speakers/ellen.jpg",
    },
    {
      name: "Pratyush Tiwari",
      affiliation: "University of Maryland, College Park",
      expertise: "Molecular Simulation",
      image: "/speakers/pratyush.jpg",
    },
    {
      name: "Anastassia Vorobieva",
      affiliation: "VIB-VUB Center for Structural Biology",
      expertise: "Protein Design",
      image: "/speakers/anastassia.png",
    },

  ]

  const sponsors = [
    { name: "DeepMind", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Google Research", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Microsoft Research", logo: "/placeholder.svg?height=80&width=200" },
    { name: "NVIDIA", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Roche", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Pfizer", logo: "/placeholder.svg?height=80&width=200" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-4 items-center">
            {/* Hero Content - 2/3 */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 px-4 py-2"
                >
                  Co-located with NeurIPS 2025
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                Machine Learning in
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Structural Biology
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Join leading researchers at the intersection of machine learning and structural biology and explore
                cutting-edge advances in predictive modelling and design of biological macromolecules.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">December 6/7, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Close to San Diego Convention Center</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  asChild
                >
                  <Link href="/call-for-papers">
                    <FileText className="w-4 h-4 mr-2" />
                    Call for Papers
                  </Link>
                </Button>
                {/* <VenueModal /> */}
                <Button
                  size="lg"
                  variant="outline"
                  disabled
                  className="opacity-50 cursor-not-allowed relative bg-transparent"
                >
                  Register Now
                  <Badge className="ml-2 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                    Coming Soon
                  </Badge>
                </Button>
              </div>
            </div>

            {/* Molstar Component - 1/3 */}
            <div className="lg:col-span-1">
              <div className="hidden md:block">
               
                <div className="h-96 w-full rounded-lg overflow-hidden">
                  <MolStarWrapper
                    structureUrl="https://files.rcsb.org/download/1QYS.pdb"
                    showSurface={false}
                    surfaceType="molecular-surface"
                    selectionMode={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-slate-800 mb-2">Call for Papers</CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Submit your latest research at the intersection of ML and structural biology.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Topics</h4>
                    <ul className="space-y-2 text-slate-600 list-disc pl-5">
                        <li>Prediction of biomolecular structures, complexes, and interactions</li>
                        <li>Design of or generative models for structure and/or sequence</li>
                        <li>Methods for structure determination / biophysics (Cryo-EM/ET, NMR, crystallography, single-molecule methods, etc.)</li>
                        <li>Conformational change, ensembles, and dynamics</li>
                        <li>Integration of biomolecular physics</li>
                        <li>Function and property prediction</li>
                        <li>Structural bioinformatics and systems biology</li>
                        <li>Therapeutic screening and design</li>
                        <li>Language models and other implicit representations of protein structure</li>
                        <li>Forward-looking position papers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Important Dates</h4>
                    <div className="space-y-2 text-slate-600">
                      <div className="flex justify-between">
                        <span>Paper Submission:</span>
                        <span className="font-semibold text-red-600">September 26, 2025 AoE</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Notification of Acceptance:</span>
                        <span className="font-semibold">October 15, 2025</span>
                      </div>

                      <p className="pt-6">
                        Submissions with open-sourced code, models, or datasets will be prioritized for spotlight talks, but all are eligible for poster presentation. 
                        </p>
                      <p>
                         This workshop is non-archival; accepted papers may be shared on our website. Concurrent submissions and work-in-progress or position papers are welcome.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    asChild
                  >
                    <Link href="/call-for-papers">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Submission Guidelines
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Invited Speakers</h2>
           
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-1">{speaker.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{speaker.affiliation}</p>
                  <p className="text-sm text-slate-600">{speaker.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <SponsorsSection />

      {/* Newsletter */}
      <NewsletterSection />
     
    </div>
  )
}
