"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: "v1", src: "/video5.mp4", label: "Resultados Reales" },
  { id: "v2", src: "/video6.mp4", label: "Comunidad Unida" },
  { id: "v3", src: "/video7.mp4", label: "Disciplina de Dioses" },
];

function VideoCard({ video, i, isInView }: { video: any, i: number, isInView: boolean }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.2, duration: 0.8 }}
      className="relative group"
    >
      <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Label */}
        <div className="absolute bottom-6 left-0 right-0 px-6 z-10 text-center sm:text-left sm:left-6 sm:right-6">
          <p className="font-cinzel text-xs tracking-widest text-yellow-400 uppercase mb-1">Testimonio</p>
          <h3 className="font-cinzel font-bold text-white text-lg leading-tight uppercase">{video.label}</h3>
        </div>

        {/* Mute toggle */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="relative py-24 bg-[#040404] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs tracking-[0.4em] text-yellow-400 uppercase mb-4">La Voz del Olimpo</p>
          <h2 className="font-cinzel font-black text-4xl sm:text-5xl md:text-6xl text-white">
            ELLOS <span className="gold-shimmer">CONFÍAN</span> EN NOSOTROS
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="relative group">
          {/* Mobile Nav Buttons */}
          <div className="flex sm:hidden absolute top-1/2 -translate-y-1/2 -left-2 -right-2 z-30 justify-between pointer-events-none">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 pointer-events-auto active:scale-90 transition-transform"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 pointer-events-auto active:scale-90 transition-transform"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={containerRef} 
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-8 sm:pb-0"
          >
            {videos.map((v, i) => (
              <div key={v.id} className="min-w-[85%] sm:min-w-0 snap-center">
                <VideoCard video={v} i={i} isInView={isInView} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
