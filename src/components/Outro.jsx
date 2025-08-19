import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Outro = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 mt-12 relative">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Divider */}
        <div className="w-24 h-1 bg-purple-500 mx-auto mb-6 rounded-full" />

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
          Thank You for Visiting
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          I appreciate your time and interest in my work. Let’s connect and
          create something meaningful!
        </p>

        {/* Inspirational Quote */}
        <blockquote className="italic text-gray-300 text-md md:text-lg mb-10">
          "Success is not final, failure is not fatal: it is the courage to continue that counts."
        </blockquote>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="https://mail.google.com/mail/?view=cm&to=ilsasheraz505@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition duration-300"
            title="Send Email via Gmail"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Ilsa-Sheraz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition duration-300"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ilsa-sheraz-63ab60288/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* WhatsApp CTA */}
        <p className="mb-4 text-base opacity-80">
          Feel free to reach out or collaborate on exciting projects!
        </p>
        <a
          href="https://wa.me/923365329886"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-lg font-medium hover:bg-green-600 transition duration-300 mb-8"
        >
          <FaWhatsapp className="text-2xl" />
          <span>+92 336 5329886</span>
        </a>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mt-6 mb-8 flex-wrap">
          
          <a
            href="/public/Ilsa Sheraz - Resume.pdf" // Make sure this path is correct
            download="IlsaSheraz_Resume.pdf"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            title="Download My Resume"
          >
            My Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-2 bg-gray-700 rounded-full text-white font-semibold hover:bg-gray-600 transition duration-300"
          >
            View My Projects
          </a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 bg-purple-500 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg transition duration-300"
          title="Scroll to Top"
        >
          <FaArrowUp />
        </button>

        {/* Footer */}
        <p className="text-sm mt-10 text-gray-400">
          © {new Date().getFullYear()} Ilsa Sheraz. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Outro;
