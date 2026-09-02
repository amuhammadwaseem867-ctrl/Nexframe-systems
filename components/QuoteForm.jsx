"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import "./QuoteForm.css";

const projectTypes = [
  "Residential",
  "Commercial",
  "Curtain Wall",
  "Storefront",
  "Window Wall",
  "Sliding / Folding Doors",
  "Other",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Not decided yet",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <section className="quote-form-section" id="quote">
      <div className="quote-form-container">

        {/* ========================================
            INTRO
        ======================================== */}

        <motion.div
          className="quote-form-intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="quote-form-intro-top">
            <span className="quote-form-label">
              REQUEST A QUOTE
            </span>

            <span className="quote-form-index">
              04 / 04
            </span>
          </div>

          <div className="quote-form-intro-main">
            <div>
              <h2>
                Let's Build
                <span>Something Exceptional.</span>
              </h2>
            </div>

            <div className="quote-form-intro-side">
              <p>
                Tell us about your project and our team will
                help you identify the right aluminum systems,
                configurations, and solutions for your needs.
              </p>

              <div className="quote-form-intro-meta">
                <div>
                  <span>01</span>
                  <strong>Project Review</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>System Recommendation</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Quotation</strong>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================
            FORM
        ======================================== */}

        <motion.div
          className="quote-form-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {submitted ? (
            <div className="quote-success">
              <div className="quote-success-icon">
                <CheckCircle2
                  size={32}
                  strokeWidth={1.5}
                />
              </div>

              <span className="quote-success-label">
                REQUEST RECEIVED
              </span>

              <h3>
                Thank You.
                <span>We'll Be in Touch.</span>
              </h3>

              <p>
                Your project information has been received.
                Our team will review your requirements and
                contact you shortly.
              </p>

              <button
                type="button"
                className="quote-success-button"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
                <ArrowUpRight size={17} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              {/* ========================================
                  PERSONAL DETAILS
              ======================================== */}

              <div className="quote-form-section-heading">
                <div className="quote-form-section-number">
                  01
                </div>

                <div>
                  <span>YOUR DETAILS</span>
                  <h3>Tell Us About Yourself</h3>
                </div>
              </div>

              <div className="quote-form-grid">

                <div className="quote-field">
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 000 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* ========================================
                  PROJECT DETAILS
              ======================================== */}

              <div className="quote-form-section-heading quote-project-heading">
                <div className="quote-form-section-number">
                  02
                </div>

                <div>
                  <span>PROJECT DETAILS</span>
                  <h3>Tell Us About Your Project</h3>
                </div>
              </div>

              <div className="quote-form-grid">

                <div className="quote-field">
                  <label htmlFor="projectType">
                    Project Type <span>*</span>
                  </label>

                  <div className="quote-select-wrap">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select project type
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>

                    <ChevronDown size={17} />
                  </div>
                </div>

                <div className="quote-field">
                  <label htmlFor="location">
                    Project Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City / Country"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="quote-field quote-field-full">
                  <label htmlFor="budget">
                    Estimated Project Budget
                  </label>

                  <div className="quote-select-wrap">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select budget range
                      </option>

                      {budgetRanges.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                        >
                          {budget}
                        </option>
                      ))}
                    </select>

                    <ChevronDown size={17} />
                  </div>
                </div>

                <div className="quote-field quote-field-full">
                  <label htmlFor="message">
                    Project Requirements <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell us about your project, required systems, approximate quantities, timeline, or any other requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              {/* ========================================
                  SUBMIT
              ======================================== */}

              <div className="quote-form-bottom">
                <p>
                  By submitting this form, you agree to be
                  contacted regarding your project enquiry.
                </p>

                <button
                  type="submit"
                  className="quote-submit"
                >
                  <span>Request My Quote</span>

                  <span className="quote-submit-icon">
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.6}
                    />
                  </span>
                </button>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}