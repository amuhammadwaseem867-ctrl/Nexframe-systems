"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Factory,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";
import "./About.css";

const aboutItems = [
  {
    number: "01",
    icon: Building2,
    title: "Company Profile",
    text: "A focused aluminum systems partner supporting residential, commercial, and architectural projects.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Quality Control",
    text: "Quality-focused processes designed to maintain consistency across materials, production, and finished systems.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Manufacturing Process",
    text: "A structured production approach built around precision, efficiency, and dependable project delivery.",
  },
  {
    number: "04",
    icon: SlidersHorizontal,
    title: "OEM & Custom Solutions",
    text: "Flexible manufacturing support for project-specific configurations, dimensions, finishes, and requirements.",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-label">
            ABOUT NEXFRAME SYSTEMS
          </span>

          <h2>
            Built for Better
            <span>Window & Door Solutions.</span>
          </h2>

          <p>
            We provide aluminum window and door systems for
            professionals who need dependable products,
            flexible solutions, and support throughout their
            projects.
          </p>

          <a href="#contact" className="about-button">
            Learn More About Us
            <ArrowRight size={17} />
          </a>
        </motion.div>

        <div className="about-grid">
          {aboutItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="about-card"
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="about-card-top">
                  <span>{item.number}</span>

                  <div className="about-card-icon">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="about-card-line" />
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}