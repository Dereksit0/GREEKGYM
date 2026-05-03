"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Music, Bike } from "lucide-react";

const gymHours = [
  { days: "Lunes a Viernes", time: "5:30 AM A 10:30 PM" },
  { days: "Sábado y Domingo", time: "7:00 AM A 7:00 PM" },
];

const classSchedule = [
  {
    day: "LUNES",
    classes: [
      { time: "8:30 AM - 9:30 AM", name: "SPINNING", type: "spinning" },
      { time: "7:00 PM - 8:00 PM", name: "SPINNING", type: "spinning" },
      { time: "8:10 PM - 9:10 PM", name: "RITMOS LATINOS", type: "ritmos" },
    ],
  },
  {
    day: "MARTES",
    classes: [
      { time: "8:30 AM - 9:30 AM", name: "SPINNING", type: "spinning" },
      { time: "7:00 PM - 8:00 PM", name: "SPINNING", type: "spinning" },
    ],
  },
  {
    day: "MIÉRCOLES",
    classes: [
      { time: "8:30 AM - 9:30 AM", name: "SPINNING", type: "spinning" },
      { time: "7:00 PM - 8:00 PM", name: "RITMOS LATINOS", type: "ritmos" },
      { time: "8:10 PM - 9:10 PM", name: "SPINNING", type: "spinning" },
    ],
  },
  {
    day: "JUEVES",
    classes: [
      { time: "8:30 AM - 9:30 AM", name: "SPINNING", type: "spinning" },
      { time: "8:00 PM - 9:00 PM", name: "SPINNING", type: "spinning" },
    ],
  },
  {
    day: "VIERNES",
    classes: [
      { time: "8:30 AM - 9:30 AM", name: "SPINNING", type: "spinning" },
      { time: "7:00 PM - 8:00 PM", name: "RITMOS LATINOS", type: "ritmos" },
    ],
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.03),transparent)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Gym General Hours */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="text-center lg:text-left">
              <p className="font-cinzel text-xs tracking-[0.4em] text-yellow-400 uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Clock className="w-4 h-4" /> Horarios de Apertura
              </p>
              <h2 className="font-cinzel font-black text-4xl sm:text-5xl text-white leading-tight mb-2">
                HORARIOS
              </h2>
              <h3 className="font-cinzel text-xl text-yellow-500/80 tracking-widest uppercase">
                FORJA TU LEYENDA
              </h3>
            </div>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
              {gymHours.map((item, i) => (
                <div key={i} className="relative group w-full text-center lg:text-left">
                  <div className="absolute -inset-x-4 -inset-y-3 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative">
                    <p className="font-cinzel text-xs tracking-widest text-yellow-500 uppercase mb-1">
                      {item.days}
                    </p>
                    <p className="font-inter text-2xl font-light text-white tracking-tight">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                  <Calendar className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-medium">Abierto todo el año</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">Excepto festivos oficiales</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Class Schedule Table */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="mb-8 text-center lg:text-left">
              <p className="font-cinzel text-xs tracking-[0.4em] text-yellow-400 uppercase mb-4">
                Programación Semanal
              </p>
              <h2 className="font-cinzel font-black text-4xl text-white">
                HORARIO DE <span className="gold-shimmer">CLASES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {classSchedule.map((day, i) => (
                <div key={i} className="flex flex-col gap-4">
                  {/* Day Header */}
                  <div className="p-3 rounded-t-xl text-center border-b-2 bg-yellow-500/10 border-yellow-500/50">
                    <span className="font-cinzel text-[10px] tracking-widest font-bold text-yellow-400">
                      {day.day}
                    </span>
                  </div>

                  {/* Class slots */}
                  <div className="space-y-3">
                    {day.classes.map((cls, j) => (
                      <div 
                        key={j} 
                        className="group relative p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                      >
                        <p className="text-xs text-white/40 font-inter mb-2 uppercase tracking-tighter text-center sm:text-left">
                          {cls.time}
                        </p>
                        <p className="font-cinzel text-sm sm:text-base font-black tracking-wider text-white group-hover:text-yellow-400 transition-colors text-center sm:text-left">
                          {cls.name}
                        </p>
                        
                        {/* Type Icon indicator */}
                        <div className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-60 transition-opacity">
                          {cls.type === 'spinning' ? (
                            <Bike className="w-3 h-3 text-yellow-500" />
                          ) : (
                            <Music className="w-3 h-3 text-yellow-500" />
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {/* Empty state for visual balance if few classes */}
                    {day.classes.length < 3 && Array.from({length: 3 - day.classes.length}).map((_, k) => (
                      <div key={`empty-${k}`} className="p-4 rounded-xl border border-white/[0.02] bg-white/[0.01] h-20 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-white/5" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer indicator */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start border-t border-white/5 pt-8">
              <p className="text-[10px] font-cinzel text-white/30 tracking-[0.3em] uppercase">
                Consulta disponibilidad de cupos vía WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
