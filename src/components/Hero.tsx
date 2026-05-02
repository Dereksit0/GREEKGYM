"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Animated lightning on canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let animId: number;
    let tick = 0;

    const drawBolt = (x1: number, y1: number, x2: number, y2: number, spread: number) => {
      if (spread < 2) {
        ctx.lineTo(x2, y2);
        return;
      }
      const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * spread;
      const my = (y1 + y2) / 2 + (Math.random() - 0.5) * spread;
      drawBolt(x1, y1, mx, my, spread / 2);
      drawBolt(mx, my, x2, y2, spread / 2);
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      if (tick % 120 < 8) {
        const x = canvas.width * (0.3 + Math.random() * 0.4);
        ctx.beginPath();
        ctx.moveTo(x, 0);
        drawBolt(x, 0, x + (Math.random() - 0.5) * 120, canvas.height * 0.7, 80);
        ctx.strokeStyle = `rgba(99,179,237,${0.15 + Math.random() * 0.2})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#63b3ed";
        ctx.shadowBlur = 15;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-32 overflow-hidden bg-black"
    >
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-60 mix-blend-lighten"
          priority
        />
        {/* Faded overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
      </div>

      {/* Canvas lightning */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,76,0.12),transparent)] z-10" />

      {/* Top dark fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Bottom dark fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-cinzel font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-6"
        >
          <span className="block text-white">ASCIENDE</span>
          <span className="block gold-shimmer mt-2">AL OLIMPO</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="h-px w-48 sm:w-64 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-inter text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Forja un cuerpo legendario en los templos del Olimpo. Entrenamiento
          de élite, comunidad épica y resultados dignos de los dioses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="glow-gold inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-cinzel font-black text-sm tracking-[0.2em] uppercase rounded transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-4 h-4 fill-black" />
            Inicia tu transformación
          </a>
          <a
            href="#classes"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-yellow-500/50 text-white/70 hover:text-yellow-400 font-cinzel text-sm tracking-[0.2em] uppercase rounded transition-all duration-300 backdrop-blur-sm"
          >
            Ver clases
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12 grid grid-cols-3 gap-6 sm:gap-12 max-w-lg mx-auto"
        >
          {[
            { value: "2", label: "Sucursales" },
            { value: "500+", label: "Miembros" },
            { value: "+200", label: "Máquinas" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-cinzel font-black text-2xl sm:text-3xl text-yellow-400">
                {s.value}
              </p>
              <p className="font-inter text-xs text-white/40 tracking-widest uppercase mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/30"
      >
        <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase">
          Descubre
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
