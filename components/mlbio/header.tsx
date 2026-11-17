import Link from "next/link"
import { Container } from "./container"

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-display text-2xl font-bold tracking-tight text-blue-900 ${className}`}>
      ML<span className="text-blue-600">Bio</span>
    </Link>
  )
}

export default function Header() {
  return (
    <header className="relative z-50 flex-none py-6 lg:pt-10">
      <Container className="flex flex-wrap items-center justify-between gap-y-4 sm:flex-nowrap">
        <Wordmark className="mt-1" />
        <div className="order-first -mx-4 flex flex-auto basis-full justify-center overflow-x-auto border-b border-blue-600/10 py-3 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              Next edition: <span className="font-semibold">2027</span>
            </p>
          </div>
        </div>
        <div className="flex flex-auto justify-end sm:flex-none">
          <a
            href="#newsletter"
            className="inline-flex justify-center rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
          >
            Stay updated
          </a>
        </div>
      </Container>
    </header>
  )
}
