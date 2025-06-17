"use client"

import Image from "next/image"
import React from "react"

const sponsors = [
  {
    name: "Maná Escondido Café",
    logo: "/cafeLogo.jpg",
    url: "https://www.manabostoncafe.com/"
  },
  {
    name: "Iglesia Hispana Macedonia",
    logo: "/macedonia.png",
    url: "https://www.ihmacedonia.org/"
  },
  {
    name: "Ministerio TV",
    logo: "/MinisterioTV.jpg",
    url: "https://www.ministeriotv.com/"
  },
  {
    name: "Ministerio Oasis En El Desierto Studio",
    logo: "/Oasis.png",
    url: "https://www.ministeriooasiseneldesiertostudio.com/"
  },
  // {
  //   name: "Consultorio Vida",
  //   logo: "/sponsors/vida.png",
  //   url: "https://www.ihmacedonia.org/"
  // },
]

export default function SponsorsSection() {
  return (
    <div className="bg-blue-50 py-8 md:py-16 rounded-2xl mx-2 md:mx-0 my-8 shadow overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold text-blue-900 md:text-3xl">
          Nuestros Patrocinadores
        </h2>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-12 max-w-4xl mx-auto">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition group"
            >
              <div className="relative h-32 w-32 mb-4 transition-transform group-hover:scale-105">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 128px, 80px"
                />
              </div>
              <span className="text-blue-800 text-lg font-semibold text-center">
                {sponsor.name}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Scrolling with Fast Animation */}
        <div className="md:hidden relative w-full overflow-hidden">
          <div className="sponsor-scroll-container flex">
            <div className="flex animate-scroll-fast">
              {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
                <a
                  key={`${sponsor.name}-${idx}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-44 mx-3 bg-white rounded-lg shadow p-4 flex flex-col items-center"
                >
                  <div className="relative h-16 w-16 mb-2">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <span className="text-blue-800 text-xs font-semibold text-center">
                    {sponsor.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
