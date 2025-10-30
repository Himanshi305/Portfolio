"use client";

import { motion, useScroll, useTransform } from "framer-motion";

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
    <div ref={containerRef} className="h-screen w-screen relative overflow-hidden flex">
      {/* Left: half width image */}
      <div className=" relative top-40 w-1/3 flex items-center justify-center bg-gradient-to-b from-black via-pink-900 to-black h-1/2 m-3 rounded-full hover:scale-103 transition-transform duration-500 hover:border-pink-800 border-4">
        <img
          src="/gta-img/side-pic.png"
          alt="Himanshi Gupta"
          className="object-cover h-full rounded-full"
        />
      </div>

      {/* Right: intro card */}
      <section id="about" className="w-2/3 h-full flex items-center justify-center mt-5">
        <motion.div
          style={{ opacity }}
          className="max-w-full w-full h-1/2 backdrop-blur-md rounded-3xl p-8 text-white "
        >
          <div className="flex-1 text-white w-full">
            <h1 className="text-2xl md:text-3xl font-extrabold font-sora">Himanshi Gupta</h1>
            <p className="mt-1 text-sm text-gray-600">Full‑Stack Web Developer & Designer</p>

            <p className="mt-4 text-gray-300">
              I craft responsive, accessible, and performant web experiences using React, Node.js,
              and modern front-end tooling. I focus on clean UI, smooth animations, and thoughtful UX.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs px-3 py-1 bg-white/6 rounded-full text-gray-400">React</span>
              <span className="text-xs px-3 py-1 bg-white/6 rounded-full text-gray-400">Next.js</span>
              <span className="text-xs px-3 py-1 bg-white/6 rounded-full text-gray-400">Tailwind</span>
              <span className="text-xs px-3 py-1 bg-white/6 rounded-full text-gray-400">Node</span>
              <span className="text-xs px-3 py-1 bg-white/6 rounded-full text-gray-400">TypeScript</span>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-flex w-25 items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white text-sm"
              >
                View Work
              </a>
              
              
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MainContent;
