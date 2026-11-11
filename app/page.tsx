import Header from "@/components/mlbio/header"
import Hero from "@/components/mlbio/hero"
import PastEditions from "@/components/mlbio/past-editions"
import Newsletter from "@/components/mlbio/newsletter"
import Footer from "@/components/mlbio/footer"
import { GlowBackground } from "@/components/mlbio/container"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="relative">
        <GlowBackground />
        <Header />
        <main>
          <Hero />
        </main>
      </div>
      <PastEditions />
      <Newsletter />
      <Footer />
    </div>
  )
}
