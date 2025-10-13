"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ProjectSlider = ({ projects, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-[#6b7280] to-black p-8"
      variants={slideVariants}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white font-sora">
          {projects[currentSlide].title}
        </h3>
        <a 
          href={projects[currentSlide].url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#1d1d1e] hover:bg-black text-white px-4 py-2 rounded-lg transition-colors"
        >
          Visit Site
        </a>
      </div>

      {/* Video Player */}
      <div className="relative h-[30rem] md:h-[20rem] lg:h-[30rem] rounded-lg overflow-hidden bg-black mb-6">
        <video
          key={projects[currentSlide].video}
          className="w-full h-full object-cover"
          src={projects[currentSlide].video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-500' : 'bg-white/30'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next project"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

export default function ProjectPreview() {
  const frontendProjects = [
    {
      title: "REVEL",
      video: "/frontend-preview-video/revel-preview.mp4",
      url: "https://revel-teal.vercel.app/"
    },
    {
      title: "REVEL: DOOMSDAY",
      video: "/frontend-preview-video/doom-preview.mp4",
      url: "https://revel-doom.vercel.app/"
    },
    {
      title: "REVEL: YOGA",
      video: "/frontend-preview-video/yoga-preview.mp4",
      url: "https://revel-yoga.vercel.app/"
    }
  ];

  const backendProjects = [
    {
        title: "CHAT-APP",
        video: "/frontend-preview-video/chat-app-preview.mp4",
        url: "https://chatapp.vercel.app/"
      }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="py-20 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Frontend Projects Section */}
        <div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-sora"
          >
            FRONTEND PROJECTS
          </motion.h2>
          <ProjectSlider projects={frontendProjects} />
        </div>

        {/* Backend Projects Section */}
        <div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-sora"
          >
            BACKEND PROJECTS
          </motion.h2>
          <ProjectSlider projects={backendProjects} />
        </div>
      </div>
    </motion.section>
  );
}