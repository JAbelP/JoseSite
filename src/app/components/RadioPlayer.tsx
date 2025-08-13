"use client";

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

interface RadioPlayerProps {
  stream: string;
  streamtype: string;
  radioid: string;
  radioimg: string;
  radioname: string;
  onPlayStateChange?: (isPlaying: boolean) => void;
  onMuteStateChange?: (isMuted: boolean) => void;
  className?: string;
}

export interface RadioPlayerRef {
  togglePlay: () => void;
  toggleMute: () => void;
}

const RadioPlayer = forwardRef<RadioPlayerRef, RadioPlayerProps>(({
  stream,
  streamtype,
  radioid,
  radioimg,
  radioname,
  onPlayStateChange,
  onMuteStateChange,
  className = "",
}, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    togglePlay,
    toggleMute,
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
      console.error("Error loading radio stream");
    };

    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
      onPlayStateChange?.(!isPlaying);
    } catch (error) {
      console.error("Error controlling playback:", error);
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMutedState = !isMuted;
    audio.muted = newMutedState;
    setIsMuted(newMutedState);
    onMuteStateChange?.(newMutedState);
  };

  return (
    <div className={`radio-player ${className}`}>
      <audio
        ref={audioRef}
        src={stream}
        preload="none"
        muted={isMuted}
      />
      
      <div
        className="station_play b-play group relative flex items-center gap-4 rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105 cursor-pointer"
        aria-label="Listen live"
        title={`Listen to ${radioname}`}
        onClick={togglePlay}
        data-stream={stream}
        data-streamtype={streamtype}
        data-radioid={radioid}
        data-radioimg={radioimg}
        data-radioname={radioname}
      >
        {/* Radio Image */}
        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-primary-100 flex-shrink-0">
          <Image
            src={radioimg}
            alt={radioname}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/Logo.jpg"; // Fallback to local logo
            }}
          />
        </div>

        {/* Radio Info */}
        <div className="flex-1 text-left">
          <h3 className="font-serif text-xl font-bold text-primary-700 mb-1">
            {radioname}
          </h3>
          <p className="text-sm text-primary-600">
            {isLoading ? "Conectando..." : isPlaying ? "En Vivo" : "Presiona para escuchar"}
          </p>
        </div>

        {/* Play/Pause Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white transition-all hover:bg-primary-700 group-hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-0.5" />
            )}
          </button>

          {/* Mute Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-all hover:bg-primary-200"
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Live Indicator */}
        {isPlaying && (
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-red-600">EN VIVO</span>
          </div>
        )}
      </div>
    </div>
  );
});

RadioPlayer.displayName = "RadioPlayer";

export default RadioPlayer;