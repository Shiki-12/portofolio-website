"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

const roles = [
  "Frontend Developer",
  "System Administrator",
  "CyberSecurity",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Initialization effect
  useEffect(() => {
    const timer = setTimeout(() => setInitialized(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!initialized) return;

    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayedText === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? current.substring(0, displayedText.length - 1)
          : current.substring(0, displayedText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, initialized]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* System init label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-mono text-xs sm:text-sm text-cyan/60 tracking-[0.3em]">
            {initialized ? (
              <>
                <span className="text-green-400">●</span> system online —
                welcome
              </>
            ) : (
              <>
                <span className="text-yellow-400 animate-pulse">●</span>{" "}
                Initializing system...
              </>
            )}
          </span>
        </motion.div>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono mb-6 leading-tight"
        >
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="gradient-text">Shiki</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 h-10"
        >
          <p className="font-mono text-lg sm:text-xl md:text-2xl text-muted">
            &gt;{" "}
            <span className="text-cyan">
              {displayedText}
              <span
                className="inline-block w-[2px] h-[1em] bg-cyan ml-0.5 align-middle"
                style={{ animation: "blink-cursor 1s step-end infinite" }}
              />
            </span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="neon-btn px-8 py-3.5 rounded-lg font-mono text-sm text-cyan flex items-center gap-2 hover:scale-105 transition-transform w-full sm:w-auto justify-center"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="glass-btn px-8 py-3.5 rounded-lg font-mono text-sm text-foreground flex items-center gap-2 hover:scale-105 transition-transform w-full sm:w-auto justify-center"
          >
            <MessageSquare size={16} />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
