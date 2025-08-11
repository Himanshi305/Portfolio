"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { useRef } from "react";
import Content from "./componenets/content";
import Project from "./componenets/project";
import Lanyard from "./componenets/ui/Lanyard";
import OnekoCat from "./componenets/OnekoCat";
import { GitCommitGraph } from "./componenets/gitcommits";

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
    <motion.div
      ref={containerRef}
      className="min-h-screen bg-[#111111] p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.header
        className="mb-12"
        variants={headerVariants}
        style={{ y: headerY }}
      >
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="relative">
            <motion.h1
              className="md:text-8xl text-7xl font-bold text-white leading-none font-sora"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              PORTFOLIO
            </motion.h1>
            <GitCommitGraph />
            <motion.span
              className="absolute -top-2 right-0 text-2xl text-gray-400"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              '20
            </motion.span>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {/* Avatar placeholder - you can replace with actual image */}
            <div className="relative w-32 md:w-90 h-12 md:h-38 flex items-center justify-center shadow-lg bg-gradient-to-br from-[#111111] to-gray-700 rounded-lg p-3 md:p-0 left-10/12 md:left-0">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={192}
                height={192}
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        variants={containerVariants}
        style={{ y: contentY }}
      >
        {/* Left Column - Introduction */}
        <motion.div className="space-y-8" variants={itemVariants}>
          <div className="flex items-start space-x-6">
            <div className="w-25 h-55 rounded-full flex items-center justify-center shadow-lg">
              <Lanyard />
            </div>
            <div className="flex-1">
              <motion.h2
                className="text-4xl font-bold text-white mb-4 font-sora"
                variants={itemVariants}
              >
                HI, I'm Himanshi
              </motion.h2>
              <motion.p
                className="text-gray-300 leading-relaxed font-siri"
                variants={itemVariants}
              >
                I am a Full Stack Developer and I love solving problems, and
                making things feel right. I am a quick learner and I am always
                looking to improve my skills. I can work in a team and I am a
                good communicator. Peace out!
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Experience, Contact, Software */}
        <motion.div
          className="grid grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {/* Experience Column 1 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4 font-sora">
              EXPERIENCE
            </h3>
            <div className="space-y-3 text-sm">
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <p className="font-semibold text-white font-siri">Freelancer</p>
                <p className="text-gray-400 font-siri">aug 2024 - feb 2025</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact & Software Column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="text-lg font-bold text-white mb-4 font-sora">
                CONTACT
              </h3>
              <div className="space-y-3 text-sm">
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-6 h-6 border text-white rounded flex items-center justify-center text-lg">
                    <FaDiscord />
                  </div>
                  <a
                    href="https://discord.com/invite/1242544103586267228"
                    className="text-pink-400 hover:text-pink-300 font-siri"
                  >
                    Discord
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-6 h-6 border text-white rounded flex items-center justify-center text-sm">
                    <FaLinkedin />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/himanshi-gupta3005"
                    className="text-pink-400 hover:text-pink-300 font-siri"
                  >
                    LinkedIn
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-6 h-6 border text-white rounded flex items-center justify-center text-sm">
                    <FaEnvelope />
                  </div>
                  <a
                    href="mailto:himanshigupta3005@gmail.com"
                    className="text-pink-400 hover:text-pink-300 font-siri"
                  >
                    Gmail
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-6 h-6 border text-white rounded flex items-center justify-center text-sm">
                    <FaGithub />
                  </div>
                  <a
                    href="https://github.com/Himanshi305"
                    className="text-pink-400 hover:text-pink-300 font-siri"
                  >
                    Github
                  </a>
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4 font-sora">
                TECH STACK
              </h3>
              <div className="grid grid-cols-4 gap-2">
                <motion.div
                  className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  title="React"
                >
                  <FaReact />
                </motion.div>
                <motion.div
                  className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white text-sm"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  title="Node.js"
                >
                  <FaNodeJs />
                </motion.div>
                <motion.div
                  className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center text-white text-sm"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  title="JavaScript"
                >
                  <SiJavascript />
                </motion.div>
                <motion.div
                  className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  title="MongoDB"
                >
                  <SiMongodb />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <Content />
      <Project />
      <OnekoCat />
    </motion.div>
  );
}
