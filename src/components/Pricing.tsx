"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import LightningEffect from "./LightningEffect";

const plans = [
  {
    name: "Mortal",
    subtitle: "Comienza tu camino",
    price: "499",
    period: "/ mes",
    description: "Para quienes dan sus primeros pasos hacia la grandeza.",
    features: [
      "Acceso a sala de pesas",
      "1 clase grupal por semana",
      "Vestuarios y lockers",
      "App Greek Gym",
    ],
    missing: ["Clases ilimitadas", "Nutrición", "Acceso 24/7", "Coach personal"],
    cta: "Empieza como Mortal",
    highlight: false,
    badge: null,
    borderClass: "border-white/10 hover:border-white/20",
    ctaClass: "bg-white/5 hover:bg-white/10 text-white border border-white/10",
  },
  {
    name: "Héroe",
    subtitle: "El sendero del guerrero",
    price: "799",
    period: "/ mes",
    description: "Para quienes ya decidieron convertirse en algo más.",
    features: [
      "Acceso a sala de pesas",
      "Clases grupales ilimitadas",
      "Vestuarios y lockers",
      "App Greek Gym",
      "Plan nutricional básico",
      "Acceso a las 2 sucursales",
    ],
    missing: ["Acceso 24/7", "Coach personal"],
    cta: "Ascender a Héroe",
    highlight: false,
    badge: "Popular",
    borderClass: "border-white/20 hover:border-white/30",
    ctaClass: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
  },
  {
    name: "Dios",
    subtitle: "La cima del Olimpo",
    price: "1,299",
    period: "/ mes",
    description: "Poder absoluto. Sin límites. Sin excusas. Solo resultados divinos.",
    features: [
      "Acceso ilimitado a todo",
      "Clases grupales ilimitadas",
      "Acceso 24/7 las 2 sucursales",
      "Coach personal (4 sesiones/mes)",
      "Plan nutricional premium",
      "Masaje de recuperación mensual",
      "Merch exclusivo Greek Gym",
      "Comunidad VIP del Olimpo",
    ],
    missing: [],
    cta: "ASCENDER AL OLIMPO",
    highlight: true,
    badge: "El mejor valor",
    borderClass: "border-yellow-500/50",
    ctaClass:
      "bg-yellow-500 hover:bg-yellow-400 text-black font-black shadow-lg shadow-yellow-500/40 hover:shadow-yellow-400/60",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,168,76,0.05),transparent)] pointer-events-none" />
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
            Planes & Membresías
          </p>
          <h2 className="font-cinzel font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            ELIGE TU
            <br />
            <span className="gold-shimmer">DESTINO</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-6" />
          <p className="mt-6 font-inter text-white/50 max-w-lg mx-auto">
            Tres niveles. Un único objetivo: convertirte en la mejor versión de
            ti mismo.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative flex flex-col rounded-2xl border ${plan.borderClass} ${
                plan.highlight ? "glow-gold bg-[#0d0b00]" : "bg-black/60"
              } p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2`}
            >
              {/* God plan — Olympus & Lightning effects */}
              {plan.highlight && <LightningEffect />}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-5 right-5 z-20">
                  <span
                    className={`font-cinzel text-[10px] tracking-widest uppercase px-3 py-1 rounded-full ${
                      plan.highlight
                        ? "bg-yellow-500 text-black"
                        : "bg-white/10 text-white/60 border border-white/10"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left flex-1">
                {/* Plan name */}
                <p
                  className={`font-cinzel text-xs tracking-[0.4em] uppercase mb-2 ${
                    plan.highlight ? "text-yellow-400" : "text-white/40"
                  }`}
                >
                  {plan.subtitle}
                </p>
                <h3
                  className={`font-cinzel font-black text-3xl mb-1 ${
                    plan.highlight ? "gold-shimmer" : "text-white"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-end gap-1 mt-6 mb-4">
                  <span className="font-inter text-sm text-white/40 self-start mt-2">$</span>
                  <span
                    className={`font-cinzel font-black text-5xl leading-none ${
                      plan.highlight ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="font-inter text-sm text-white/40 self-end mb-1">
                    {plan.period}
                  </span>
                </div>

                <p className="font-inter text-sm text-white/40 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="h-px bg-white/5 mb-6 w-full" />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 w-full">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-left">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.highlight ? "text-yellow-400" : "text-white/50"
                        }`}
                      />
                      <span className="font-inter text-sm text-white/70">{f}</span>
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-3 opacity-30 text-left">
                      <div className="w-4 h-4 mt-0.5 shrink-0 flex items-center justify-center">
                        <div className="w-3 h-px bg-white/40" />
                      </div>
                      <span className="font-inter text-sm text-white/40 line-through decoration-white/20">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/522202757573?text=Hola,%20quiero%20el%20plan%20Zeus%20en%20Zeuz%20Gym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-cinzel text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 ${plan.ctaClass}`}
                >
                  {plan.highlight && <Zap className="w-4 h-4 fill-black" />}
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center font-inter text-xs text-white/20 mt-10 tracking-wider"
        >
          Todos los precios en pesos mexicanos. Inscripción única $300 MXN.
          Primer mes sin compromiso de permanencia.
        </motion.p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
    </section>
  );
}