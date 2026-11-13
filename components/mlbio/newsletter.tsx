import { Mail } from "lucide-react"
import { Container, GlowBackground } from "./container"

// Shared MLBio mailing list: mlbio@googlegroups.com
const GROUP_URL = "https://groups.google.com/g/mlbio"

export default function Newsletter() {
  return (
    <section id="newsletter" aria-labelledby="newsletter-title" className="scroll-mt-8 pb-20 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <GlowBackground className="opacity-70" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 id="newsletter-title" className="font-display text-4xl font-bold tracking-tighter text-blue-900 sm:text-5xl">
                Stay up to date
              </h2>
              <p className="mt-4 font-display text-xl tracking-tight text-blue-900 sm:text-2xl">
                The date, call for papers and registration for MLBio will be announced on the MLBio Google
                Group. Join to hear first.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                Already on the MLSB or MLCB mailing list? You have been added to the MLBio group automatically.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a
                href={GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/10 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:w-auto"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Join the MLBio Google Group
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
