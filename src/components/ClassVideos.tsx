"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX, Bike, Music, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: "cv1", src: "/video1.mp4", label: "Spinning", type: "spinning" },
  { id: "cv2", src: "/video8.mp4", label: "Ritmos Latinos", type: "baile" },
  { id: "cv3", src: "/video2.mp4", label: "Energía Total", type: "spinning" },
];

function ClassVideoCard({ video, i, isInView }: { video: any, i: number, isInView: boolean }) {
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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: i * 0.15, duration: 0.6 }}
      className="relative group rounded-2xl overflow-hidden border border-white/5 bg-black"
    >
      <div className="relative aspect-[9/16] w-full">
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        
        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-yellow-500/30 z-10" />

        {/* Info */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <div className="flex items-center gap-2 mb-2">
            {video.type === 'spinning' ? <Bike className="w-4 h-4 text-yellow-400" /> : <Music className="w-4 h-4 text-yellow-400" />}
            <span className="font-cinzel text-[10px] tracking-[0.3em] text-yellow-400 uppercase">{video.label}</span>
          </div>
          <div className="h-px w-full bg-white/10 mb-2" />
          <p className="font-cinzel font-black text-white text-sm tracking-widest uppercase">Ver en acción</p>
        </div>

        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white hover:border-yellow-500/50 transition-all"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </motion.div>
  );
}

export default function ClassVideos() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const scroll = (direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="class-videos" className="relative py-24 bg-black overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <p className="font-cinzel text-xs tracking-[0.4em] text-yellow-400 uppercase mb-4">Experiencia Zeuz</p>
            <h2 className="font-cinzel font-black text-4xl sm:text-5xl text-white leading-tight uppercase">
              CONOCE NUESTRAS <br />
              <span className="gold-shimmer">CLASES</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-white/40 font-cinzel text-xs tracking-widest uppercase">
            <span>Spinning</span>
            <div className="w-8 h-px bg-white/20" />
            <span>Baile</span>
          </div>
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
            ref={ref} 
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-8 sm:pb-0"
          >
            {videos.map((v, i) => (
              <div key={v.id} className="min-w-[85%] sm:min-w-0 snap-center">
                <ClassVideoCard video={v} i={i} isInView={isInView} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
