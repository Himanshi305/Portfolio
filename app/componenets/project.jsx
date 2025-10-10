"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Project() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 0.8,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "REVEL",
      description: "A project based on Marvel Characters and its timeline with comic API",
      image: "/images/revel.png",
      number: 1,
      url:`https://revel-teal.vercel.app/`
    },
    {
      title: "REVEL: DOOMSDAY",
      description: "A frontend project with 3D model and animation",
      image: "/images/revel-doomsday.png",
      number: 2,
      url:`https://revel-doom.vercel.app/`
    },
    {
      title: "REVEL: YOGA",
      description: "A frontend project with 3D model and illusion animation with some help of Figma",
      image: "/images/revel-yoga.png",
      number: 3,
      url:`https://revel-yoga.vercel.app/`
    },
    {
      title: "REVEL: MOVE",
      description: "A Full-Stack website for Travelling with adjustable budget and data collection",
      image: "/images/revel-move.png",
      number: 4,
      url:`https://revel-move.vercel.app/`
    }
  ];

  // Generate accurate screenshot URL
  const getScreenshotUrl = (url) => {
    return `https://image.thum.io/get/width/400/crop/600/${encodeURIComponent(url)}`;
  };

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
        <motion.div key={index} 
          className="shadow-lg bg-background/5 p-6 rounded-2xl text-white relative min-h-[300px] overflow-hidden"
          variants={projectCardVariants}
          whileHover="hover"
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
          <div className="space-y-4">
            <div className="relative w-full h-32 rounded-lg overflow-hidden bg-gray-800">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-sm">
                Project Preview
              </div>
            </div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm font-siri">{project.description}</p>
          </div>
          <div className="absolute bottom-4 right-4 text-4xl font-bold">{index+1}</div>
          </a>
        </motion.div>
        ))}
      </motion.div>
    </>
  );
}
