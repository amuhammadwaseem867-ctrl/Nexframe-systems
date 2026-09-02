"use client";

import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

const productLinks = [
  "Residential Windows & Doors",
  "Commercial Windows & Doors",
  "Casement Windows",
  "Curtain Wall Systems",
  "Folding Door Systems",
  "Sliding Door Systems",
  "Window Wall Systems",
];

const companyLinks = [
  "About Us",
  "Quality Control",
  "Manufacturing Process",
  "OEM & Custom Solutions",
  "Factory Tour",
  "FAQ",
];

const resourceLinks = [
  "Product Catalog",
  "Certifications",
  "Technical Documents",
  "Request a Quote",
  "Contact Us",
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <button
              type="button"
              className="footer-logo"
              onClick={scrollTop}
              aria-label="Back to top"
            >
              <span className="footer-logo-mark">
                N
              </span>

              <span className="footer-logo-text">
                NEXFRAME
                <small>SYSTEMS</small>
              </span>
            </button>

            <p>
              Premium aluminum window and door systems
              for residential and commercial projects.
            </p>

            <a
              href="#quote"
              className="footer-quote-link"
            >
              Start Your Project
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Products */}
          <div className="footer-column">
            <h3>Products</h3>

            <ul>
              {productLinks.map((item) => (
                <li key={item}>
                  <a href="#products">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>

            <ul>
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#about">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h3>Resources</h3>

            <ul>
              {resourceLinks.map((item) => (
                <li key={item}>
                  <a href="#contact">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Nexframe Systems.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>
          </div>

          <button
            type="button"
            className="footer-back-top"
            onClick={scrollTop}
          >
            BACK TO TOP
            <span>↑</span>
          </button>

        </div>

      </div>
    </footer>
  );
}