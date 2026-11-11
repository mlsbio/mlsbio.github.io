import { ArrowUpRight } from "lucide-react"
import { Container } from "./container"

type Edition = { year: string; place: string; href: string; proceedings?: string }

const mlsb: Edition[] = [
  { year: "2025", place: "San Diego & Copenhagen", href: "/2025" },
  { year: "2024", place: "Vancouver", href: "/index_2024.html" },
  { year: "2023", place: "New Orleans", href: "/index_2023.html" },
  { year: "2022", place: "New Orleans", href: "/index_2022.html" },
  { year: "2021", place: "Virtual", href: "/index_2021.html" },
  { year: "2020", place: "Virtual", href: "/index_2020.html" },
]

const mlcb: Edition[] = [
  { year: "2025", place: "New York City", href: "https://sites.google.com/view/mlcb2025", proceedings: "https://proceedings.mlr.press/v311/" },
  { year: "2024", place: "Seattle & virtual", href: "https://sites.google.com/cs.washington.edu/mlcb2024/", proceedings: "https://proceedings.mlr.press/v261/" },
  { year: "2023", place: "Seattle & virtual", href: "https://sites.google.com/cs.washington.edu/mlcb2023/", proceedings: "https://proceedings.mlr.press/v240/" },
  { year: "2022", place: "Virtual", href: "https://sites.google.com/cs.washington.edu/mlcb2022/", proceedings: "https://proceedings.mlr.press/v200/" },
  { year: "2021", place: "Virtual", href: "https://sites.google.com/cs.washington.edu/mlcb2021", proceedings: "https://proceedings.mlr.press/v165/" },
  { year: "2020", place: "Virtual", href: "https://sites.google.com/cs.washington.edu/mlcb2020/", proceedings: "https://mlcb.github.io/mlcb2020_proceedings/" },
  { year: "2019", place: "Vancouver", href: "https://sites.google.com/cs.washington.edu/mlcb2019/", proceedings: "https://mlcb.github.io/mlcb2019_proceedings/" },
]

function EditionList({ title, subtitle, editions, footer }: { title: string; subtitle: string; editions: Edition[]; footer?: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-blue-900/10 backdrop-blur sm:p-8">
      <h3 className="font-display text-2xl font-bold tracking-tight text-blue-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
      <ul role="list" className="mt-6 divide-y divide-blue-900/10">
        {editions.map((e) => {
          const external = e.href.startsWith("http")
          return (
            <li key={e.year} className="flex items-center justify-between gap-4 py-3">
              <a
                href={e.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex min-w-0 items-baseline gap-3"
              >
                <span className="font-mono text-sm font-semibold text-blue-600">{e.year}</span>
                <span className="truncate text-blue-900 group-hover:text-blue-600">{e.place}</span>
                <ArrowUpRight className="h-4 w-4 flex-none self-center text-blue-400 group-hover:text-blue-600" aria-hidden="true" />
              </a>
              {e.proceedings && (
                <a
                  href={e.proceedings}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-none font-mono text-xs text-slate-500 hover:text-blue-600"
                >
                  Proceedings
                </a>
              )}
            </li>
          )
        })}
      </ul>
      {footer}
    </div>
  )
}

export default function PastEditions() {
  return (
    <section id="past-editions" aria-labelledby="past-editions-title" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
          <h2 id="past-editions-title" className="font-display text-4xl font-bold tracking-tighter text-blue-600 sm:text-5xl">
            Past editions
          </h2>
          <p className="mt-4 font-display text-xl tracking-tight text-blue-900 sm:text-2xl">
            MLBIO builds on two decades of workshops and conferences. The archives of both meetings stay online.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <EditionList
            title="MLSB"
            subtitle="Machine Learning in Structural Biology · since 2020"
            editions={mlsb}
          />
          <EditionList
            title="MLCB"
            subtitle="Machine Learning in Computational Biology · since 2004"
            editions={mlcb}
            footer={
              <p className="mt-4 text-sm text-slate-600">
                2004–2017 as a NeurIPS workshop:{" "}
                <a
                  href="https://web.archive.org/web/20190726084700/http://raetschlab.org/nipscompbio/previous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  earlier proceedings
                </a>
                . More at{" "}
                <a href="https://www.mlcb.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  mlcb.org
                </a>
                .
              </p>
            }
          />
        </div>
      </Container>
    </section>
  )
}
