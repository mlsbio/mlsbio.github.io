import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar, ExternalLink, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


import Navbar from "@/components/navbar"
import NewsletterSection from "@/components/newsletter-section"
import SponsorsSection from "@/components/sponsors-section"

export default function CallForPapersPage() {
  const topics = [
  "Prediction of biomolecular structures, complexes, and interactions",
  "Design of or generative models for structure and/or sequence",
  "Methods for structure determination / biophysics (Cryo-EM/ET, NMR, crystallography, single-molecule methods, etc.)",
  "Geometric and symmetry-aware deep learning",
  "Conformational change, ensembles, and dynamics",
  "Integration of biomolecular physics",
  "Function and property prediction",
  "Structural bioinformatics and systems biology",
  "Therapeutic screening and design",
  "Language models and other implicit representations of protein structure",
  "Forward-looking position papers"
  ]

  const submissionTypes = [
    {
      type: "Full Papers",
      description: "Original research contributions (6-8 pages)",
      icon: FileText,
    },
    {
      type: "Short Papers",
      description: "Work-in-progress and preliminary results (4 pages)",
      icon: FileText,
    },
  ]

  const importantDates = [
    { event: "Paper Submission Deadline", date: "October 1, 2025 AoE", highlight: true },
    { event: "Notification of Acceptance", date: "October 15, 2025", highlight: false },
    { event: "Camera-Ready Deadline", date: "December 1, 2025 AoE", highlight: false },
    { event: "Conference Date", date: "December 7, 2025", highlight: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
    
      <Navbar highlight="call-for-papers" />

      {/* Header */}
      <section className="py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Call for Papers</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Submit your latest research at the intersection of machine learning and structural biology.
          </p>
          <p className="py-3 font-semibold text-base text-slate-700 max-w-3xl mx-auto">
          Both venues (MLSB and EuroMLSB) share a common submission portal and a venue preference can be given at the time of submission. Note, that simultaneous submission to both venues is possible if one of the authors can commit to attend each venues in person.
          </p>
          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-lg">
            Deadline:  October 1, 2025 AoE
          </Badge>
          <div> <span className="line-through px-2">September 26, 2025</span></div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-slate-50">
                    <span className="font-medium text-slate-700">{item.event}</span>
                    <span className={`font-bold ${item.highlight ? "text-red-600" : "text-slate-800"}`}>
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Topics */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Topics of Interest</CardTitle>
              <CardDescription>
               We welcome submissions of short papers leveraging machine learning to address problems in structural biology, including but not limited to:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <ul className="space-y-2">
                    {topics.slice(0, Math.ceil(topics.length / 2)).map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <ul className="space-y-2">
                    {topics.slice(Math.ceil(topics.length / 2)).map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          


           <Card className="mb-8">
            <CardHeader>
              <CardTitle>Submission Guidelines</CardTitle>
              <CardDescription>
              </CardDescription>
            </CardHeader>
            <CardContent className="prose">
          <p className="py-2">
          We request anonymized PDF submissions by <span className="line-through">September 26, 2025</span> October 1, 2025, at 11:59PM, AoE (anywhere on earth) through our submission website on <a className="text-blue-400 hover:text-blue-300" href="https://cmt3.research.microsoft.com/MLSB2025">CMT</a>.
          </p>

          <p className="py-2">Papers should present novel work that has not been previously accepted at an archival venue at the time of submission. Submissions should be a maximum of 5 pages (excluding references and appendices) in PDF format, using the <a className="text-blue-400 hover:text-blue-300" href="https://mlsb.io/neurips_mlsb_2025.sty">NeurIPS style files</a>, and fully anonymized as per the requirements of NeurIPS. The NeurIPS checklist can be omitted from the submission. Submissions meeting these criteria will go through a light, double-blind review process. Reviewer comments will be returned to the authors as feedback.
            </p>  

            <p className="py-2">Accepted papers will be invited to present a poster at the workshop, with nominations of spotlight talks at the discretion of the organizers.

</p>
<p className="py-2">Like last year, authors that commit to open-sourcing code, model weights, and datasets used in the work will be given precedence for spotlight talks. This only affects consideration for spotlights. Submissions that cannot make this commitment will still be considered for posters and will not be penalized for acceptance.</p>

<p className="py-2">This workshop is considered non-archival, however, authors of accepted contributions will have the option to make their work available through the workshop website. Presentation of work that is concurrently in submission is welcome. We welcome papers sharing encouraging work-in-progress results or forward-looking position papers that would benefit from feedback and community discussion at our workshop.</p>

<p className="py-2">We ask authors and reviewers to abide by the <a className="text-blue-400 hover:text-blue-300" href="https://neurips.cc/Conferences/2025/LLM">NeurIPS Rules on use of LLMs</a>. In particular, this means as author you are welcome to use LLMs for any purpose of your submission but are solely responible for the originality and correctness of the submission. Please document responsibly if LLMs were used in implementing the method presented in your submission. Refrain from including any statements to receive favorable reviews from an LLM. All reviewers are forbidden from using LLMs in their evaluation of your work. </p>

<p className="py-2">We will have a few travel awards available to attend this workshop (not including attendance to the main NeurIPS conference). More details will be announced on the mailing list.</p>
         </CardContent>
          </Card>
        </div>
      </section>

      {/* Submission Types 
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Submission Types</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {submissionTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">{type.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{type.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>*/}

      {/* Submission Guidelines 
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Format Requirements</h4>
                <ul className="space-y-1 text-slate-600 ml-4">
                  <li>• Papers must be submitted in PDF format</li>
                  <li>• Use the NeurIPS 2025 style files (available on the submission portal)</li>
                  <li>• Include author names and affiliations (not anonymous)</li>
                  <li>• References do not count towards page limits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Review Process</h4>
                <ul className="space-y-1 text-slate-600 ml-4">
                  <li>• All submissions will undergo peer review</li>
                  <li>• Reviews will focus on novelty, technical quality, and relevance</li>
                  <li>• Accepted papers will be published in the workshop proceedings</li>
                  <li>• Best paper awards will be given in each category</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Presentation</h4>
                <ul className="space-y-1 text-slate-600 ml-4">
                  <li>• Accepted papers will be presented as posters</li>
                  <li>• Selected papers will be invited for oral presentations</li>
                  <li>• At least one author must attend the conference</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
*/}
      {/* Submit Button */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Submit?</h3>
              <p className="text-slate-600 mb-6">Submit your paper through our online submission portal.</p>
              <a href="https://cmt3.research.microsoft.com/MLSB2025" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <ExternalLink className="w-4 h-4 mr-2"   />
                Submit Paper
              </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors */}
      <SponsorsSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Contact Information */}

 
    </div>
  )
}
