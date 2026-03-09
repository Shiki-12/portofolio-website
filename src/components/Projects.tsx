"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string;
  accent: "cyan" | "purple" | "mixed";
}

interface ProjectsProps {
  projects: Project[];
}

const accentColors = {
  cyan: {
    border: "hover:border-cyan/40",
    shadow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.08)]",
    tag: "text-cyan/70 bg-cyan/5 border-cyan/10",
    icon: "text-cyan",
  },
  purple: {
    border: "hover:border-purple/40",
    shadow: "hover:shadow-[0_0_30px_rgba(176,38,255,0.08)]",
    tag: "text-purple/70 bg-purple/5 border-purple/10",
    icon: "text-purple",
  },
  mixed: {
    border: "hover:border-cyan/30",
    shadow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.06)]",
    tag: "text-cyan/60 bg-cyan/5 border-cyan/10",
    icon: "text-cyan",
  },
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">{"// portfolio"}</span>
          <h2 className="section-title mt-2">
            Featured Projects<span className="text-cyan">.</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl text-sm sm:text-base">
            A selection of projects that showcase my skills in web development,
            automation, and network infrastructure.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const colors = accentColors[project.accent];
            return (
              <motion.article
                key={project.githubUrl}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`group glass glow-border rounded-xl p-6 flex flex-col transition-all duration-300 ${colors.border} ${colors.shadow}`}
              >
                {/* Project number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-muted/40">
                    PROJECT_0{i + 1}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${colors.icon} opacity-60 hover:opacity-100 transition-opacity`}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-mono text-lg font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-[11px] px-2.5 py-1 rounded-md border ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
