"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

import { useLenis } from "../hooks/useLenis";
import { useRef, useState, useEffect } from "react";


const MainContent = () => {
  const containerRef = useRef(null);
  useLenis(); 

  // avoid calling useScroll with a target ref before hydration
  // (prevents "Target ref is defined but not hydrated" runtime error)
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => setIsHydrated(true), []);

  const { scrollYProgress } = useScroll({
    target: isHydrated ? containerRef : undefined,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.95, 0.9]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-screen relative overflow-hidden flex flex-col items-center justify-center gap-6 p-6"
    >
      {/* About card */}
      <section id="about" className="w-full flex items-center justify-center">
        <motion.div
          style={{ opacity }}
          className="w-full max-w-5xl h-100 backdrop-blur-md rounded-3xl p-6 md:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center relative overflow-hidden"
        >
          {/* Background image (low opacity) - sits behind content */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/gta-img/mix-gta1.png"
              alt="background"
              className="w-full h-full object-cover opacity-30 rounded-4xl"
            />
          </div>

          {/* Small-screen inline image: visible only on small viewports and placed inside the card */}
          <div className="inline-flex md:hidden mx-auto mb-4 rounded-xl p-2 backdrop-blur items-center justify-center z-10">
            <img
              src="/gta-img/side-pic.png"
              alt="Himanshi Gupta"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover"
            />
          </div>

          {/* Image card */}
          <div className="hidden md:block md:w-1/3 md:mr-6 mt-6 md:mt-0 flex-shrink-0">
            <div className="w-full backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden p-0.75">
              <img
                src="/gta-img/side-pic.png"
                alt="Himanshi Gupta"
                className="object-contain w-full h-80 rounded-lg backdrop-blur p-2"
              />
            </div>
          </div>
          <div className="intro flex-1 w-full relative z-10">
            <h1 className="text-2xl md:text-3xl font-extrabold font-sora text-yellow-400">Himanshi Gupta</h1>
            <p className="mt-1 text-sm text-gray-400">Full‑Stack Web Developer & Designer</p>

            <p className="mt-4 text-gray-300">
              I craft responsive, accessible, and performant web experiences using React, Node.js,
              and modern front-end tooling. I focus on clean UI, smooth animations, and thoughtful UX.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-white/6 rounded-full text-gray-200 hover:bg-white/10 transition"
                aria-label="React"
              >
                <FaReact className="w-4 h-4 text-blue-500" />
                <span className="hidden sm:inline">React</span>
              </a>

              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-white/6 rounded-full text-gray-200 hover:bg-white/10 transition"
                aria-label="Next.js"
              >
                <SiNextdotjs className="w-4 h-4 text-gray-400" />
                <span className="hidden sm:inline">Next.js</span>
              </a>

              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-white/6 rounded-full text-gray-200 hover:bg-white/10 transition"
                aria-label="Tailwind CSS"
              >
                <SiTailwindcss className="w-4 h-4 text-cyan-500" />
                <span className="hidden sm:inline">Tailwind</span>
              </a>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-white/6 rounded-full text-gray-200 hover:bg-white/10 transition"
                aria-label="JavaScript"
              >
                <SiJavascript className="w-4 h-4 text-yellow-400" />
                <span className="hidden sm:inline">JavaScript</span>
              </a>

              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-white/6 rounded-full text-gray-200 hover:bg-white/10 transition"
                aria-label="Node.js"
              >
                <FaNodeJs className="w-4 h-4 text-green-500" />
                <span className="hidden sm:inline">Node.js</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MainContent;
