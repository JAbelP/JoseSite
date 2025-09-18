"use client";

import React, { useImperativeHandle, useRef, useEffect, forwardRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

export type RadioPlayerRef = {
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (v: number) => void;
};

type RadioPlayerProps = {
  stream: string;
  streamtype: string;
  radioid: string;
  radioimg: string;
  radioname: string;
  volume?: number;
  onPlayStateChange?: (playing: boolean) => void;
  onMuteStateChange?: (muted: boolean) => void;
  className?: string;
};

const RadioPlayer = forwardRef<RadioPlayerRef, RadioPlayerProps>((props, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    togglePlay: () => {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
    },
    toggleMute: () => {
      if (audioRef.current) {
        audioRef.current.muted = !audioRef.current.muted;
      }
    },
    setVolume: (v: number) => {
      if (audioRef.current) {
        audioRef.current.volume = v;
      }
    },
  }));

  useEffect(() => {
    if (audioRef.current && typeof props.volume === "number") {
      audioRef.current.volume = props.volume;
    }
  }, [props.volume]);

  return (
    <div className={props.className}>
      {/* Radio Image and Info */}
      <div className="relative flex items-center gap-4 rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105 cursor-pointer">
        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-primary-100 flex-shrink-0">
          <Image
            src={props.radioimg}
            alt={props.radioname}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/Logo.jpg"; // Fallback to local logo
            }}
          />
        </div>

        <div className="flex-1 text-left">
          <h3 className="font-serif text-xl font-bold text-primary-700 mb-1">
            {props.radioname}
          </h3>
          <p className="text-sm text-primary-600">
            {audioRef.current?.paused ? "Presiona para escuchar" : "En Vivo"}
          </p>
        </div>

        {/* Play/Pause Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white transition-all hover:bg-primary-700 group-hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              if (audioRef.current) {
                if (audioRef.current.paused) {
                  audioRef.current.play();
                } else {
                  audioRef.current.pause();
                }
              }
            }}
          >
            {audioRef.current?.paused ? (
              <Play className="h-6 w-6 ml-0.5" />
            ) : (
              <Pause className="h-6 w-6" />
            )}
          </button>

          {/* Mute Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-all hover:bg-primary-200"
            onClick={(e) => {
              e.stopPropagation();
              if (audioRef.current) {
                audioRef.current.muted = !audioRef.current.muted;
              }
            }}
            title={audioRef.current?.muted ? "Unmute" : "Mute"}
          >
            {audioRef.current?.muted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={props.stream}
        controls={false}
        autoPlay={false}
        preload="none"
      />
    </div>
  );
});

RadioPlayer.displayName = "RadioPlayer";

export default RadioPlayer;