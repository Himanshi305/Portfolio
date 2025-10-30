"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CiCircleChevDown } from "react-icons/ci";

const HeroSection = ({ onReady }) => {
  let [showContent, setshowContent] = useState(false);
  const readyCalled = useRef(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vimaskg", {
      rotate: 360,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    })
    .to(".vimaskg", {
      scale: 8,
      duration: 2,
      delay: -1.8,
      ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if (this.progress() >= 0.9) {
          const svgEl = typeof document !== 'undefined' && document.querySelector(".svg");
          if (svgEl && typeof svgEl.remove === 'function') svgEl.remove();
          setshowContent(true);
          // call parent's onReady once
          if (onReady && !readyCalled.current) {
            readyCalled.current = true;
            try { onReady(); } catch (e) { /* ignore */ }
          }
          this.kill();
        }
      }
    })
  });
  useGSAP(() => {
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function(e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      })
      gsap.to(".clouds", {
        x: `${xMove * 0.4}%`,
      })
      gsap.to(".buildings", {
        x: `${xMove * 0.7}%`,
      })
    })
  }, [showContent]);
  return (
    <>
      <div className="svg fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-[#111111] text-white overflow-hidden">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-screen h-screen block">
          <defs>
            <mask id="vimask">
              <rect width="800" height="600" fill="black" />
              <g className="vimaskg">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".35em"
                  fontSize="150"
                  fontFamily="Sora, sans-serif"
                  fontWeight="bold"
                  fill="white"
                >
                  PORTFOLIO
                </text>
              </g>
            </mask>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href="/gta-img/mix-gta1.png"
            alt=""
            mask="url(#vimask)"
            className="w-full h-full object-cover"
          />
        </svg>
      </div>
      {showContent && 
      <div className="main w-full">
        <div className="landing w-full h-screen">
          <div className="navbar absolute top-3 left-3 right-3 z-[10] py-1 px-6 backdrop-blur-2xl flex justify-between items-center rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
            <div className="logo">
              <div className="lines"></div>
              <h3 className="font-sora">MENU</h3>
            </div>
            <nav className="hidden md:flex items-center gap-4">
              <a href="#about" className="text-sm text-gray-200 hover:text-white px-3 py-1 rounded-md">About</a>
              <a href="#projects" className="text-sm text-gray-200 hover:text-white px-3 py-1 rounded-md">Projects</a>
              <a href="#contact" className="text-sm text-gray-200 hover:text-white px-3 py-1 rounded-md">Contact</a>
            </nav>
            {/* Mobile: simple menu button (keeps existing MENU text as visual) */}
          </div>
          <div className="img relative w-full h-screen overflow-hidden">
            <img className="clouds absolute scale-[1.2] top-0 left-0 w-full h-full object-cover" src="/gta-img/gta-clouds.png" alt="" />
            <img className="buildings absolute scale-[1.3] top-0 left-0 w-full h-full object-cover" src="/gta-img/gta-building (2).png" alt="" />
            <img className="mix absolute top-0 left-0 w-full h-full object-cover" src="/gta-img/mix-gta.png" alt="" />

          <div className="text absolute flex flex-col top-10 left-1/2 -translate-x-1/2 gap-3">
            <h1 className="font-myfont text-white text-8xl flex -ml-30">WELCOME</h1>
            <h2 className="font-sora text-9xl text-[#111111] flex ml-150">to</h2>
            <h2 className="font-sora text-7xl text-[#111111] flex -ml-50">my portfolio</h2>
            <h3 className="font-myfont text-white text-6xl flex ml-150">FOLKS</h3>
          </div>
            <img className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 h-150" src="./gta-img/gta-girl5.png" alt="" />
          </div>
          <div className="bottom-bar absolute bottom-0 left-0 w-full py-5 px-5 overflow-hidden">
            <div className="flex gap-4 items-center animate-bounce">
              <CiCircleChevDown size={30} />
              <h3 className="font-sora">Scroll Down</h3>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default HeroSection;
