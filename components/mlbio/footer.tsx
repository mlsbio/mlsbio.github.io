import { Container } from "./container"
import { Wordmark } from "./header"

export default function Footer() {
  return (
    <footer className="flex-none py-12">
      <Container className="flex flex-col items-center gap-4 border-t border-blue-900/10 pt-10 md:flex-row md:justify-between">
        <Wordmark className="text-xl" />
        <p className="text-center text-sm text-slate-500 md:text-right">
          MLBIO is the joint meeting of MLCB and MLSB. &copy; {new Date().getFullYear()} MLBIO organizers.
        </p>
      </Container>
    </footer>
  )
}
