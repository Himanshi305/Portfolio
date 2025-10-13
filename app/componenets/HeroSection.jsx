import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMail = () => {
    window.location.href = "mailto:himanshigupta3005@gmail.com";
  };

  return (
    <>
    <div className="text-white font-sora text-8xl pb-2">PORTFOLIO</div>
    <section className="relative rounded-2xl flex flex-col items-center justify-center min-h-80 mb-10 bg-[#0a0a0a] text-white p-8 overflow-hidden">
      {/* Background decorative lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#111111] via-gray-700 to-[#111111]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm <><span className="text-[#ff0081]">Himanshi.</span></>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A Full-Stack Developer Who Crafts Digital Experiences.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 border border-white/50 rounded-full hover:bg-white/10 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={openMail}
            className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="absolute bottom-8 left-8 right-8 z-10 flex justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={48}
            height={48}
            className="rounded-full border-2 border-white/50"
          />
          <span className="font-bold text-xl"></span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Himanshi305" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/himanshi-gupta3005" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://discord.com/users/1242544103586267228" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaDiscord size={20} />
          </a>
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default HeroSection;
