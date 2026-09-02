"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-background" />

      <div className="hero-overlay" />

      <div className="hero-grid" />

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="hero-eyebrow">
            <span />
            PREMIUM ALUMINUM SYSTEMS
          </div>

          <h1>
            Engineered for
            <span>Modern Architecture.</span>
          </h1>

          <p>
            High-performance aluminum windows and doors
            designed to bring durability, precision and
            refined architectural aesthetics to residential
            and commercial projects.
          </p>

          <div className="hero-actions">

            <a
              href="#products"
              className="hero-primary-button"
            >
              Explore Our Systems
              <ArrowRight size={17} />
            </a>

            <a
              href="#factory"
              className="hero-secondary-button"
            >
              <span className="hero-play-icon">
                <Play size={13} fill="currentColor" />
              </span>

              Explore Our Factory
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
        >

          <div className="hero-bottom-item">
            <span>01</span>
            <div>
              <strong>Precision</strong>
              <small>Engineered Systems</small>
            </div>
          </div>

          <div className="hero-bottom-item">
            <span>02</span>
            <div>
              <strong>Performance</strong>
              <small>Built to Last</small>
            </div>
          </div>

          <div className="hero-bottom-item">
            <span>03</span>
            <div>
              <strong>Customization</strong>
              <small>Project Solutions</small>
            </div>
          </div>

          <div className="hero-bottom-item">
            <span>04</span>
            <div>
              <strong>Support</strong>
              <small>From Design to Delivery</small>
            </div>
          </div>

        </motion.div>

      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="hero-scroll-line" />
      </div>

    </section>
  );
}