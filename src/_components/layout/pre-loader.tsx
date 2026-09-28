"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);

  // Lock scroll while preloader is active
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, []);

  // Unlock scroll + fire onComplete as soon as visible flips false
  useEffect(() => {
    if (!visible) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      onComplete?.();
    }
  }, [visible, onComplete]);

  // Safety: always unlock on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Smooth counter: ticks +1 every 25ms → 0→100 in ~2.5s
  useEffect(() => {
    if (!visible) return undefined;

    const timeout = window.setTimeout(() => setVisible(false), 2700);

    return () => window.clearTimeout(timeout);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0a0a0a]"
          initial={false}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <svg
            className="size-16"
            fill="hsl(228, 97%, 42%)"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="status"
            aria-label="Loading"
          >
            <circle cx="4" cy="12" r="3" style={{ fill: "var(--custom-blue)" }}>
              <animate
                id="spinner_qFRN"
                begin="0;spinner_OcgL.end+0.25s"
                attributeName="cy"
                calcMode="spline"
                dur="0.6s"
                values="12;6;12"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
              />
            </circle>
            <circle cx="12" cy="12" r="3" style={{ fill: "var(--custom-red)" }}>
              <animate
                begin="spinner_qFRN.begin+0.1s"
                attributeName="cy"
                calcMode="spline"
                dur="0.6s"
                values="12;6;12"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
              />
            </circle>
            <circle cx="20" cy="12" r="3" style={{ fill: "var(--custom-pink)" }}>
              <animate
                id="spinner_OcgL"
                begin="spinner_qFRN.begin+0.2s"
                attributeName="cy"
                calcMode="spline"
                dur="0.6s"
                values="12;6;12"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
              />
            </circle>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
