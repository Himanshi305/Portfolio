"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { useRef, useState, useEffect } from "react";
import Content from "./componenets/content";
import Project from "./componenets/project";
import ProjectPreview from "./componenets/ProjectPreview";
import HeroSection from "./componenets/HeroSection";

export default function Home() {
  const lenis = useLenis();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Parallax transforms
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="">
      <motion.div
        ref={containerRef}
        className="min-h-screen bg-[#111111] p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroSection />
        <Content />
        <ProjectPreview />
        <Project />
      </motion.div>
    </div>
  );
}
