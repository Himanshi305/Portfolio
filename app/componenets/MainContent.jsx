"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "../hooks/useLenis";
import { useRef } from "react";
import HeroSection from "./HeroSection";
import Content from "./content";
import ProjectPreview from "./ProjectPreview";
import Project from "./project";

const MainContent = () => {
  const containerRef = useRef(null);
  useLenis(); 

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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

  return (
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
  );
};

export default MainContent;
