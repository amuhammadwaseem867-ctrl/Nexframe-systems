"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import QuoteForm from "./QuoteForm";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">
            CONTACT US
          </span>

          <h2>
            Let's Talk
            <span>About Your Project.</span>
          </h2>

          <p className="contact-intro">
            Tell us about your project and our team will
            help you find the right aluminum window and
            door solution.
          </p>

          <div className="contact-info">

            <a
              href="mailto:info@nexframsystems.com"
              className="contact-info-item"
            >
              <div className="contact-info-icon">
                <Mail size={17} strokeWidth={1.5} />
              </div>

              <div>
                <small>Email</small>
                <strong>info@nexframsystems.com</strong>
              </div>
            </a>

            <a
              href="tel:+10000000000"
              className="contact-info-item"
            >
              <div className="contact-info-icon">
                <Phone size={17} strokeWidth={1.5} />
              </div>

              <div>
                <small>Phone</small>
                <strong>+1 000 000 0000</strong>
              </div>
            </a>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={17} strokeWidth={1.5} />
              </div>

              <div>
                <small>Location</small>
                <strong>Global Project Support</strong>
              </div>
            </div>

          </div>

          <a href="#quote" className="contact-link">
            Start Your Project

            <span>
              <ArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="contact-right"
          id="quote"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="contact-form-header">
            <div>
              <span>PROJECT ENQUIRY</span>
              <h3>Request a Quote</h3>
            </div>

            <span className="contact-form-number">
              01
            </span>
          </div>

          <QuoteForm />
        </motion.div>

      </div>
    </section>
  );
}