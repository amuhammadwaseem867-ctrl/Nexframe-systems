"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{
        opacity: 0,
        y: 30,
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
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="project-card-image">
        <img
          src={project.image}
          alt={project.title}
        />

        <div className="project-card-overlay" />

        <span className="project-card-category">
          {project.category}
        </span>

        <span className="project-card-arrow">
          <ArrowUpRight
            size={20}
            strokeWidth={1.6}
          />
        </span>
      </div>

      <div className="project-card-content">
        <h4>{project.title}</h4>

        <p>{project.description}</p>

        <span className="project-card-link">
          View Project
          <ArrowUpRight size={15} />
        </span>
      </div>
    </motion.article>
  );
}