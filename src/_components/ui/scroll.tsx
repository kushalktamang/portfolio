"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

const ResizeOnLoad = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis !== null && lenis !== undefined) {
      const handle = () => lenis.resize();

      window.addEventListener("load", handle);
      const ro = new ResizeObserver(handle);
      ro.observe(document.body);

      return () => {
        window.removeEventListener("load", handle);
        ro.disconnect();
      };
    }
    return undefined;
  }, [lenis]);

  return null;
};

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      <ResizeOnLoad />
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
