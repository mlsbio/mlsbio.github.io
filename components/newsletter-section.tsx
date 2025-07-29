import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function NewsletterSection() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join our Google Group to receive the latest updates about MLSB 2025
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="https://groups.google.com/g/workshopmlsb" target="_blank">
                <Mail className="w-4 h-4 mr-2" />
                Join Google Group
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">MLSB 2025</span>
              </div>
              <p className="text-slate-300">
                Machine Learning in Structural Biology Workshop <br /> co-located with NeurIPS 2025. <br /> Note, that this workshop is not affiliated with NeurIPS.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/schedule" className="block text-slate-300 hover:text-white transition-colors">
                  Schedule
                </Link>
                <Link href="/call-for-papers" className="block text-slate-300 hover:text-white transition-colors">
                  Call for Papers
                </Link>
                <Link href="/committee" className="block text-slate-300 hover:text-white transition-colors">
                  Organizing Committee
                </Link>
                <Link href="/past-editions" className="block text-slate-300 hover:text-white transition-colors">
                  Past Editions
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-slate-300 mb-2">For questions about MLSB 2025, please contact us:</p>
              <a href="" className="text-blue-400 hover:text-blue-300">
                workshopmlsb -at- gmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 MLSB Workshop. All rights reserved.</p>
            <p className="pt-4 text-xs">The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
