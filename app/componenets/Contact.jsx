import React from 'react'
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Contact anchor/section so navbar Contact link has a target */}
      <section id="contact" className="mt-12 mb-5 m-5 text-center bg-black p-6 rounded-2xl border border-gray-700">
        <h2 className="text-4xl font-bold text-white mb-2 font-sora">
          Contact
        </h2>
        <p className="text-gray-300 mb-4">
          I'm open to work and new opportunities — reach out!
        </p>
          {/* Social icons (replace href values with your actual profiles) */}
          <div className="mt-2 flex items-center gap-4 justify-center">
            <a
              href="https://github.com/himanshi305"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-200 hover:text-white text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/himanshigupta3005/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-400 hover:text-blue-500 text-xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-indigo-300 hover:text-indigo-200 text-xl"
            >
              <FaDiscord />
            </a>

            <a
              href="mailto:himanshigupta3005@gmail.com"
              aria-label="Email"
              className="text-emerald-300 hover:text-emerald-200 text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
      </section>
    </>
  )
}

export default Contact
