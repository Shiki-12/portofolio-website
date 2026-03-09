"use client";

import { motion } from "framer-motion";
import { Monitor, Globe, Network } from "lucide-react";
import { type ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "PC & Hardware Repair",
    description:
      "Expert diagnostics, troubleshooting, and optimization for desktops and laptops. From component-level repairs to full system upgrades.",
    features: [
      "Hardware diagnostics",
      "Component replacement",
      "Performance optimization",
      "Data recovery",
    ],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Creating fast, modern, and API-driven websites using cutting-edge frameworks. Fully responsive and optimized for performance.",
    features: [
      "Next.js & React apps",
      "RESTful API integration",
      "Responsive UI/UX",
      "SEO optimization",
    ],
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Network & IT Setup",
    description:
      "Professional network infrastructure design, server configuration, and IT system management for small to medium enterprises.",
    features: [
      "Network architecture",
      "Server deployment",
      "Firewall & VPN setup",
      "System monitoring",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">{"// services"}</span>
          <h2 className="section-title mt-2">
            What I Do<span className="text-cyan">.</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl text-sm sm:text-base">
            Professional services spanning hardware, software, and
            infrastructure — delivering reliable solutions for every layer of
            technology.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group glass glow-border glow-border-hover rounded-xl p-6 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-cyan/5 border border-cyan/10 flex items-center justify-center text-cyan mb-5 group-hover:bg-cyan/10 group-hover:border-cyan/20 transition-all">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-mono text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground/60"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
