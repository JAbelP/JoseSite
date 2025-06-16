/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Slider } from "@/app/components/ui/slider"

// Add this at the top of the file, after the imports
declare global {
  interface Window {
    focusAudioPlayer?: () => void
  }
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(80)
  const [currentShow, setCurrentShow] = useState("Música y Alabanzas")
  const [currentSong, setCurrentSong] = useState("Cuan Grande Es Él - Grupo de Alabanza")
  const [isSticky, setIsSticky] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const playerRef = useRef<HTMLDivElement | null>(null)
  const playButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("https://example.com/stream") // Replace with actual stream URL

    // Set initial volume
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  useEffect(() => {
    // Set up intersection observer to detect when the player is out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When player is not intersecting (out of view), make sticky player visible
        // Add a small threshold to make the transition smoother
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      },
      {
        threshold: 0,
        rootMargin: "-100px 0px 0px 0px", // Trigger a bit before the element is completely out of view
      },
    )

    if (playerRef.current) {
      observer.observe(playerRef.current)
    }

    return () => {
      if (playerRef.current) {
        observer.unobserve(playerRef.current)
      }
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error)
          // Show a user-friendly message here
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue[0])
  }

  const focusPlayButton = () => {
    if (playButtonRef.current) {
      playButtonRef.current.focus()
    }
  }

  useEffect(() => {
    // Make the function available globally
    window.focusAudioPlayer = focusPlayButton
  }, [])

  return (
    <>
      {/* Main player */}
      <div id="live-player" ref={playerRef} className="rounded-lg bg-gradient-to-r from-amber-50 to-blue-50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-amber-800">{currentShow}</h3>
            <p className="text-sm text-amber-600">{currentSong}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={toggleMute}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-amber-700 hover:bg-amber-100 hover:text-amber-900"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            <div className="w-24">
              <Slider value={[volume]} min={0} max={100} step={1} onValueChange={handleVolumeChange} className="h-2" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            ref={playButtonRef}
            onClick={togglePlay}
            className="h-16 w-16 rounded-full bg-amber-600 hover:bg-amber-700"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm text-amber-700">
          <p>Transmitiendo en vivo desde North Carolina</p>
        </div>
      </div>

      {/* Sticky player */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 transform bg-gradient-to-r from-amber-600 to-red-600 px-4 py-2 shadow-lg transition-transform duration-300 ease-in-out ${
          isSticky ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Button
              onClick={togglePlay}
              className="mr-3 h-10 w-10 rounded-full bg-white text-amber-600 hover:bg-amber-100"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <div className="text-white">
              <h3 className="text-sm font-semibold">{currentShow}</h3>
              <p className="text-xs text-amber-100">{currentSong}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={toggleMute}
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-white/10 text-white hover:bg-white/20"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <div className="hidden w-20 sm:block">
              <Slider value={[volume]} min={0} max={100} step={1} onValueChange={handleVolumeChange} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
