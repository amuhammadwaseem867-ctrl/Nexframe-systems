"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import "./Navbar.css";

const navItems = [
  {
    label: "Products",
    dropdown: [
      {
        label: "All Products",
        href: "#products",
      },
      {
        label: "Windows",
        href: "#products",
      },
      {
        label: "Doors",
        href: "#products",
      },
      {
        label: "Curtain Wall Systems",
        href: "#products",
      },
      {
        label: "Storefront Systems",
        href: "#products",
      },
    ],
  },
  {
    label: "Projects",
    dropdown: [
      {
        label: "All Projects",
        href: "#projects",
      },
      {
        label: "Residential",
        href: "#projects",
      },
      {
        label: "Commercial",
        href: "#projects",
      },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      {
        label: "Product Catalog",
        href: "#resources",
      },
      {
        label: "Certifications",
        href: "#certifications",
      },
      {
        label: "Technical Documents",
        href: "#resources",
      },
    ],
  },
  {
    label: "About Us",
    dropdown: [
      {
        label: "About Nexframe",
        href: "#about",
      },
      {
        label: "Factory Tour",
        href: "#factory",
      },
      {
        label: "FAQ",
        href: "#faq",
      },
    ],
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick
      );
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdown = (label, event) => {
    event.stopPropagation();

    setActiveDropdown(
      activeDropdown === label ? null : label
    );
  };

  const closeNavigation = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">

        {/* ========================================
            LOGO
        ======================================== */}

        <a
          href="#top"
          className="navbar-logo"
          onClick={closeNavigation}
        >
          <span className="navbar-logo-mark">
            N
          </span>

          <span className="navbar-logo-text">
            NEXFRAME
            <small>SYSTEMS</small>
          </span>
        </a>

        {/* ========================================
            DESKTOP NAVIGATION
        ======================================== */}

        <nav className="navbar-menu">

          {navItems.map((item) => (
            <div
              className={`navbar-item ${
                activeDropdown === item.label
                  ? "navbar-item-active"
                  : ""
              }`}
              key={item.label}
            >
              <button
                type="button"
                className="navbar-link"
                onClick={(event) =>
                  handleDropdown(
                    item.label,
                    event
                  )
                }
              >
                <span>{item.label}</span>

                <ChevronDown
                  size={14}
                  strokeWidth={1.7}
                  className="navbar-chevron"
                />
              </button>

              <div
                className={`navbar-dropdown ${
                  activeDropdown === item.label
                    ? "navbar-dropdown-open"
                    : ""
                }`}
              >
                <div className="navbar-dropdown-inner">

                  <span className="navbar-dropdown-label">
                    {item.label}
                  </span>

                  {item.dropdown.map(
                    (dropdownItem, index) => (
                      <a
                        href={dropdownItem.href}
                        key={dropdownItem.label}
                        onClick={closeNavigation}
                      >
                        <span>
                          <small>
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </small>

                          {dropdownItem.label}
                        </span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.6}
                        />
                      </a>
                    )
                  )}

                </div>
              </div>
            </div>
          ))}

        </nav>

        {/* ========================================
            DESKTOP QUOTE CTA
        ======================================== */}

        <a
          href="#quote"
          className="navbar-quote"
          onClick={closeNavigation}
        >
          <span>Request a Quote</span>

          <span className="navbar-quote-icon">
            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
            />
          </span>
        </a>

        {/* ========================================
            MOBILE BUTTON
        ======================================== */}

        <button
          type="button"
          className="navbar-mobile-toggle"
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setActiveDropdown(null);
          }}
        >
          {mobileOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>

      </div>

      {/* ========================================
          MOBILE NAVIGATION
      ======================================== */}

      <div
        className={`navbar-mobile ${
          mobileOpen
            ? "navbar-mobile-open"
            : ""
        }`}
      >
        <div className="navbar-mobile-inner">

          {navItems.map((item) => (
            <div
              className="navbar-mobile-item"
              key={item.label}
            >
              <button
                type="button"
                className="navbar-mobile-link"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === item.label
                      ? null
                      : item.label
                  )
                }
              >
                <span>{item.label}</span>

                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={
                    activeDropdown === item.label
                      ? "mobile-chevron-open"
                      : ""
                  }
                />
              </button>

              <div
                className={`navbar-mobile-dropdown ${
                  activeDropdown === item.label
                    ? "navbar-mobile-dropdown-open"
                    : ""
                }`}
              >
                {item.dropdown.map(
                  (dropdownItem) => (
                    <a
                      href={dropdownItem.href}
                      key={dropdownItem.label}
                      onClick={closeNavigation}
                    >
                      {dropdownItem.label}

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.6}
                      />
                    </a>
                  )
                )}
              </div>
            </div>
          ))}

          {/* MOBILE QUOTE */}

          <a
            href="#quote"
            className="navbar-mobile-quote"
            onClick={closeNavigation}
          >
            <span>Request a Quote</span>

            <ArrowUpRight
              size={19}
              strokeWidth={1.6}
            />
          </a>

        </div>
      </div>
    </header>
  );
}