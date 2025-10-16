"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const HeroSection = () => {
  const openMail = () => {
    window.location.href = "mailto:himanshigupta3005@gmail.com";
  };

  return (
    <section className="relative rounded-2xl flex flex-col items-center justify-center min-h-110 md:min-h-125 mb-20 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-white md:p-12 p-6 overflow-hidden">
      {/* Main Content Box */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        {/* Avatar */}
        <motion.div
          className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full  border-4 border-white/20 flex-shrink-0 hover:border-pink-500 transition-colors duration-300"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/avatar.png"
            alt="Profile Avatar"
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="max-w-lg"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Himanshi Gupta</h2>
          <p className="mt-2 text-lg text-gray-400">
            Full-Stack Developer & Creative Coder
          </p>
          <p className="mt-4 text-gray-300">
            Crafting digital experiences from front-end to back-end. Passionate about clean code and intuitive design. worked with frameworks like React, three.js, React three fiber and libraries like framer-motion to build engaging web applications.
          </p>
        </motion.div>
      </div>

      {/* Buttons and Socials */}
      <motion.div
        className="relative z-10 mt-8 flex flex-col items-center gap-6 w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <div className="flex justify-center gap-4">
            <a
                href="#projects"
                className="px-6 py-3 border border-white/50 rounded-full hover:bg-white/10 transition-colors"
            >
                View My Work
            </a>
            <button
                onClick={openMail}
                className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
            >
                Get In Touch
            </button>
        </div>
        <div className="flex items-center gap-6 mt-4">
            <a href="https://github.com/Himanshi305" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/himanshi-gupta3005" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
            </a>
            <a href="https://discord.com/users/1242544103586267228" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaDiscord size={24} />
            </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
