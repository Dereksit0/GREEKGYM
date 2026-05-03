"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Bolt = ({ delay = 0, color = "#fff" }) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 5000 + 2000)
        );
        
        // Initial flash
        await controls.start({
          opacity: [0, 1, 0.5, 1, 0],
          transition: { duration: 0.2, times: [0, 0.2, 0.4, 0.6, 1] },
        });
      }
    };
    sequence();
  }, [controls]);

  // Random bolt path
  const generatePath = () => {
    const segments = 5;
    let path = "M 50 0 ";
    let currentX = 50;
    for (let i = 1; i <= segments; i++) {
      currentX += (Math.random() - 0.5) * 40;
      path += `L ${currentX} ${(i * 100) / segments} `;
    }
    return path;
  };

  const [path] = useState(generatePath());

  return (
    <motion.svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none"
      animate={controls}
      initial={{ opacity: 0 }}
      style={{ filter: `drop-shadow(0 0 8px ${color})` }}
    >
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default function LightningEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
      {/* Heavenly Aura */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-yellow-500/20 via-yellow-500/5 to-transparent opacity-60" />
      
      {/* Background Thunder Flashes */}
      <motion.div
        className="absolute inset-0 bg-white"
        animate={{
          opacity: [0, 0, 0.1, 0, 0.05, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          times: [0, 0.8, 0.82, 0.84, 0.86, 1],
          ease: "easeInOut",
        }}
      />

      {/* Multiple Bolts */}
      <div className="absolute inset-0 opacity-40">
        <Bolt color="#fef3c7" />
        <Bolt color="#fff" delay={1.5} />
        <Bolt color="#fbbf24" delay={3} />
      </div>

      {/* Electric Glow Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{
              y: [null, "-20%"],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Golden Aura Pulse */}
      <motion.div
        className="absolute inset-0 border-2 border-yellow-500/20 rounded-2xl"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
