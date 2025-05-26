"use client"

import {
  Play,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Cross,
  Users,
  BookOpen,
  Radio,
  Volume2,
  VolumeX,
  ArrowUp,
} from "lucide-react"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import Link from "next/link"
// import ScheduleSection from "@/components/schedule-section"
// import FeaturedContent from "@/components/featured-content"
import { useState, useEffect, useRef } from "react"

export default function Home() {
  const [isVideoVisible, setIsVideoVisible] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const videoSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px 0px 0px",
      },
    )

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current)
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current)
      }
    }
  }, [])

  const scrollToVideo = () => {
    const liveSection = document.getElementById("live-stream-section")
    if (liveSection) {
      liveSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Sticky Navigation Bar */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 transform bg-gradient-to-r from-primary-700 to-primary-800 px-4 py-3 shadow-lg transition-transform duration-300 ease-in-out ${
          !isVideoVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Radio className="mr-3 h-6 w-6 text-white" />
            <div className="text-white">
              <h3 className="text-sm font-semibold md:text-base">Radio Vida</h3>
              <p className="text-xs text-primary-100">Transmisión En Vivo</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-white/10 text-white hover:bg-white/20 md:h-10 md:w-10"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Radio className="h-4 w-4 md:h-5 md:w-5" /> : <Play className="h-4 w-4 md:h-5 md:w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-white/10 text-white hover:bg-white/20 md:h-10 md:w-10"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX className="h-4 w-4 md:h-5 md:w-5" /> : <Volume2 className="h-4 w-4 md:h-5 md:w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="h-8 bg-white/10 text-white hover:bg-white/20 md:h-10"
              onClick={scrollToVideo}
            >
              <ArrowUp className="mr-1 h-4 w-4 md:mr-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section with Logo and Station Name */}
      <section className="relative w-full bg-[url('/hero-background.png')] bg-cover bg-center py-12 md:py-24">
        <div className="absolute inset-0 bg-primary-700/60"></div>
        <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
          <Image
            src="/radio-logo.png"
            alt="Radio Vida Logo"
            width={180}
            height={180}
            // height={isMobile ? 120 : 180}
            className="mb-4 rounded-full border-4 border-secondary-300 bg-white/90 p-2 md:mb-6"
          />
          <h1 className="mb-1 font-serif text-3xl font-bold text-white md:mb-2 md:text-6xl">Radio Vida</h1>
          <p className="mb-6 text-lg text-secondary-200 md:mb-8 md:text-2xl">La Voz de Fe y Esperanza</p>
          <div className="flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <Button
              className="w-full bg-secondary-500 text-white hover:bg-secondary-600 sm:w-auto"
              onClick={() => {
                const liveSection = document.getElementById("live-stream-section")
                if (liveSection) {
                  liveSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Escuchar Ahora <Play className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="w-full border-white bg-white/20 text-white hover:bg-white/30 hover:text-white sm:w-auto"
            >
              Donar Ahora <Heart className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section id="live-stream-section" className="bg-primary-100 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center font-serif text-2xl font-bold text-primary-700 md:text-3xl">
              Transmisión En Vivo
            </h2>

            {/* Radio Stream */}
            <div ref={videoSectionRef} className="mb-8 rounded-xl bg-white p-4 shadow-lg md:p-6">
              <h3 className="mb-4 text-center font-serif text-xl font-bold text-primary-700 md:text-2xl">
                Radio Vida - En Vivo
              </h3>
              <div className="relative overflow-hidden rounded-lg bg-black">
                <iframe
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    margin: "auto",
                  }}
                  src="https://www.ministeriotv.com/streams/emVjsMinisteriotv.php?ch=205"
                  width="100%"
                  height={"360"}
                  // height={isMobile ? "250" : "360"}
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title="Radio Vida - Transmisión En Vivo"
                  className="w-full"
                />
              </div>
              <div className="mt-3 text-center text-xs text-primary-600 md:text-sm">
                <p>Transmitiendo en vivo desde Miami, Florida</p>
              </div>
            </div>

            {/* Chat Section */}
            <div className="rounded-xl bg-white p-4 shadow-lg md:p-6">
              <h3 className="mb-4 text-center font-serif text-xl font-bold text-primary-700 md:text-2xl">
                Chat Comunitario
              </h3>
              <div className="relative overflow-hidden rounded-lg border border-primary-200">
                <iframe
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    margin: "auto",
                  }}
                  src="https://www.ministeriotv.com/chat/205"
                  width="100%"
                  height={"400"}
                  // height={isMobile ? "300" : "400"}
                  frameBorder="0"
                  scrolling="no"
                  title="Radio Vida - Chat Comunitario"
                  className="w-full"
                />
              </div>
              <div className="mt-3 text-center text-xs text-primary-600 md:text-sm">
                <p>Únete a la conversación con nuestra comunidad de fe</p>
              </div>
            </div>

            {/* Christian Pillars */}
            <div className="mt-10">
              <h2 className="mb-6 text-center font-serif text-2xl font-bold text-primary-700 md:text-3xl">
                Nuestros Pilares Cristianos
              </h2>
              <div className="mb-10 grid gap-6 md:grid-cols-3">
                {/* Pillar 1 */}
                <div className="rounded-xl bg-white p-4 text-center shadow-md transition-all hover:shadow-lg md:p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <Cross className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-primary-700 md:text-xl">
                    Programación Centrada en Cristo
                  </h3>
                  <p className="text-sm text-primary-600 md:text-base">
                    Todos nuestros programas tienen como fundamento las enseñanzas de Jesucristo y los valores del
                    Evangelio.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="rounded-xl bg-white p-4 text-center shadow-md transition-all hover:shadow-lg md:p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <Users className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-primary-700 md:text-xl">
                    Comunidad y Comunión Fraternal
                  </h3>
                  <p className="text-sm text-primary-600 md:text-base">
                    Fomentamos la unidad y el apoyo mutuo entre los creyentes, creando espacios de comunión y
                    crecimiento.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="rounded-xl bg-white p-4 text-center shadow-md transition-all hover:shadow-lg md:p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <BookOpen className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-primary-700 md:text-xl">
                    Verdad Bíblica y Discipulado
                  </h3>
                  <p className="text-sm text-primary-600 md:text-base">
                    Nos comprometemos a enseñar fielmente la Palabra de Dios y a equipar a los creyentes para vivir su
                    fe.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Artists */}
            <div>
              <h2 className="mb-6 text-center font-serif text-2xl font-bold text-primary-700 md:text-3xl">
                Artistas Destacados
              </h2>
              <div className="grid gap-4 md:grid-cols-4">
                {/* Artist 1 */}
                <div className="rounded-lg bg-white p-3 text-center shadow-sm transition-all hover:shadow md:p-4">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Marcos Witt"
                    width={80}
                    height={80}
                    className="mx-auto mb-2 rounded-full"
                  />
                  <h3 className="font-medium text-primary-800">Marcos Witt</h3>
                  <p className="text-xs text-primary-600">Alabanza y Adoración</p>
                </div>

                {/* Artist 2 */}
                <div className="rounded-lg bg-white p-3 text-center shadow-sm transition-all hover:shadow md:p-4">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Jesús Adrián Romero"
                    width={80}
                    height={80}
                    className="mx-auto mb-2 rounded-full"
                  />
                  <h3 className="font-medium text-primary-800">Jesús Adrián Romero</h3>
                  <p className="text-xs text-primary-600">Música Contemporánea</p>
                </div>

                {/* Artist 3 */}
                <div className="rounded-lg bg-white p-3 text-center shadow-sm transition-all hover:shadow md:p-4">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Christine D'Clario"
                    width={80}
                    height={80}
                    className="mx-auto mb-2 rounded-full"
                  />
                  <h3 className="font-medium text-primary-800">Christine D&lsquo;Clario</h3>
                  <p className="text-xs text-primary-600">Adoración</p>
                </div>

                {/* Artist 4 */}
                <div className="rounded-lg bg-white p-3 text-center shadow-sm transition-all hover:shadow md:p-4">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Miel San Marcos"
                    width={80}
                    height={80}
                    className="mx-auto mb-2 rounded-full"
                  />
                  <h3 className="font-medium text-primary-800">Miel San Marcos</h3>
                  <p className="text-xs text-primary-600">Grupo de Alabanza</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section - COMMENTED OUT */}
      {/* 
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center md:mb-10">
            <h2 className="mb-2 font-serif text-2xl font-bold text-primary-700 md:text-4xl">Nuestra Programación</h2>
            <p className="mx-auto max-w-2xl text-sm text-primary-600 md:text-base">
              Disfruta de nuestra variada programación diseñada para inspirar, educar y fortalecer tu fe.
            </p>
          </div>
          <ScheduleSection />
        </div>
      </section>
      */}

      {/* Featured Content Section - COMMENTED OUT */}
      {/* 
      <section className="bg-accent-50 py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center md:mb-10">
            <h2 className="mb-2 font-serif text-2xl font-bold text-accent-700 md:text-4xl">Contenido Destacado</h2>
            <p className="mx-auto max-w-2xl text-sm text-accent-600 md:text-base">
              Explora nuestros podcasts, videos y artículos más recientes para profundizar tu fe.
            </p>
          </div>
          <FeaturedContent />
        </div>
      </section>
      */}

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-10 text-white md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-3 font-serif text-2xl font-bold md:mb-4 md:text-4xl">Apoya Nuestra Misión</h2>
          <p className="mx-auto mb-6 max-w-2xl text-base md:mb-8 md:text-lg">
            Tu apoyo nos permite continuar llevando el mensaje de fe y esperanza a nuestra comunidad hispana.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button className="w-full bg-secondary-500 text-white hover:bg-secondary-600 sm:w-auto">Donar Ahora</Button>
            <Button
              variant="outline"
              className="w-full border-white bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto"
            >
              Voluntariado
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 md:mt-10">
            <Link href="#" className="flex items-center justify-center text-white hover:text-secondary-200">
              <Facebook className="mr-2 h-5 w-5" /> Facebook
            </Link>
            <Link href="#" className="flex items-center justify-center text-white hover:text-secondary-200">
              <Twitter className="mr-2 h-5 w-5" /> Twitter
            </Link>
            <Link href="#" className="flex items-center justify-center text-white hover:text-secondary-200">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </Link>
            <Link href="#" className="flex items-center justify-center text-white hover:text-secondary-200">
              <Youtube className="mr-2 h-5 w-5" /> YouTube
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 py-6 text-primary-200 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm md:mb-4 md:text-base">Radio Vida - La Voz de Fe y Esperanza</p>
          <p className="text-xs md:text-sm">© {new Date().getFullYear()} Radio Vida. Todos los derechos reservados.</p>
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
