"use client";

import { motion } from "framer-motion";

const skillsRow1 = [
  "Linux",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "Node.js",
  "Docker",
];

const skillsRow2 = [
  "Networking",
  "Cybersecurity",
  "Git",
  "PostgreSQL",
  "Nginx",
  "Ansible",
  "Grafana",
  "Bash",
];

function SkillPill({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 glass glow-border rounded-lg px-5 py-3 font-mono text-sm text-foreground/70 hover:text-cyan hover:border-cyan/30 transition-all duration-300 cursor-default select-none">
      {name}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// tech stack</span>
          <h2 className="section-title mt-2">
            Skills & Tools<span className="text-cyan">.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee row 1 - scrolls left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mb-4"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4"
          style={{
            animation: "marquee-left 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...skillsRow1, ...skillsRow1, ...skillsRow1, ...skillsRow1].map(
            (skill, i) => (
              <SkillPill key={`r1-${i}`} name={skill} />
            )
          )}
        </div>
      </motion.div>

      {/* Marquee row 2 - scrolls right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4"
          style={{
            animation: "marquee-right 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...skillsRow2, ...skillsRow2, ...skillsRow2, ...skillsRow2].map(
            (skill, i) => (
              <SkillPill key={`r2-${i}`} name={skill} />
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
