import { Zap } from "lucide-react";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/522202757573?text=Hola,%20quiero%20más%20información%20sobre%20Zeuz%20Gym";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-64 h-20 sm:w-72 sm:h-24">
              <Image
                src="/logo.png"
                alt="Zeuz Gym Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Inicio", href: "#hero" },
              { label: "Comunidad", href: "#community" },
              { label: "Clases", href: "#classes" },
              { label: "Planes", href: "#pricing" },
              { label: "Sucursales", href: "#locations" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-cinzel text-xs tracking-widest text-white/30 hover:text-yellow-400 uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-cinzel text-xs tracking-widest uppercase text-yellow-400/60 hover:text-yellow-400 border border-yellow-500/20 hover:border-yellow-500/50 px-4 py-2 rounded-full transition-all"
          >
            WhatsApp
          </a>
        </div>

        <div className="h-px bg-white/5 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-white/20 font-inter text-xs">
          <p>© {new Date().getFullYear()} Greek Gym Zeus. Todos los derechos reservados.</p>
          <p className="tracking-widest">Puebla, México</p>
        </div>
      </div>
    </footer>
  );
}