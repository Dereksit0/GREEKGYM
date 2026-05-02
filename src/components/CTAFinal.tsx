"use client";

import { motion } from "framer-motion";
import { MessageCircle, Zap } from "lucide-react";

const WA_LINK =
  "https://wa.me/522202757573?text=Hola,%20quiero%20más%20información%20sobre%20Zeuz%20Gym";

export default function CTAFinal() {
  return (
    <section className="relative py-24 sm:py-36 bg-black overflow-hidden">
      {/* Animated radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,76,0.1),transparent)] pointer-events-none" />

      {/* Lightning streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-px h-40 bg-gradient-to-b from-blue-400/30 to-transparent rotate-12"
          style={{ animation: "pulse 3s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-px h-32 bg-gradient-to-b from-blue-400/20 to-transparent -rotate-12"
          style={{ animation: "pulse 4s ease-in-out infinite 1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-full border border-yellow-500/30 bg-yellow-500/5 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-yellow-500/10">
            <Zap className="w-9 h-9 text-yellow-400 fill-yellow-400" />
          </div>

          <p className="font-cinzel text-xs tracking-[0.4em] text-yellow-400 uppercase mb-6">
            Consulta con nuestros expertos
          </p>

          <h2 className="font-cinzel font-black text-4xl sm:text-5xl md:text-7xl text-white leading-tight mb-6">
            HABLA CON UN
            <br />
            <span className="gold-shimmer">ORÁCULO</span>
          </h2>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8" />

          <p className="font-inter text-white/50 text-lg max-w-xl mx-auto leading-relaxed mb-12">
            ¿Listo para comenzar tu ascenso al Olimpo? Nuestros asesores
            divinos responderán todas tus preguntas. Primer paso: un mensaje.
          </p>

          {/* Main CTA */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="glow-gold inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-black font-cinzel font-black text-sm sm:text-base tracking-[0.2em] uppercase rounded-2xl transition-colors duration-300 shadow-xl shadow-yellow-500/40"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            Habla con un Oráculo (WhatsApp)
          </motion.a>

          <p className="mt-6 font-inter text-xs text-white/20 tracking-widest">
            Respuesta garantizada en menos de 1 hora · Lun — Sáb
          </p>
        </motion.div>
      </div>
    </section>
  );
}