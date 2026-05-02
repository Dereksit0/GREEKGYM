"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const branches = [
  {
    id: 1,
    name: "Sucursal Centro",
    address: "C. 4 Sur 714, Centro Histórico, Puebla, Pue.",
    mapsQuery: "C.+4+Sur+714,+Centro+Histórico,+Puebla,+México",
    mapEmbed:
      "https://maps.google.com/maps?q=C.+4+Sur+714,+Puebla,+Mexico&output=embed",
    hours: "Lun — Vie: 05:30 — 22:00 | Sáb: 07:00 — 18:00 | Dom: 08:00 — 14:00",
    phone: "220 275 7573",
    features: ["Estacionamiento", "Regaderas", "Cafetería", "Tienda"],
  },
  {
    id: 2,
    name: "Sucursal Norte",
    address: "C. 55 Nte. 2806, Col. Guadalupe, Puebla, Pue.",
    mapsQuery: "C.+55+Nte.+2806,+Puebla,+México",
    mapEmbed:
      "https://maps.google.com/maps?q=C.+55+Nte.+2806,+Puebla,+Mexico&output=embed",
    hours: "Lun — Vie: 06:00 — 22:00 | Sáb: 07:00 — 18:00 | Dom: 08:00 — 14:00",
    phone: "220 275 7573",
    features: ["Estacionamiento amplio", "Regaderas", "Área CrossFit", "Ring de box"],
  },
];

export default function Locations() {
  return (
    <section id="locations" className="relative py-24 sm:py-32 bg-[#040404] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_50%,rgba(201,168,76,0.04),transparent)] pointer-events-none" />
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
            Nuestros Templos
          </p>
          <h2 className="font-cinzel font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            ENCUENTRA TU
            <br />
            <span className="gold-shimmer">OLIMPO</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-6" />
          <p className="mt-6 font-inter text-white/50 max-w-lg mx-auto">
            Dos templos en Puebla, misma excelencia divina. Tu transformación
            te espera a minutos de distancia.
          </p>
        </motion.div>

        {/* Branches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {branches.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="rounded-2xl border border-white/10 hover:border-yellow-500/30 bg-black/60 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/5"
            >
              {/* Map embed */}
              <div className="relative h-56 bg-zinc-900 overflow-hidden">
                <iframe
                  src={b.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(80%) invert(90%) contrast(90%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${b.name}`}
                />
                {/* Map overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                {/* Branch number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/50">
                  <span className="font-cinzel font-black text-black text-sm">
                    {b.id}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8 flex flex-col items-center text-center sm:items-start sm:text-left">
                <h3 className="font-cinzel font-bold text-white text-xl mb-4">
                  {b.name}
                </h3>

                {/* Address */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                  <p className="font-inter text-sm text-white/60 leading-relaxed">
                    {b.address}
                  </p>
                </div>

                {/* Hours */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-3">
                  <Clock className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                  <p className="font-inter text-xs text-white/40 leading-relaxed">
                    {b.hours}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6">
                  <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                  <p className="font-inter text-sm text-white/50">{b.phone}</p>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6">
                  {b.features.map((f) => (
                    <span
                      key={f}
                      className="font-cinzel text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 text-white/40"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${b.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/10 hover:bg-yellow-500 border border-yellow-500/30 hover:border-yellow-500 text-yellow-400 hover:text-black font-cinzel text-xs tracking-widest uppercase rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Cómo llegar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
    </section>
  );
}