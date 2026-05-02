"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Comunidad", href: "#community" },
  { label: "Clases", href: "#classes" },
  { label: "Planes", href: "#pricing" },
  { label: "Sucursales", href: "#locations" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-yellow-600/20 shadow-lg shadow-yellow-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center -ml-2 sm:ml-0"
        >
          <div className="relative w-64 h-20 sm:w-80 sm:h-28">
            <Image
              src="/logo.png"
              alt="Zeuz Gym Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-cinzel text-sm tracking-widest text-white/70 hover:text-yellow-400 transition-colors duration-300 uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/522202757573?text=Hola,%20quiero%20más%20información%20sobre%20Zeuz%20Gym"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-cinzel font-bold text-xs tracking-widest uppercase rounded transition-all duration-300 shadow-md shadow-yellow-500/40 hover:shadow-yellow-400/60 hover:scale-105"
        >
          <Zap className="w-3.5 h-3.5" />
          Únete
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-yellow-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-yellow-600/20 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-cinzel text-sm tracking-widest text-white/70 hover:text-yellow-400 transition-colors uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/522202757573?text=Hola,%20quiero%20más%20información%20sobre%20Zeuz%20Gym"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 px-5 py-3 bg-yellow-500 text-black font-cinzel font-bold text-xs tracking-widest uppercase rounded shadow-md shadow-yellow-500/40"
          >
            <Zap className="w-3.5 h-3.5" />
            Inicia tu transformación
          </a>
        </div>
      )}
    </header>
  );
}
