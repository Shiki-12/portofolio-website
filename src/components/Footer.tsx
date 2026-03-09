"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2} from "lucide-react";

const SteamIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11.979 0C5.353 0 0 5.353 0 11.979c0 4.672 2.684 8.718 6.572 10.748l3.414-4.884c-.161-.318-.256-.677-.256-1.056 0-1.314 1.066-2.38 2.38-2.38.27 0 .526.046.764.127l3.294-4.757v-.154c0-2.37-1.921-4.292-4.292-4.292-2.37 0-4.291 1.922-4.291 4.292 0 .614.135 1.192.374 1.712l-2.454 3.525C2.106 13.045 4.314 8.27 8.356 6.012c4.04-2.259 9.17-1.42 12.383 1.794 3.213 3.213 4.053 8.343 1.794 12.384-2.258 4.041-7.032 6.25-11.838 5.485l4.883-3.415c.378.099.738.194 1.056.194 1.313 0 2.38-1.066 2.38-2.38 0-1.314-1.067-2.38-2.38-2.38-1.314 0-2.38 1.066-2.38 2.38 0 .27.046.525.126.763l-4.757 3.294c-.212-.132-.416-.277-.61-.434C1.944 19.467.02 15.938.02 11.979.02 5.353 5.354 0 11.979 0z"/>
  </svg>
);

const socials = [
  {
    icon: <Github size={18} />,
    label: "GitHub",
    href: "https://github.com/Shiki-12",
  },
  {
    icon: <SteamIcon size={18} />,
    label: "Steam",
    href: "https://steamcommunity.com/id/kurisu-21/",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fatar-gaza-114758281/",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=fatargaza21@gmail.com",
  },
];

export default function Footer() {
  // State untuk nyimpen inputan user
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Logic buat ngirim email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // GANTI DENGAN ACCESS KEY DARI EMAIL KAMU
          access_key: "62d8b57e-b515-437d-9073-b5bc686ef0b7", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission from shiki.dev",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
        // Hilangkan notif sukses setelah 5 detik
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block font-mono text-xs text-muted mb-2 uppercase tracking-wider">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Sparxie"
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs text-muted mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Sparxie@hoyoverse.com"
                className="input-field"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block font-mono text-xs text-muted mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="input-field resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`neon-btn px-8 py-3 rounded-lg font-mono text-sm flex items-center gap-2 transition-all w-full sm:w-auto justify-center ${
              isSuccess ? "bg-green-500/10 text-green-400 border-green-500/50 pointer-events-none" : "text-cyan hover:scale-105"
            } ${isSubmitting ? "opacity-50 pointer-events-none" : ""}`}
          >
            {isSubmitting ? (
              "Transmitting..."
            ) : isSuccess ? (
              <>
                <CheckCircle2 size={16} /> Message Sent
              </>
            ) : (
              <>
                <Send size={14} /> Send Message
              </>
            )}
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
            <span className="text-cyan/30">&copy;</span> {new Date().getFullYear()} Shiki. All systems operational.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}