"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, Mail, FileText, MapPin, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import acceptedPapers from "@/data/accepted-papers.json"

import Navbar from "@/components/navbar"

import SponsorsSection from "@/components/sponsors-section"

import SponsorsEUSection from "@/components/sponsors-eu"
import NewsletterSection from "@/components/newsletter-section"


export default function AcceptedPapersPage() {
  const [selectedPaper, setSelectedPaper] = useState<(typeof acceptedPapers)[0] | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string>("All")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const locations = ["All", ...Array.from(new Set(acceptedPapers.map((p) => p.location)))]
  const categories = ["All", ...Array.from(new Set(acceptedPapers.map((p) => p.category)))]

  const filteredPapers = acceptedPapers.filter((paper) => {
    const matchesLocation = selectedLocation === "All" || paper.location === selectedLocation
    const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory
    return matchesLocation && matchesCategory
  })

  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
         {/* Navigation */}
         <Navbar />

      {/* Header */}
      <section className="py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Accepted Papers</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {filteredPapers.length} of {acceptedPapers.length} papers
          </p>
        </div>
      </section>

      {/* Filter Papers */}
      <section className="py-4 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-slate-600" />
              <h3 className="text-sm font-semibold text-slate-800">Filter Papers</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Location Filter */}
              <div className="flex-1">
                <label className="text-xs font-medium text-slate-700 mb-1.5 block">Location</label>
                <div className="flex flex-wrap gap-1.5">
                  {locations.map((location) => (
                    <Button
                      key={location}
                      variant={selectedLocation === location ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLocation(location)}
                      className={`text-xs px-2.5 py-1 h-7 ${
                        selectedLocation === location ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : ""
                      }`}
                    >
                      <MapPin className="w-3 h-3 mr-1" />
                      {location}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-1">
                <label className="text-xs font-medium text-slate-700 mb-1.5 block">Category</label>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`text-xs px-2.5 py-1 h-7 ${
                        selectedCategory === category ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Reset Filters */}
            {(selectedLocation !== "All" || selectedCategory !== "All") && (
              <div className="mt-3 pt-3 border-t border-slate-200">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedLocation("All")
                    setSelectedCategory("All")
                  }}
                  className="text-xs text-slate-600 hover:text-slate-800 h-7 px-2"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="py-8 px-4 pb-16">
        <div className="container mx-auto">
          {filteredPapers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No papers match the selected filters.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSelectedLocation("All")
                  setSelectedCategory("All")
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPapers.map((paper) => (
                <Card key={paper.id} className="hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                  <div className="flex items-center justify-between p-4 pb-0">
                    <Badge
                      variant={paper.category === "Contributed talk" ? "default" : "secondary"}
                      className={
                        paper.category === "Contributed talk"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-3 py-1"
                          : "bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-3 py-1"
                      }
                    >
                      {paper.category}
                    </Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      {paper.location}
                    </div>
                  </div>

                  <CardHeader className="pb-3 pt-2">
                    <CardTitle className="text-base leading-tight line-clamp-2">{paper.title}</CardTitle>
                    <p className="text-sm text-slate-600 mt-2">
                      {paper.authors.split(",")[0]}
                      {paper.authors.split(",").length > 1 && " et al."}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <FileText className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant={paper.category === "Contributed talk" ? "default" : "secondary"}
                              className={
                                paper.category === "Contributed talk"
                                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                                  : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                              }
                            >
                              {paper.category}
                            </Badge>
                            <div className="flex items-center text-sm text-slate-500">
                              <MapPin className="w-3 h-3 mr-1" />
                              {paper.location}
                            </div>
                          </div>
                          <DialogTitle className="text-2xl leading-tight">{paper.title}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-2">Authors</h4>
                            <p className="text-slate-600">{paper.authors}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-2">Abstract</h4>
                            <p className="text-slate-600 leading-relaxed">{paper.abstract}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 w-full"
                            asChild
                          >
                            <a href={`/papers_2025/${paper.id}.pdf`} download>
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </a>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 w-full"
                      asChild
                    >
                      <a href={`/papers_2025/${paper.id}.pdf`} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Sponsors */}
      <SponsorsSection />

      <SponsorsEUSection />

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  )
}
