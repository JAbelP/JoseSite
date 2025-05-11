"use client"

import { Play, Heart, Share2, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import AudioPlayer from "@/app/components/audio-player"
import ScheduleSection from "@/app/components/schedule-section"
import FeaturedContent from "@/app/components/feature-content"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section with Logo and Station Name */}
      <section className="relative w-full bg-[url('/hero-background.png')] bg-cover bg-center py-16 md:py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
          <Image
            src="/Radio-Alaba-a-Dios.png"
            alt="Radio-Alaba-a-Dios Logo"
            width={180}
            height={180}
            className="mb-6 rounded-full border-4 border-amber-300 bg-white/90 p-2"
          />
          <h1 className="mb-2 font-serif text-4xl font-bold text-white md:text-6xl">Radio Alaba a Dios</h1>
          <p className="mb-8 text-xl text-amber-200 md:text-2xl">La Voz de Fe y Esperanza</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="bg-amber-600 text-white hover:bg-amber-700"
              onClick={() => {
                const playerSection = document.getElementById("live-player")
                if (playerSection) {
                  playerSection.scrollIntoView({ behavior: "smooth" })
                  // Give time for the scroll to complete before focusing
                  setTimeout(() => {
                    if (typeof window.focusAudioPlayer === "function") {
                      window.focusAudioPlayer()
                    }
                  }, 800)
                }
              }}
            >
              Escuchar Ahora <Play className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-amber-200 bg-amber-800/30 text-amber-100 hover:bg-amber-800/40 hover:text-white"
            >
              Donar Ahora <Heart className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="bg-amber-100 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-center font-serif text-3xl font-bold text-amber-800">Transmisión En Vivo</h2>
            <AudioPlayer />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-50">
                <Share2 className="mr-2 h-4 w-4" /> Compartir
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full text-amber-800 hover:bg-amber-100"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full text-amber-800 hover:bg-amber-100"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full text-amber-800 hover:bg-amber-100"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 font-serif text-3xl font-bold text-amber-800 md:text-4xl">Nuestra Programación</h2>
            <p className="mx-auto max-w-2xl text-amber-700">
              Disfruta de nuestra variada programación diseñada para inspirar, educar y fortalecer tu fe.
            </p>
          </div>
          <ScheduleSection />
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 font-serif text-3xl font-bold text-blue-800 md:text-4xl">Contenido Destacado</h2>
            <p className="mx-auto max-w-2xl text-blue-700">
              Explora nuestros podcasts, videos y artículos más recientes para profundizar tu fe.
            </p>
          </div>
          <FeaturedContent />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-amber-600 to-red-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Apoya Nuestra Misión</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Tu apoyo nos permite continuar llevando el mensaje de fe y esperanza a nuestra comunidad hispana.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="bg-white text-amber-800 hover:bg-amber-100">Donar Ahora</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Voluntariado
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link href="#" className="flex items-center text-white hover:text-amber-200">
              <Facebook className="mr-2 h-5 w-5" /> Facebook
            </Link>
            <Link href="#" className="flex items-center text-white hover:text-amber-200">
              <Twitter className="mr-2 h-5 w-5" /> Twitter
            </Link>
            <Link href="#" className="flex items-center text-white hover:text-amber-200">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </Link>
            <Link href="#" className="flex items-center text-white hover:text-amber-200">
              <Youtube className="mr-2 h-5 w-5" /> YouTube
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 py-8 text-amber-200">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Radio Alaba a Dios - La Voz de Fe y Esperanza</p>
          <p className="text-sm">© {new Date().getFullYear()} Radio Alaba a Dios. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">
            <Link href="#" className="hover:text-white">
              Política de Privacidad
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-white">
              Términos de Servicio
            </Link>
          </p>
        </div>
      </footer>
    </main>
  )
}
