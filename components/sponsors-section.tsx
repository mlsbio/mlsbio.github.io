import Image from "next/image"

const sponsors = [
  { name: "DeepMind", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Google Research", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Microsoft Research", logo: "/placeholder.svg?height=80&width=200" },
  { name: "NVIDIA", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Roche", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Pfizer", logo: "/placeholder.svg?height=80&width=200" },
]

export default function SponsorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Sponsors</h2>
          <p className="text-xl text-slate-600">If you are interested in sponsoring MLSB please reach out via e-mail.</p>
        </div>
        {/*
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={200}
                height={80}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
