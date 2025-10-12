"use client";

import { motion } from "framer-motion";
import { Marquee } from "./marque"
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";


const languageCategories = [
  {
    name: "React",
    icon: FaReact,
    url: "https://reactjs.org/",
    color: "#A8B9CC",
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
    url: "https://nextjs.org/",
    color: "#A8B9CC",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com/",
    color: "#A8B9CC",
  },
  {
    name: "ExpressJS",
    icon: SiExpress,
    url: "https://expressjs.com/",
    color: "#A8B9CC",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    url: "https://nodejs.org/",
    color: "#A8B9CC",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "#A8B9CC",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    url: "https://www.mongodb.com/",
    color: "#A8B9CC",
  },
  
]

export default function Content() {
    return(
        <div>
            {/* Content Section */}
            <motion.div 
                className="mb-4 flex justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                    <span className="block w-full text-center font-extrabold text-4xl text-white font-sora">EXPERIENCED IN</span>
            </motion.div>
            <Marquee className="[--duration:20s] max-w-5xl mx-auto p-6">
          {languageCategories.map((skill) => (
            <span
              key={skill.name}
              className="skill-item px-2 sm:px-3 py-1 bg-foreground/10 rounded-full flex items-center gap-1.5 sm:gap-2 justify-center mx-1 sm:mx-2 flex-shrink-0 cursor-pointer hover:bg-foreground/20 transition-colors"
            >
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-white">
                <skill.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {skill.name}
              </div>
            </span>
          ))}
        </Marquee>
        </div>
    );
}
