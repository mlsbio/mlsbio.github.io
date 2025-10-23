import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, FileText, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { VenueModal } from "@/components/venue-modal"

import Navbar from "@/components/navbar"

import SponsorsSection from "@/components/sponsors-section"

import SponsorsEUSection from "@/components/sponsors-eu"
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
      name: "CASP Organizers",
      affiliation: "U Maryland, UC Davis",
      expertise: "Structure Prediction",
      image: "/speakers/casp.gif",
    },
  //  {
  //    name: "Anastassia Vorobieva",
  //    affiliation: "VIB-VUB Center for Structural Biology",
  //    expertise: "Protein Design",
  //    image: "/speakers/anastassia.png",
  //  },

  ]

  const speakers_eu = [
   {
     name: "Anastassia Vorobieva",
     affiliation: "VIB",
     expertise: "Protein Design",
     image: "/speakers/anastassia.png",
   },
   {
     name: "Patrick Bryant",
     affiliation: "Stockholm University",
     expertise: "Protein Design",
     image: "/speakers/patrick.jpg",
   },
   {
     name: "Haris Saeed",
     affiliation: "University of Oxford",
     expertise: "Protein Tuning",
     image: "/speakers/haris.jpg",
   },
  ]
    const speakers_industry =[
   {
     name: "Paolo Marcatili",
     affiliation: "Novo Nordisk",
     expertise: "Antibody Design",
     image: "/speakers/paolo.jpg",
   },
   {
     name: "Julian Englert",
     affiliation: "AdaptyvBio",
     expertise: "Lab Automation",
     image: "/speakers/julian.png",
   },
   {
     name: "Constance Ferragu",
     affiliation: "Cradle",
     expertise: "Protein Engineering",
     image: "/speakers/constance.png",
   },
   {
     name: "Charlie Harris",
     affiliation: "UK Government Sovereign AI",
     expertise: "Structural Biology",
     image: "/speakers/charlie.png",
   }

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
                 <Badge
                  variant="outline"
                  className="ml-4 bg-gradient-to-r from-red-600 to-purple-600 text-white border-0 px-4 py-2"
                >
                  EurIPS 2025
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
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mb-2">
                <div className="flex items-center">
                  <svg  viewBox="0 0 130 120" enableBackground="new 0 0 130 120"  fill="#000000" className="h-5 w-5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Infos"> <rect id="BG" x="-200" y="-1350" fill="#D8D8D8" width="2180" height="1700"></rect> </g> <g id="Others"> <g> <rect y="0" fill="#DC4437" width="130" height="13.3"></rect> <rect y="26.7" fill="#DC4437" width="130" height="13.3"></rect> <rect y="80" fill="#DC4437" width="130" height="13.3"></rect> <rect y="106.7" fill="#DC4437" width="130" height="13.3"></rect> <rect y="53.3" fill="#DC4437" width="130" height="13.3"></rect> <rect y="13.3" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="40" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="93.3" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="66.7" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="0" fill="#2A66B7" width="70" height="66.7"></rect> <polygon fill="#FFFFFF" points="13.5,4 15.8,8.9 21,9.7 17.2,13.6 18.1,19 13.5,16.4 8.9,19 9.8,13.6 6,9.7 11.2,8.9 "></polygon> <polygon fill="#FFFFFF" points="34,4 36.3,8.9 41.5,9.7 37.8,13.6 38.6,19 34,16.4 29.4,19 30.2,13.6 26.5,9.7 31.7,8.9 "></polygon> <polygon fill="#FFFFFF" points="54.5,4 56.8,8.9 62,9.7 58.2,13.6 59.1,19 54.5,16.4 49.9,19 50.8,13.6 47,9.7 52.2,8.9 "></polygon> <polygon fill="#FFFFFF" points="24,24 26.3,28.9 31.5,29.7 27.8,33.6 28.6,39 24,36.4 19.4,39 20.2,33.6 16.5,29.7 21.7,28.9 "></polygon> <polygon fill="#FFFFFF" points="44.5,24 46.8,28.9 52,29.7 48.2,33.6 49.1,39 44.5,36.4 39.9,39 40.8,33.6 37,29.7 42.2,28.9 "></polygon> <polygon fill="#FFFFFF" points="13.5,45.2 15.8,50.1 21,50.9 17.2,54.7 18.1,60.2 13.5,57.6 8.9,60.2 9.8,54.7 6,50.9 11.2,50.1 "></polygon> <polygon fill="#FFFFFF" points="34,45.2 36.3,50.1 41.5,50.9 37.8,54.7 38.6,60.2 34,57.6 29.4,60.2 30.2,54.7 26.5,50.9 31.7,50.1 "></polygon> <polygon fill="#FFFFFF" points="54.5,45.2 56.8,50.1 62,50.9 58.2,54.7 59.1,60.2 54.5,57.6 49.9,60.2 50.8,54.7 47,50.9 52.2,50.1 "></polygon> </g> </g> <g id="Europe"> <g id="Row_5"> </g> <g id="Row_4"> </g> <g id="Row_3"> </g> <g id="Row_2"> </g> <g id="Row_1"> </g> </g> </g></svg>
                  <span className="ml-2 text-slate-700 font-semibold">US</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">December 7, 2025</span>
                </div>
               
                  <VenueModal /> 
               
              </div>
              <div className="mt-6 md:mt-0 border-t border-gray-300 pt-3 md:pt-0 md:border-t-0 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center">
                  <svg version="1.1" viewBox="0 0 130 120" enableBackground="new 0 0 130 120" fill="#000000" className="w-5 h-5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Infos"> <rect id="BG" x="-200" y="-740" fill="#D8D8D8" width="2180" height="1700"></rect> </g> <g id="Others"> </g> <g id="Europe"> <g id="Row_5"> </g> <g id="Row_4"> </g> <g id="Row_3"> </g> <g id="Row_2"> <g> <rect y="0" fill="#DB3A49" width="130" height="120"></rect> <rect x="37" fill="#FFFFFF" width="30" height="120"></rect> <rect y="46" fill="#FFFFFF" width="130" height="28"></rect> </g> </g> <g id="Row_1"> </g> </g> </g></svg>
              <span className="ml-2 text-slate-700 font-semibold">EU</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">December 6/7, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Bella Center, Copenhagen</span>
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
                 


                <Button
                  size="lg"
                  variant="outline"
                  className="bg-gradient-to-r text-white from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:text-white relative"
                 data-luma-action="checkout"
                  data-luma-event-id="evt-TYOpJ0GZ2vewXIJ"
                >
                  <span>Register US</span>  <svg  viewBox="0 0 130 120" enableBackground="new 0 0 130 120"  fill="#000000" className="h-5 w-5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Infos"> <rect id="BG" x="-200" y="-1350" fill="#D8D8D8" width="2180" height="1700"></rect> </g> <g id="Others"> <g> <rect y="0" fill="#DC4437" width="130" height="13.3"></rect> <rect y="26.7" fill="#DC4437" width="130" height="13.3"></rect> <rect y="80" fill="#DC4437" width="130" height="13.3"></rect> <rect y="106.7" fill="#DC4437" width="130" height="13.3"></rect> <rect y="53.3" fill="#DC4437" width="130" height="13.3"></rect> <rect y="13.3" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="40" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="93.3" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="66.7" fill="#FFFFFF" width="130" height="13.3"></rect> <rect y="0" fill="#2A66B7" width="70" height="66.7"></rect> <polygon fill="#FFFFFF" points="13.5,4 15.8,8.9 21,9.7 17.2,13.6 18.1,19 13.5,16.4 8.9,19 9.8,13.6 6,9.7 11.2,8.9 "></polygon> <polygon fill="#FFFFFF" points="34,4 36.3,8.9 41.5,9.7 37.8,13.6 38.6,19 34,16.4 29.4,19 30.2,13.6 26.5,9.7 31.7,8.9 "></polygon> <polygon fill="#FFFFFF" points="54.5,4 56.8,8.9 62,9.7 58.2,13.6 59.1,19 54.5,16.4 49.9,19 50.8,13.6 47,9.7 52.2,8.9 "></polygon> <polygon fill="#FFFFFF" points="24,24 26.3,28.9 31.5,29.7 27.8,33.6 28.6,39 24,36.4 19.4,39 20.2,33.6 16.5,29.7 21.7,28.9 "></polygon> <polygon fill="#FFFFFF" points="44.5,24 46.8,28.9 52,29.7 48.2,33.6 49.1,39 44.5,36.4 39.9,39 40.8,33.6 37,29.7 42.2,28.9 "></polygon> <polygon fill="#FFFFFF" points="13.5,45.2 15.8,50.1 21,50.9 17.2,54.7 18.1,60.2 13.5,57.6 8.9,60.2 9.8,54.7 6,50.9 11.2,50.1 "></polygon> <polygon fill="#FFFFFF" points="34,45.2 36.3,50.1 41.5,50.9 37.8,54.7 38.6,60.2 34,57.6 29.4,60.2 30.2,54.7 26.5,50.9 31.7,50.1 "></polygon> <polygon fill="#FFFFFF" points="54.5,45.2 56.8,50.1 62,50.9 58.2,54.7 59.1,60.2 54.5,57.6 49.9,60.2 50.8,54.7 47,50.9 52.2,50.1 "></polygon> </g> </g> <g id="Europe"> <g id="Row_5"> </g> <g id="Row_4"> </g> <g id="Row_3"> </g> <g id="Row_2"> </g> <g id="Row_1"> </g> </g> </g></svg>
                  

                 

<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>

<Badge className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                    Free
                  </Badge>
                </Button>

      <a href="https://eurips.cc/" target="_blank">
                    <Button
                  size="lg"
                  variant="outline"
                  className="bg-gradient-to-r text-white from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:text-white relative"
                
                >
                  <span>Register EU</span>                    <svg version="1.1" viewBox="0 0 130 120" enableBackground="new 0 0 130 120" fill="#000000" className="w-5 h-5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Infos"> <rect id="BG" x="-200" y="-740" fill="#D8D8D8" width="2180" height="1700"></rect> </g> <g id="Others"> </g> <g id="Europe"> <g id="Row_5"> </g> <g id="Row_4"> </g> <g id="Row_3"> </g> <g id="Row_2"> <g> <rect y="0" fill="#DB3A49" width="130" height="120"></rect> <rect x="37" fill="#FFFFFF" width="30" height="120"></rect> <rect y="46" fill="#FFFFFF" width="130" height="28"></rect> </g> </g> <g id="Row_1"> </g> </g> </g></svg>

                </Button>
                </a>
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
                      <div className="grid grid-cols-2">
                        <span>Paper Submission:</span>
                        <span className="font-semibold text-red-600"><span className="line-through">September 26, 2025 AoE</span><br />October 1, 2025 AoE</span>
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


    <div className="grid md:grid-cols-2 bg-slate-50 divide-x divide-gray-200 divide-2">
      {/* Featured Speakers */}
      <section className="py-16 bg-slate-50 pr-0 md:pr-4 " id="speakers">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-12 flex justify-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 flex flex-col justify-center items-center">
              <span>Invited Speakers</span>
              <span className="flex items-center text-xl mt-4 space-x-1 text-blue-600"> <MapPin className="w-5 h-5" /> <span>San Diego, US</span> </span></h2>
           
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
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

       {/* Featured Speakers EU */}
      <section className="py-16  pl-0 md:pl-4 " id="speakers-eu">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-12 flex justify-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 flex flex-col justify-center items-center">
              <span>Invited Speakers</span>
              <span className="flex items-center text-xl mt-4 space-x-1 text-red-600"> <MapPin className="w-5 h-5" /> <span>Copenhagen, DK</span> </span></h2>
           
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
            {speakers_eu.map((speaker, index) => (
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
            <h4 className="text-center text-xl mb-6 text-slate-600 mt-6">Industry Panel</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto">
            {speakers_industry.map((speaker, index) => (
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
</div>
      {/* Sponsors */}
      <SponsorsSection />

      <SponsorsEUSection />

      {/* Newsletter */}
      <NewsletterSection />
     
    </div>
  )
}
