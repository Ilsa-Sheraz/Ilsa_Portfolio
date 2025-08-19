import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Make sure to install framer-motion

const lines = [
  "Aspiring Data Scientist.",
  "Passionate about AI and Innovation.",
  "Exploring the world of ML / AI.",
  "Turning ideas into impactful Solutions",
];

const Typewriter = ({ texts, speed = 50, delay = 1500 }) => {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[lineIndex].length) {
        setText((prev) => prev + texts[lineIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setLineIndex((prev) => (prev + 1) % texts.length);
        }, delay);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, texts, speed, delay]);

  return (
    <p className="text-xl md:text-2xl text-gray-300 mt-4 h-10 font-mono tracking-wide">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
};

const MainPage = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center text-white space-y-10 md:space-y-0 md:space-x-16">
        {/* Text Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I am{" "}
            <span className="text-indigo-400 underline decoration-indigo-500">
              Ilsa Sheraz
            </span>
          </h1>
          <Typewriter texts={lines} />
          <p className="text-base md:text-lg text-gray-400 mt-4 max-w-md">
            Welcome to my portfolio. Dive into my world of data, AI, and impactful projects.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-49 h-49 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-indigo-500"
        >
          <img
            src="/src/assets/ilsasheraz.png" // Update path as needed
            alt="Ilsa Sheraz"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition duration-300 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainPage;
