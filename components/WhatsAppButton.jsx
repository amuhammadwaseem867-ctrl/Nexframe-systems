"use client";

import { useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  CalendarDays,
  X,
} from "lucide-react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-contact">

      {/* Contact Options */}
      <div
        className={`floating-contact-menu ${
          open ? "floating-contact-menu-open" : ""
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/10000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-item"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href="tel:+10000000000"
          className="floating-contact-item"
          aria-label="Call"
        >
          <Phone size={18} />
          <span>Call</span>
        </a>

        {/* Email */}
        <a
          href="mailto:info@nexframsystems.com"
          className="floating-contact-item"
          aria-label="Email"
        >
          <Mail size={18} />
          <span>Email</span>
        </a>

        {/* Calendly */}
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-item"
          aria-label="Schedule a meeting"
        >
          <CalendarDays size={18} />
          <span>Calendly</span>
        </a>
      </div>

      {/* Main Contact Button */}
      <button
        type="button"
        className="floating-contact-button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close contact options" : "Open contact options"}
      >
        {open ? <X size={23} /> : <Phone size={22} />}
      </button>

    </div>
  );
}