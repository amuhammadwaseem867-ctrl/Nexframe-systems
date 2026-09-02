"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              delay: 1.25,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <div className="preloader-bg" />

          <div className="preloader-grid" />

          {/* TOP BRAND */}
          <div className="preloader-top">
            <span>NEXFRAME</span>
            <span>SYSTEMS</span>
          </div>

          {/* ARCHITECTURAL FRAME */}
          <div className="architectural-frame">

            {/* FRAME TOP */}
            <motion.div
              className="frame-top"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* FRAME RIGHT */}
            <motion.div
              className="frame-right"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* FRAME BOTTOM */}
            <motion.div
              className="frame-bottom"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.45,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* FRAME LEFT */}
            <motion.div
              className="frame-left"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.95,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* INTERNAL MULLION */}
            <motion.div
              className="frame-mullion"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.65,
                delay: 1.1,
                ease: [0.76, 0, 0.24, 1],
              }}
            />

            {/* GLASS */}
            <motion.div
              className="frame-glass"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1.75,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* LIGHT SWEEP */}
            <motion.div
              className="frame-light"
              initial={{
                x: "-120%",
              }}
              animate={{
                x: "120%",
              }}
              transition={{
                duration: 0.9,
                delay: 2.2,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          </div>

          {/* BRAND BELOW FRAME */}
          <motion.div
            className="frame-brand"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 2.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <strong>NEXFRAME</strong>

            <span>SYSTEMS</span>
          </motion.div>

          {/* BOTTOM TAGLINE */}
          <motion.div
            className="preloader-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.45,
              duration: 0.6,
            }}
          >
            ENGINEERED FOR MODERN ARCHITECTURE
          </motion.div>

          {/* EXIT LINE */}
          <motion.div
            className="preloader-exit"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 2.85,
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}