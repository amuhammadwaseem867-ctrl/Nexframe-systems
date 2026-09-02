"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./ProductCard.css";

const ProductCard = ({ product, index }) => {
  const Icon = ArrowUpRight;

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
    >
      <div className="product-card-image">
        <div className="product-card-placeholder">
          <span>PRODUCT IMAGE</span>
        </div>

        <div className="product-card-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="product-card-arrow">
          <Icon size={20} />
        </div>
      </div>

      <div className="product-card-content">
        <span className="product-card-category">
          ALUMINUM SYSTEM
        </span>

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <a href="#quote">
          Discuss This System
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
};

export default ProductCard;