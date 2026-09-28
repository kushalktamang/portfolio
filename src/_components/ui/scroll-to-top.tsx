"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash !== null) {
      const id = hash.slice(1);
      const element = document.getElementById(id);

      if (element !== null) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);

        return () => clearTimeout(timer);
      }

      return undefined;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return undefined;
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToTop;
