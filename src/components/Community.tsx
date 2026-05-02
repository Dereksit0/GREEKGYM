"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { id: 1, title: "Greeks 1", tag: "Fuerza", src: "/greeks1.png" },
  { id: 2, title: "Greeks 2", tag: "Resistencia", src: "/greeks2.png" },
  { id: 3, title: "Greeks 3", tag: "Poder", src: "/greeks3.png" },
  { id: 4, title: "Greeks 4", tag: "Disciplina", src: "/greeks4.png" },
  { id: 5, title: "Greeks 5", tag: "Olimpo", src: "/greeks5.png" },
  { id: 6, title: "Greeks 6", tag: "Guerreros", src: "/greeks6.png" },
  { id: 7, title: "Greeks 7", tag: "Honor", src: "/greeks7.png" },
  { id: 8, title: "Greeks 8", tag: "Victoria", src: "/greeks8.png" },
];

export default function Community() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, children } = scrollRef.current;
      const itemWidth = (children[0] as HTMLElement).offsetWidth + 24; // Width + gap
      const scrollTo = direction === 'left' ? scrollLeft - itemWidth : scrollLeft + itemWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="community" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(201,168,76,0.06),transparent)] pointer-events-none" />

      {/* Decorative line top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-xs tracking-[0.4em] text-yellow-400 uppercase mb-4">
            Comunidad
          </p>
          <h2 className="font-cinzel font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            COMUNIDAD
            <br />
            <span className="gold-shimmer">GREEKS</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-6" />
          <p className="mt-6 font-inter text-white/50 max-w-xl mx-auto leading-relaxed">
            Únete a cientos de guerreros que ya forjan sus cuerpos en nuestros
            templos. La transformación es colectiva.
          </p>
        </motion.div>

        <div className="relative group">
          {/* Nav Buttons */}
          <div className="flex absolute top-1/2 -translate-y-1/2 -left-4 -right-4 sm:-left-12 sm:-right-12 z-30 justify-between pointer-events-none">
            <button
              onClick={() => scroll('left')}
              className="p-3 sm:p-4 rounded-full bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 pointer-events-auto hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 sm:p-4 rounded-full bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 pointer-events-auto hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Image grid — 9:16 ratio cards */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
          >
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative group cursor-pointer min-w-[280px] sm:min-w-[320px] snap-center"
              >
                {/* 9:16 aspect ratio */}
                <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/5 group-hover:border-yellow-500/40 transition-colors duration-500">
                    {/* Image */}
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                    />

                    {/* Gold gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="font-cinzel text-[10px] tracking-widest uppercase text-yellow-400 bg-black/60 backdrop-blur-sm border border-yellow-500/30 px-3 py-1 rounded-full">
                        {img.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-6 left-0 right-0 px-5">
                      <p className="font-cinzel font-bold text-white text-lg leading-tight">
                        {img.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/greek_gym_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-cinzel text-sm tracking-widest text-white/40 hover:text-yellow-400 transition-colors uppercase border-b border-white/10 hover:border-yellow-500/50 pb-0.5"
          >
            Ver más en Instagram
          </a>
        </motion.div>
      </div>

      {/* Decorative line bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
    </section>
  );
}