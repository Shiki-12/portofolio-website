"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const socials = [
  {
    icon: <Github size={18} />,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    href: "mailto:hello@example.com",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 sm:py-32">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-label">// contact</span>
          <h2 className="section-title mt-2">
            Get In Touch<span className="text-cyan">.</span>
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? Drop me a message and
            I&apos;ll get back to you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass glow-border rounded-xl p-6 sm:p-8 mb-16 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs text-muted mb-2 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="input-field"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs text-muted mb-2 uppercase tracking-wider"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="input-field"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs text-muted mb-2 uppercase tracking-wider"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              className="input-field resize-none"
            />
          </div>
          <button
            type="submit"
            className="neon-btn px-8 py-3 rounded-lg font-mono text-sm text-cyan flex items-center gap-2 hover:scale-105 transition-transform w-full sm:w-auto justify-center"
          >
            <Send size={14} />
            Send Message
          </button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg glass glow-border flex items-center justify-center text-muted hover:text-cyan hover:border-cyan/30 transition-all hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-white/10" />

          {/* Copyright */}
          <p className="font-mono text-xs text-muted/50 text-center">
            <span className="text-cyan/30">&copy;</span>{" "}
            {new Date().getFullYear()} Shiki. All systems operational.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
