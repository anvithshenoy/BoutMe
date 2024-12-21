"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
        }}
        className="relative flex h-full w-full flex-col items-center justify-center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
