import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
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
    <div className="text-white font-sora md:text-8xl text-7xl md:pb-2 pb-5">PORTFOLIO</div>
    <section className="relative rounded-2xl flex flex-col items-center justify-center min-h-110 md:min-h-80 mb-10 bg-[#0a0a0a] text-white md:p-8 p-3 overflow-hidden">
        {/* Background decorative lines */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#111111] via-gray-700 to-[#111111]"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center">
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
                A Full-Stack Developer who likes to solve problems. I've had experience in building web applications with modern technologies like React, Next.js, Node.js, and MongoDB.
            </motion.p>
            <motion.div
                className="flex justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
            className="absolute bottom-8 left-8 right-8 z-10 flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            <div className="flex items-center gap-4 group">
                <Image
                    src="/avatar.png"
                    alt="Avatar"
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white/50 hover:border-white transition-all duration-300 cursor-pointer"
                />
                {/* link text hidden by default, shown when hovering the avatar (group hover) */}
                <a
                    href="https://www.instagram.com/himanshigupta0.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-thin text-sm text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
                >
                    <FaInstagram size={16} className="inline-block mr-1 text-pink-400" />
                    himanshigupta0.0
                </a>
            </div>
            <div className="flex items-center gap-6">
                <a href="https://github.com/Himanshi305" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/himanshi-gupta3005" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-white transition-colors">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://discord.com/users/1242544103586267228" target="_blank" rel="noopener noreferrer" className="text-white border border-white/50 rounded-lg p-0.5 bg-purple-800 hover:text-white transition-colors">
                    <FaDiscord size={20} />
                </a>
            </div>
        </motion.div>
    </section>
    </>
);
};

export default HeroSection;
