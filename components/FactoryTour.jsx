"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  Play,
} from "lucide-react";
import "./FactoryTour.css";

const factoryImages = [
  {
    image: "/Factorytour/NexFrame production network overview.png",
    title: "Production Network",
    label: "MANUFACTURING",
  },
  {
    image: "/Factorytour/NexFrame vertical powder-coating network.png",
    title: "Powder-Coating Network",
    label: "FINISHING",
  },
  {
    image: "/Factorytour/Technical expertise section.png",
    title: "Technical Expertise",
    label: "ENGINEERING",
  },
  {
    image: "/Factorytour/Verified scalable manufacturing capacity.png",
    title: "Scalable Manufacturing",
    label: "CAPACITY",
  },
  {
    image: "/Factorytour/Material Testing Equipment Gallery.png",
    title: "Material Testing",
    label: "QUALITY CONTROL",
  },
];

export default function FactoryTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = () => {
    setCurrentImage(0);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === factoryImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? factoryImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <section className="factory-tour" id="factory">
        <div className="factory-tour-container">

          <motion.div
            className="factory-tour-image"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1564182842834-681b7be6de4b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern manufacturing facility"
            />

            <div className="factory-tour-image-overlay" />

            <button
              type="button"
              className="factory-tour-play"
              onClick={openGallery}
              aria-label="Open factory gallery"
            >
              <Play size={18} fill="currentColor" />
            </button>

            <span className="factory-tour-image-label">
              MANUFACTURING FACILITY
            </span>
          </motion.div>

          <motion.div
            className="factory-tour-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="factory-tour-label">
              FACTORY TOUR
            </span>

            <h2>
              See How
              <span>Quality Is Made.</span>
            </h2>

            <p>
              Take a closer look at our manufacturing environment,
              production capabilities, quality control processes,
              and the people behind every aluminum window and door
              system.
            </p>

            <div className="factory-tour-points">
              <div>
                <strong>01</strong>
                <span>Modern Manufacturing</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Quality Control</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Production Capability</span>
              </div>
            </div>

            <button
              type="button"
              className="factory-tour-button"
              onClick={openGallery}
            >
              Explore Our Factory
              <ArrowUpRight size={17} />
            </button>
          </motion.div>

        </div>
      </section>

      {/* FACTORY GALLERY MODAL */}

      {isOpen && (
        <div
          className="factory-gallery"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="factory-gallery-backdrop"
            onClick={closeGallery}
          />

          <button
            type="button"
            className="factory-gallery-close"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          <div className="factory-gallery-content">

            <div className="factory-gallery-top">
              <span>FACTORY TOUR</span>

              <div>
                {String(currentImage + 1).padStart(2, "0")}
                {" / "}
                {String(factoryImages.length).padStart(2, "0")}
              </div>
            </div>

            <div className="factory-gallery-image-wrap">
              <img
                src={factoryImages[currentImage].image}
                alt={factoryImages[currentImage].title}
              />

              <button
                type="button"
                className="factory-gallery-prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <ArrowLeft size={22} />
              </button>

              <button
                type="button"
                className="factory-gallery-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ArrowRight size={22} />
              </button>
            </div>

            <div className="factory-gallery-info">
              <div>
                <span>
                  {factoryImages[currentImage].label}
                </span>

                <h3>
                  {factoryImages[currentImage].title}
                </h3>
              </div>

              <div className="factory-gallery-dots">
                {factoryImages.map((item, index) => (
                  <button
                    key={item.image}
                    type="button"
                    className={
                      index === currentImage
                        ? "active"
                        : ""
                    }
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Open image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}