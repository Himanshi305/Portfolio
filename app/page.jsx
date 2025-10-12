"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { useRef, useState, useEffect } from "react";
import Content from "./componenets/content";
import Project from "./componenets/project";
import ProjectPreview from "./componenets/ProjectPreview";
import Lanyard from "./componenets/ui/Lanyard";
import ContactBox from "./componenets/ContactBox";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

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
        {/* Header Section */}
        <div className="flex ">
          <div className="left w-1/3 ">
            <motion.header
              className="mb-12 "
              variants={headerVariants}
              style={{ y: headerY }}
            >
              <div className="flex flex-col md:flex-row items-start justify-between ">
                <motion.h1
                  className="md:text-8xl text-6xl font-bold text-white leading-none font-sora"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  PORTFOLIO
                </motion.h1>
              </div>
            </motion.header>

            {/* Main Content */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 "
              variants={containerVariants}
              style={{ y: contentY }}
            >
              {/* Left Column - Introduction */}
              <motion.div className="space-y-8" variants={itemVariants}>
                <div className="flex items-start space-x-6 ">
                  <div className="w-25 h-55 rounded-full flex items-center justify-center shadow-lg pt-20">
                    <Lanyard />
                  </div>
                  <div className="flex-1 border border-white/20 p-6 rounded-lg bg-gray-700 opacity-60">
                    <motion.h2
                      className="text-4xl font-bold text-white mb-4 font-sora"
                      variants={itemVariants}
                    >
                      HEYO!
                    </motion.h2>
                    <motion.span
                      className="text-gray-300 leading-relaxed font-siri"
                      variants={itemVariants}
                    >
                      <span>
                        You can find my work experience below where I have
                        worked with:
                      </span>
                      <ul className="flex gap-5 pt-5">
                        <li>
                          <a
                            href="https://nodejs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Node.js"
                            className="text-green-300 hover:text-gray-400 transition-colors"
                          >
                            <FaNodeJs size={24} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="React"
                            className="text-blue-500 hover:text-gray-400 transition-colors"
                          >
                            <FaReact size={24} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.mongodb.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="MongoDB"
                            className="text-green-500 hover:text-gray-400 transition-colors"
                          >
                            <SiMongodb size={24} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="JavaScript"
                            className="text-yellow-500 hover:text-gray-400 transition-colors"
                          >
                            <SiJavascript size={24} />
                          </a>
                        </li>
                      </ul>
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="right w-1/1 flex justify-end pt-35 pb-20">
            <div className="text-right border border-white/20 w-180 h-65 p-8 pt-5 rounded-lg bg-gray-700 opacity-60">
              <div className="flex justify-end space-x-9 mb-4">
                <a
                  href="https://github.com/Himanshi305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshi-gupta3005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://discord.com/users/1242544103586267228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  <FaDiscord size={20} />
                </a>
              </div>
              <a
                href="mailto:himanshigupta3005@gmail.com"
                className="inline-flex items-center space-x-2 border border-white/20 rounded-full px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors mb-10"
              >
                <FaEnvelope />
                <span>Mail me</span>
              </a>
              <p className="text-sm text-gray-400 max-w-[280px] mx-auto">
                I am a Full Stack Developer and I love solving problems, and
                making things feel right.
              </p>
              <div>
                <h3 className="text-lg font-bold text-white mb-4 font-sora text-right">
                  FREELANCER
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Content />
        <ProjectPreview />
        <Project />
      </motion.div>
    </div>
  );
}
