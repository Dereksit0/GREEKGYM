"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/522202757573?text=Hola,%20quiero%20más%20información%20sobre%20Zeuz%20Gym";

export default function StickyWhatsApp() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span className="font-cinzel text-xs font-bold tracking-widest uppercase hidden sm:inline">
        Oráculo WhatsApp
      </span>
    </motion.a>
  );
}