"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const residentialProjects = [
  {
    title: "Paragon Apartments, Sydney",
    category: "RESIDENTIAL",
    description:
      "A contemporary residential project featuring premium aluminum window and door systems.",
    image:
      "/projects/Paragon Apartments, Sydney Project Reference.png",
  },
];

const commercialProjects = [
  {
    title: "IKA Hotel Angola",
    category: "COMMERCIAL",
    description:
      "Hotel project reference showcasing architectural aluminum systems for a large-scale development.",
    image:
      "/projects/IKA Hotel Angola project reference.png",
  },
  {
    title: "M-Peace Plaza",
    category: "COMMERCIAL",
    description:
      "Large-scale commercial architecture incorporating modern aluminum and glazing solutions.",
    image:
      "/projects/M-Peace Plaza project reference.png",
  },
  {
    title: "Oxford Street Commercial Project",
    category: "COMMERCIAL",
    description:
      "Commercial project reference demonstrating contemporary facade and window system applications.",
    image:
      "/projects/Oxford Street Commercial Project.png",
  },
  {
    title: "Prism Tower",
    category: "COMMERCIAL",
    description:
      "Modern architectural development featuring aluminum facade and glazing applications.",
    image:
      "/projects/Prism Tower with bright ivory panel.png",
  },
];

const categories = [
  {
    number: "01",
    label: "RESIDENTIAL",
    title: "Residential Projects",
    description:
      "Refined aluminum systems for modern homes, villas, and architectural residences.",
    projects: residentialProjects,
  },
  {
    number: "02",
    label: "COMMERCIAL",
    title: "Commercial Projects",
    description:
      "High-performance systems engineered for commercial buildings and architectural developments.",
    projects: commercialProjects,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* SECTION INTRO */}

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="projects-heading-top">
            <span className="projects-label">
              OUR PROJECTS
            </span>

            <span className="projects-heading-index">
              02 / 04
            </span>
          </div>

          <div className="projects-heading-main">
            <h2>
              Proven in Projects.
              <span>Trusted by Professionals.</span>
            </h2>

            <div className="projects-heading-side">
              <p>
                From custom residences to large-scale commercial
                developments, our aluminum systems are designed
                around real project requirements.
              </p>

              <a
                href="#contact"
                className="projects-heading-link"
              >
                <span>Discuss Your Project</span>

                <span className="projects-heading-link-icon">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                  />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* PROJECT CATEGORIES */}

        <div className="projects-list">
          {categories.map((category, categoryIndex) => (
            <motion.div
              className="projects-category"
              key={category.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: categoryIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* CATEGORY HEADER */}

              <div className="projects-category-heading">

                <div className="projects-category-number">
                  <span>{category.number}</span>
                  <div />
                </div>

                <div className="projects-category-title">
                  <span>
                    {category.label}
                  </span>

                  <h3>
                    {category.title}
                  </h3>
                </div>

                <p>
                  {category.description}
                </p>

                <span className="projects-category-arrow">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.6}
                  />
                </span>

              </div>

              {/* PROJECT CARDS */}

              <div className="projects-grid">
                {category.projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                  />
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}