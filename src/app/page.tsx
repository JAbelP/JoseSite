"use client"

import {
  Play,
  Heart,
  Facebook,
  Youtube,
  Cross,
  Users,
  BookOpen,
  Radio,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import Link from "next/link"
// import ScheduleSection from "@/components/schedule-section"
// import FeaturedContent from "@/components/featured-content"
import { useState, useEffect, useRef } from "react"
// import SponsorsSection from "./components/SponsorsSection"
import { toast, Toaster } from 'react-hot-toast'

export default function Home() {
  const [isVideoVisible, setIsVideoVisible] = useState(true)
  const videoSectionRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isDonationDropdownOpen, setIsDonationDropdownOpen] = useState(false)
  const [isHeroDonationDropdownOpen, setIsHeroDonationDropdownOpen] = useState(false)

  //   if (iframeRef.current && isIframeReady) {
  //     try {
  //       const message = {
  //         action: action,
  //         target: 'player'
  //       };
  //       iframeRef.current.contentWindow?.postMessage(message, '*');
  //     } catch (error) {
  //       console.error('Error sending message to iframe:', error);
  //     }
  //   }
  // };

  // const togglePlayPause = () => {
  //   // Always try to send the message, regardless of isIframeReady
  //   if (iframeRef.current) {
  //     try {
  //       iframeRef.current.contentWindow?.postMessage(
  //         { action: isPlaying ? 'pause' : 'play', target: 'player' },
  //         '*'
  //       );
  //     } catch (error) {
  //       console.error('Error sending play/pause to iframe:', error);
  //     }
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // const toggleMute = () => {
  //   sendMessageToIframe(isMuted ? 'unmute' : 'mute');
  //   setIsMuted(!isMuted);
  // };

  // Update message listener for iframe responses



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px 0px 0px",
      }
    )

    const currentRef = videoSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const scrollToVideo = () => {
    const liveSection = document.getElementById("live-stream-section")
    if (liveSection) {
      liveSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const DonationDropdown = ({
    isOpen,
    onToggle,
    onClose,
  }: {
    isOpen: boolean
    onToggle: () => void
    onClose: () => void
  }) => {
    const copyToClipboard = (text: string, method: string) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          toast.success(`${method} copiado al portapapeles`, {
            duration: 2000,
            position: 'bottom-center',
          });
          onClose();
        })
        .catch((err) => {
          toast.error('Error al copiar');
          console.error('Failed to copy:', err);
        });
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element
        if (!target.closest(".donation-dropdown")) {
          onClose()
        }
      }

      if (isOpen) {
        document.addEventListener("click", handleClickOutside)
      }

      return () => {
        document.removeEventListener("click", handleClickOutside)
      }
    }, [isOpen, onClose])

    return (
      <div className="donation-dropdown relative">
        <Button className="w-full bg-secondary-500 text-white hover:bg-secondary-600 sm:w-auto" onClick={onToggle}>
          Donar Ahora <Heart className="ml-2 h-4 w-4" /> <ChevronDown className="ml-1 h-3 w-3" />
        </Button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 sm:left-auto sm:right-0 sm:w-48">
            <div className="py-2">
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => copyToClipboard('j_machado64@yahoo.com', 'PayPal')}
              >
                💳 PayPal
              </button>
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => copyToClipboard('$64suldo', 'CashApp')}
              >
                💰 CashApp
              </button>
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => copyToClipboard('857.250.5237', 'Zelle')}
              >
                🏦 Zelle
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* Sticky Navigation Bar */}
        <div
          className={`fixed left-0 right-0 top-0 z-50 transform bg-gradient-to-r from-primary-700 to-primary-800 px-4 py-5 shadow-lg transition-transform duration-300 ease-in-out ${
            !isVideoVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Radio className="mr-3 h-7 w-7 text-white" />
              <div className="text-white">
                <h3 className="text-base font-semibold md:text-lg">Radio Alaba A Dios</h3>
                <p className="text-sm text-primary-100">Transmisión En Vivo</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-secondary-500 text-white hover:bg-secondary-600 px-6 py-3 rounded-lg text-base font-semibold shadow"
                onClick={scrollToVideo}
              >
                Regresar al Radio
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Section with Logo and Station Name */}
        <section className="relative w-full bg-[url('/hero-background.png')] bg-cover bg-center py-12 md:py-24">
          <div className="absolute inset-0 bg-primary-700/60"></div>
          <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
            {/* Simplified Centered Logo */}
            <div className="mb-6 flex justify-center md:mb-8">
              <div className="relative h-32 w-32 overflow-hidden rounded-full bg-white shadow-lg md:h-48 md:w-48 lg:h-56 lg:w-56">
                <Image
                  src="/Logo.jpg"
                  alt="Radio Alaba A Dios Logo"
                  fill
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 224px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            <h1 className="mb-1 font-serif text-3xl font-bold text-white md:mb-2 md:text-6xl">Radio Alaba A Dios </h1>
            <p className="mb-6 text-lg text-secondary-200 md:mb-8 md:text-2xl">En Todo Tiempo Alaba a Dios</p>
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
              <DonationDropdown
                isOpen={isHeroDonationDropdownOpen}
                onToggle={() => setIsHeroDonationDropdownOpen(!isHeroDonationDropdownOpen)}
                onClose={() => setIsHeroDonationDropdownOpen(false)}
              />
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
                  Radio Alaba A Dios - En Vivo
                </h3>
                <div className="relative overflow-hidden rounded-lg bg-black">
                  <iframe
                    ref={iframeRef}
                    style={{
                      maxWidth: "640px",
                      width: "100%",
                      display: "block",
                      margin: "auto"
                    }}
                    src="https://www.ministeriotv.com/home/ejwM/205"
                    width="640"
                    height="360"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    allow="autoplay"
                    title="Radio Alaba A Dios  - Transmisión En Vivo"
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
                    title="Radio Alaba A Dios  - Chat Comunitario"
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
                    <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/MarcosWitt.jpeg"
                        alt="Marcos Witt"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-primary-800">Marcos Witt</h3>
                    <p className="text-xs text-primary-600">Alabanza y Adoración</p>
                  </div>

                  {/* Artist 2 */}
                  <div className="rounded-lg bg-white p-3 text-center shadow-sm transition-all hover:shadow md:p-4">
                    <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/JesusAdrianRomero.png"
                        alt="Jesús Adrián Romero"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-primary-800">Jesús Adrián Romero</h3>
                    <p className="text-xs text-primary-600">Música Contemporánea</p>
                  </div>

                  {/* Artist 3 */}
                  <div className="rounded-lg bg-white p-3 text-center shadow-sm transition-all hover:shadow md:p-4">
                    <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/Nancy.jpg"
                        alt="Nancy Cintrón"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-primary-800">Nancy Cintrón</h3>
                    <p className="text-xs text-primary-600">Adoración</p>
                  </div>

                  {/* Artist 4 */}
                  <div className="rounded-lg bg-white p-3 text-center shadow-sm transition-all hover:shadow md:p-4">
                    <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/MielSanMarcos.jpg"
                        alt="Miel San Marcos"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-primary-800">Miel San Marcos</h3>
                    <p className="text-xs text-primary-600">Grupo de Alabanza</p>
                  </div>
                </div>
              </div>

              {/* Sponsors Section */}
              {/* <SponsorsSection /> */}
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
              <DonationDropdown
                isOpen={isDonationDropdownOpen}
                onToggle={() => setIsDonationDropdownOpen(!isDonationDropdownOpen)}
                onClose={() => setIsDonationDropdownOpen(false)}
              />
              <Button
                variant="outline"
                className="w-full border-white bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto"
              >
                Voluntariado
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 md:mt-10">
              <Link href="https://www.facebook.com/AlabaADiosMinisterio" className="flex items-center justify-center text-white hover:text-secondary-200">
                <Facebook className="mr-2 h-5 w-5" /> Facebook
              </Link>
              {/* <Link href="#" className="flex items-center justify-center text-white hover:text-secondary-200">
                   <Twitter className="mr-2 h-5 w-5" /> Twitter 
                  </Link> */}
              {/* <Link href="#" className="flex items-center justify-center text-white hover:text-secondary-200">
                <Instagram className="mr-2 h-5 w-5" /> Instagram
              </Link> */}
              <Link href="https://www.youtube.com/@radioalabaadiosjosemachado9819" className="flex items-center justify-center text-white hover:text-secondary-200">
                <Youtube className="mr-2 h-5 w-5" /> YouTube
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary-900 py-6 text-primary-200 md:py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-3 text-sm md:mb-4 md:text-base">Radio Alaba A Dios - En Todo Tiempo Alaba a Dios</p>
            <p className="text-xs md:text-sm">
              © {new Date().getFullYear()} Radio Alaba A Dios . Todos los derechos reservados.
            </p>
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
      {/* Add the Toaster component */}
      <Toaster />
    </>
  )
}
