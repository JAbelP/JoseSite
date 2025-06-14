"use client"

import Image from "next/image"
import React from "react"

const sponsors = [
  {
    name: "Panadería El Buen Pan",
    logo: "/sponsors/panaderia.png",
    url: "#"
  },
  {
    name: "Tienda La Esperanza",
    logo: "/sponsors/esperanza.png",
    url: "#"
  },
  {
    name: "Consultorio Vida",
    logo: "/sponsors/vida.png",
    url: "#"
  },
  {
    name: "Restaurante Sabor Latino",
    logo: "/sponsors/saborlatino.png",
    url: "#"
  }
]

export default function SponsorsSection() {
  return (
    <div className="bg-blue-50 py-8 md:py-12 rounded-2xl mx-2 md:mx-0 my-8 shadow overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center font-serif text-2xl font-bold text-blue-900 md:text-3xl">
          Nuestros Patrocinadores
        </h2>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <div className="relative h-20 w-20 mb-2">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <span className="text-blue-800 text-sm font-semibold text-center">
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
