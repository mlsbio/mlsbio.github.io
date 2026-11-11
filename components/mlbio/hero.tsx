import { Container } from "./container"
import MergeIllustration from "./merge-illustration"

const facts = [
  ["Next edition", "Date TBD"],
  ["Venue", "BioHub"],
  ["Communities", "MLCB + MLSB"],
  ["Combined history", "Since 2004"],
]

export default function Hero() {
  return (
    <div className="relative py-16 sm:pb-24 sm:pt-20">
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="font-mono text-sm uppercase tracking-widest text-blue-600">
              MLCB &amp; MLSB are joining forces
            </p>
            <h1 className="mt-4 font-display font-bold tracking-tighter">
              <span className="block text-6xl text-blue-600 sm:text-8xl">MLBIO</span>
              <span className="mt-2 block text-3xl text-blue-900 sm:text-5xl">Machine Learning in Biology</span>
            </h1>
            <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-blue-900 sm:text-2xl">
              <p>
                Machine Learning in Computational Biology (MLCB) and Machine Learning in Structural Biology
                (MLSB) are merging into one meeting: <strong className="font-semibold">MLBIO</strong>.
              </p>
              <p>
                Two communities, from sequences and genomes to structures and molecular design, now meet in
                one place to share new methods for understanding biology.
              </p>
            </div>
          </div>

          <MergeIllustration className="mx-auto w-full max-w-md lg:max-w-none" />
        </div>

        <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
          {facts.map(([name, value]) => (
            <div key={name}>
              <dt className="font-mono text-sm text-blue-600">{name}</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  )
}
