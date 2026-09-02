"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Headphones,
  ArrowUpRight,
} from "lucide-react";
import "./WhyPartner.css";

const benefits = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Reliable aluminum systems manufactured with attention to material quality, precision and long-term performance.",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Custom Solutions",
    description:
      "Flexible configurations and project-specific solutions designed around architectural requirements.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Dependable Supply",
    description:
      "A production approach focused on consistency, coordination and dependable project delivery.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Project Support",
    description:
      "Support throughout product selection, technical requirements and project coordination.",
  },
];

export default function WhyPartner() {
  return (
    <section className="why-partner" id="why-us">

      <div className="why-partner-container">

        <motion.div
          className="why-partner-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="why-partner-label">
            <span />
            WHY PARTNER WITH US
          </div>

          <h2>
            Built Around
            <strong>Your Project.</strong>
          </h2>

          <p>
            From product selection to project delivery,
            we focus on the details that matter to
            architects, builders, developers and
            homeowners.
          </p>

          <a
            href="#about"
            className="why-partner-link"
          >
            Discover Nexfram
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="why-partner-grid">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                className="why-partner-card"
                key={benefit.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="why-partner-card-top">
                  <span className="why-partner-number">
                    {benefit.number}
                  </span>

                  <div className="why-partner-icon">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="why-partner-card-content">
                  <h3>{benefit.title}</h3>

                  <p>
                    {benefit.description}
                  </p>
                </div>

                <div className="why-partner-card-line" />
              </motion.article>
            );
          })}

        </div>

      </div>

      <div className="why-partner-watermark">
        NEXFRAM
      </div>

    </section>
  );
}