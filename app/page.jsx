"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainContent from "./componenets/MainContent";
import HeroSection from "./componenets/HeroSection";
import Content from "./componenets/content";
import ProjectPreview from "./componenets/ProjectPreview";
import Project from "./componenets/project";
import Contact from "./componenets/Contact";

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <div className="">
  <HeroSection onReady={() => setHeroReady(true)} />
  {heroReady && <MainContent />}
  {heroReady && <Content />}
  {heroReady && <ProjectPreview />}
  {heroReady && <Project />}
  {heroReady && <Contact />}

    </div>
  );
}
