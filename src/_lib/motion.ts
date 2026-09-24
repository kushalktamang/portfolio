import { type Variants, stagger } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: stagger(0.1, { startDelay: 0.05 }) } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const containerDense: Variants = {
  hidden: {},
  show: { transition: { delayChildren: stagger(0.05, { startDelay: 0.05 }) } },
};

export { EASE, container, fadeUp, containerDense };
