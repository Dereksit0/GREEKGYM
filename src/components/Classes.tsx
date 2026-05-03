"use client";

import { motion } from "framer-motion";
import { Dumbbell, Flame, Leaf, Shield, Wind, Swords } from "lucide-react";

const classes = [
  {
    icon: Dumbbell,
    name: "Templo de Pierna",
    subtitle: "Cimientos de Titán",
    schedule: "Cuádriceps · Isquios · Glúteo",
    description:
      "Forja unas piernas de acero con nuestra selección de máquinas de prensa, sentadilla hack y extensiones. El día de pierna es sagrado.",
    color: "from-yellow-900/20 to-transparent",
    accent: "text-yellow-400",
    border: "border-yellow-500/20 hover:border-yellow-500/60",
  },
  {
    icon: Shield,
    name: "Templo de Pecho",
    subtitle: "Armadura Divina",
    schedule: "Pectoral Mayor · Menor · Serratos",
    description:
      "Construye un pecho imponente con nuestros bancos planos, inclinados y máquinas de press convergente. Fuerza pura en cada empuje.",
    color: "from-orange-900/20 to-transparent",
    accent: "text-orange-400",
    border: "border-orange-500/20 hover:border-orange-500/60",
  },
  {
    icon: Swords,
    name: "Templo de Espalda",
    subtitle: "Alas del Olimpo",
    schedule: "Dorsal · Trapecio · Lumbares",
    description:
      "Amplitud y densidad. Remos, jalones y racks de peso muerto para esculpir una espalda digna de cargar el cielo.",
    color: "from-blue-900/20 to-transparent",
    accent: "text-blue-400",
    border: "border-blue-500/20 hover:border-blue-500/60",
  },
  {
    icon: Flame,
    name: "Templo de Brazo",
    subtitle: "Rayos de Zeus",
    schedule: "Bíceps · Tríceps · Antebrazo",
    description:
      "Aislamiento máximo para brazos legendarios. Predicadores, poleas y mancuernas de alto gramaje para un bombeo épico.",
    color: "from-red-900/20 to-transparent",
    accent: "text-red-400",
    border: "border-red-500/20 hover:border-red-500/60",
  },
  {
    icon: Wind,
    name: "Templo de Hombro",
    subtitle: "Fuerza de Atlas",
    schedule: "Deltoides Frontal · Lateral · Posterior",
    description:
      "Hombros redondos y potentes. Presses militares y elevaciones laterales para una silueta en V perfecta.",
    color: "from-purple-900/20 to-transparent",
    accent: "text-purple-400",
    border: "border-purple-500/20 hover:border-purple-500/60",
  },
  {
    icon: Flame,
    name: "Templo de Jumping",
    subtitle: "Vuelo de Hermes",
    schedule: "Cardio · Coordinación · Resistencia",
    description:
      "Desafía la gravedad y quema calorías al máximo en nuestras clases de mini-trampolín. Diversión y resultados en cada salto.",
    color: "from-pink-900/20 to-transparent",
    accent: "text-pink-400",
    border: "border-pink-500/20 hover:border-pink-500/60",
  },
  {
    icon: Flame,
    name: "Templo de Spinning",
    subtitle: "Carrera de Carros",
    schedule: "Resistencia · Potencia · Pierna",
    description:
      "Pedalea hacia la gloria en sesiones de alta intensidad. Quema grasa y fortalece tu tren inferior con el mejor ritmo.",
    color: "from-cyan-900/20 to-transparent",
    accent: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-500/60",
  },
  {
    icon: Leaf,
    name: "Santuario de Core",
    subtitle: "Centro del Poder",
    schedule: "Abdominales · Oblicuos · Lumbar",
    description:
      "Estabilidad y estética. Define tu sección media con ejercicios de control y resistencia para el guerrero completo.",
    color: "from-emerald-900/20 to-transparent",
    accent: "text-emerald-400",
    border: "border-emerald-500/20 hover:border-emerald-500/60",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="relative py-24 sm:py-32 bg-[#040404] overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

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
            Disciplinas & Horarios
          </p>
          <h2 className="font-cinzel font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            TEMPLOS DEL
            <br />
            <span className="gold-shimmer">OLIMPO</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {classes.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group rounded-2xl border ${c.border} bg-black/60 backdrop-blur-sm p-6 overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-yellow-500/5 hover:-translate-y-1`}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Decorative column lines */}
                <div className="absolute top-0 right-6 w-px h-full bg-gradient-to-b from-white/5 to-transparent" />
                <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-white/3 to-transparent" />

                <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mb-4 bg-white/5`}
                  >
                    <Icon className={`w-6 h-6 ${c.accent}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel font-bold text-white text-lg leading-tight mb-1">
                    {c.name}
                  </h3>
                  <p className={`font-cinzel text-xs tracking-widest uppercase ${c.accent} mb-3`}>
                    {c.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-16 sm:w-full bg-white/5 mb-4" />

                  {/* Schedule badge */}
                  <div className="flex items-center sm:items-start gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                    <p className="font-inter text-xs text-white/40 leading-relaxed">
                      {c.schedule}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-inter text-sm text-white/50 leading-relaxed">
                    {c.description}
                  </p>

                  {/* CTA */}
                  <div
                    className={`mt-5 inline-flex items-center gap-1.5 font-cinzel text-xs tracking-widest uppercase ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  >
                    Reservar clase
                    <span className="text-base leading-none">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}