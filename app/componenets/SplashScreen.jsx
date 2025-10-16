"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const SplashScreen = ({ onAnimationComplete }) => {
  // loading progress state (0-100)
  const [progress, setProgress] = useState(0);
  const progressMv = useMotionValue(0);
  const progressSpring = useSpring(progressMv, { stiffness: 120, damping: 20 });

  useEffect(() => {
    // animate progress deterministically over 3000ms
    let rafId;
    const start = performance.now();
    const duration = 3000; // 3 seconds target for the progress animation

    const tick = (now) => {
      const elapsed = Math.min(now - start, duration);
      const pct = Math.round((elapsed / duration) * 100);
      setProgress(pct);
      if (elapsed < duration) rafId = requestAnimationFrame(tick);
      else {
        setProgress(100);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // keep motion value in sync with progress state
  useEffect(() => {
    progressMv.set(progress);
  }, [progress, progressMv]);

  // transform spring value to a percent width MotionValue
  const widthMv = useTransform(progressSpring, (v) => `${v}%`);

  // call onAnimationComplete once when progress reaches 100
  const finishedRef = useRef(false);
  const startRef = useRef(Date.now());
  useEffect(() => {
    if (progress >= 100 && !finishedRef.current) {
      finishedRef.current = true;
      const elapsed = Date.now() - startRef.current;
      const minDuration = 3000; // 3 seconds
      const remaining = Math.max(0, minDuration - elapsed);
      const t = setTimeout(() => onAnimationComplete(), remaining + 300); // keep small fade delay
      return () => clearTimeout(t);
    }
  }, [progress, onAnimationComplete]);

  const textVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: "0vh",
      opacity: 1,
      transition: { duration: 1, ease: "circOut" },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 1, ease: "circIn" },
    },
  };

  const barBg = "bg-white/10";
  const barFill = progressSpring;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#111111]"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.5, delay: 0.5 } },
      }}
    >
      <motion.h1
        className="text-white font-sora text-6xl md:text-8xl font-bold"
        variants={textVariants}
      >
        PORTFOLIO
      </motion.h1>
      {/* Progress bar below title */}
      <motion.div
        className="absolute bottom-1/3 w-2/3 md:w-1/3 h-2 rounded-full overflow-hidden"
        style={{ marginTop: 24 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={`w-full h-full ${barBg}`}>
          <motion.div
            className="h-full bg-white"
            style={{ width: widthMv, opacity: 0.92 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
