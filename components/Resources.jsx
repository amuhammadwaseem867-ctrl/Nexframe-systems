"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Award,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import "./Resources.css";

const resources = [
  {
    number: "01",
    icon: BookOpen,
    title: "Product Catalog",
    text: "Explore our aluminum window and door systems, applications, and available solutions.",
    action: "View Catalog",
    link: "/certificatesandwaranties/Aluminum Projects.pdf",
  },
  {
    number: "02",
    icon: Award,
    title: "Certifications",
    text: "Review certifications and performance standards supporting our product systems.",
    action: "View Certifications",
    link: "/certificatesandwaranties/Aluminium Profile powder Coating Quality Certificate.pdf",
  },
  {
    number: "03",
    icon: FileText,
    title: "Technical Documents",
    text: "Access technical information, specifications, and supporting project documentation.",
    action: "View Documents",
    link: "/certificatesandwaranties/SGS Test Report.pdf",
  },
];

export default function Resources() {
  return (
    <section className="resources" id="resources">
      <div className="resources-container">

        <motion.div
          className="resources-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="resources-label">
              RESOURCES
            </span>

            <h2>
              Everything You Need
              <span>to Specify With Confidence.</span>
            </h2>
          </div>

          <p>
            Find product information, certifications, and
            technical documentation to help you plan and
            specify your next project.
          </p>
        </motion.div>

        <div className="resources-grid">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.article
                className="resource-card"
                key={resource.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="resource-card-top">
                  <span>{resource.number}</span>

                  <div className="resource-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                </div>

                <h3>{resource.title}</h3>

                <p>{resource.text}</p>

                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.action}
                  <ArrowUpRight size={17} />
                </a>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}