"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const faqs = [
  {
    question: "What types of aluminum windows and doors do you offer?",
    answer:
      "We offer a range of aluminum window and door systems for residential, commercial, and architectural applications, including casement, sliding, folding, curtain wall, and window wall systems.",
  },
  {
    question: "Can you provide custom aluminum window and door solutions?",
    answer:
      "Yes. Our solutions can be configured around project requirements, dimensions, finishes, performance specifications, and other application-specific needs.",
  },
  {
    question: "Do you work with builders, architects, and developers?",
    answer:
      "Yes. We support builders, architects, developers, contractors, and window professionals with product information, project support, and customized aluminum solutions.",
  },
  {
    question: "Do you provide technical documentation?",
    answer:
      "Technical documentation, product information, specifications, and supporting materials can be provided based on the selected system and project requirements.",
  },
  {
    question: "Do you offer OEM and custom manufacturing?",
    answer:
      "We provide OEM and custom solution support for projects that require specific configurations, designs, dimensions, or production requirements.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can submit your project requirements through our Request a Quote form. Our team can then review the details and follow up regarding your project needs.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">

        <motion.div
          className="faq-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>FREQUENTLY ASKED QUESTIONS</span>

          <h2>
            Questions?
            <strong>We Have Answers.</strong>
          </h2>

          <p>
            Find answers to common questions about our
            aluminum window and door systems, customization,
            technical support, and projects.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                className={`faq-item ${
                  isOpen ? "faq-item-open" : ""
                }`}
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>
                  </div>

                  <span className="faq-icon">
                    <ChevronDown size={20} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}