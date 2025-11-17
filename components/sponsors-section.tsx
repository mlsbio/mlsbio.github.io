import Image from "next/image"


  const sponsors = [
    { name: "Xaira", logo: "/img/sponsors/xaira_black.png" },
    { name: "Generate", logo: "/img/sponsors/generate-bio-afpc-logo-cmyk-black.png" },
    { name: "Biohub", logo: "/img/sponsors/biohub-logo.svg" },
    { name: "Latent Labs", logo: "/img/sponsors/latentlabs.svg",    },
    { name: "Terray Therapeutics", logo: "/img/sponsors/terray.svg",    },
    { name: "Rosetta Commons", logo: "/img/sponsors/rosetta-commons-logo.png",    },
    { name: "Atomic AI", logo: "/img/sponsors/atomicai.png",    },
  ]

export default function SponsorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Sponsors US Edition</h2>
          {/* <p className="text-xl text-slate-600">If you are interested in sponsoring MLSB please reach out via e-mail.</p> */}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8  justify-center w-full">
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
        </div> 
      </div>
    </section>
  )
}
