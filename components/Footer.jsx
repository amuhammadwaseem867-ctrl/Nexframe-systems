import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import "./Footer.css";

const footerLinks = {
  Products: [
    "Residential Windows",
    "Commercial Systems",
    "Curtain Wall Systems",
    "Storefront Systems",
    "Sliding & Folding Doors",
  ],
  Company: [
    "About Us",
    "Projects",
    "Resources",
    "Factory Tour",
    "Contact",
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="footer-logo-mark">N</span>

            <span className="footer-logo-text">
              NEXFRAME
              <small>SYSTEMS</small>
            </span>
          </Link>

          <p className="footer-description">
            High-performance aluminum windows and doors
            engineered for modern residential and
            commercial architecture.
          </p>

          <a href="#quote" className="footer-quote-link">
            Request a Quote
            <span>
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </span>
          </a>
        </div>

        {/* Products */}
        <div className="footer-column">
          <span className="footer-heading">Products</span>

          <nav className="footer-links">
            {footerLinks.Products.map((item) => (
              <a
                href="#products"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Company */}
        <div className="footer-column">
          <span className="footer-heading">Company</span>

          <nav className="footer-links">
            {footerLinks.Company.map((item) => (
              <a
                href={
                  item === "About Us"
                    ? "#about"
                    : item === "Projects"
                    ? "#projects"
                    : item === "Resources"
                    ? "#resources"
                    : item === "Factory Tour"
                    ? "#factory"
                    : "#contact"
                }
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <span className="footer-heading">Contact</span>

          <a
            href="mailto:info@nexframsystems.com"
            className="footer-contact-item"
          >
            <span className="footer-contact-icon">
              <Mail size={15} strokeWidth={1.5} />
            </span>

            <span>
              info@nexframesystems.com
            </span>
          </a>

          <a
            href="tel:+10000000000"
            className="footer-contact-item"
          >
            <span className="footer-contact-icon">
              <Phone size={15} strokeWidth={1.5} />
            </span>

            <span>
              +1 000 000 0000
            </span>
          </a>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <MapPin size={15} strokeWidth={1.5} />
            </span>

            <span>
              Global Project Support
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Nexfram Systems.
          All rights reserved.
        </div>

        <div className="footer-credit">
          <span>Website Designed & Developed by</span>

          <a
            href="https://www.wacreativesolution.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            WA Creative Solutions
          </a>

          <span className="footer-credit-separator">·</span>

          <a
            href="https://www.wacreativesolution.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.wacreativesolution.com
          </a>
        </div>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}