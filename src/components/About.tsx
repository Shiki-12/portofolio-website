"use client";

import { motion } from "framer-motion";

const bioLines = [
  { prompt: true, text: "cat about.txt" },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "Hello! I'm a passionate developer and system administrator",
  },
  {
    prompt: false,
    text: "with a deep love for network engineering, hardware repair,",
  },
  { prompt: false, text: "and building modern web applications." },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "I specialize in creating fast, responsive front-end",
  },
  {
    prompt: false,
    text: "experiences with Next.js and React, while also managing",
  },
  {
    prompt: false,
    text: "servers, configuring networks, and ensuring cybersecurity",
  },
  { prompt: false, text: "best practices are always in place." },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "When I'm not coding, you'll find me diagnosing hardware",
  },
  {
    prompt: false,
    text: "issues, optimizing system performance, or exploring the",
  },
  { prompt: false, text: "latest in Linux and open-source technology." },
  { prompt: false, text: "" },
  { prompt: true, text: "echo $SKILLS" },
  {
    prompt: false,
    text: "[ Next.js, React, TypeScript, Python, Linux, Networking,",
  },
  { prompt: false, text: "  Cybersecurity, Hardware Repair, Docker, Git ]" },
  { prompt: false, text: "" },
  { prompt: true, text: "█" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">// about me</span>
          <h2 className="section-title mt-2">
            Terminal<span className="text-cyan">.</span>profile
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass glow-border rounded-xl overflow-hidden"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center">
              <span className="font-mono text-xs text-muted/60">
                shiki@dev:~/portfolio
              </span>
            </div>
            <div className="w-[52px]" /> {/* Spacer for centering */}
          </div>

          {/* Terminal content */}
          <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            {bioLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="min-h-[1.5em]"
              >
                {line.prompt ? (
                  <span>
                    <span className="text-green-400">shiki@dev</span>
                    <span className="text-muted">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-muted">$ </span>
                    <span
                      className={
                        line.text === "█"
                          ? "text-foreground animate-pulse"
                          : "text-foreground"
                      }
                    >
                      {line.text}
                    </span>
                  </span>
                ) : (
                  <span className="text-foreground/70">{line.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
