import React from "react";
import { FaGithub, FaLinkedin, FaKaggle, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Decorative Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl w-full text-center space-y-12 z-10">
        {/* Small Intro Title */}
        <p className="uppercase tracking-widest text-sm text-indigo-400 font-semibold">
          Get to Know Me
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-500">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I'm <span className="text-white font-semibold">Ilsa Sheraz</span>, a
          passionate <span className="text-indigo-400 font-semibold">Data Science</span> student
          with a growing interest in <span className="text-indigo-400 font-semibold">robotics</span>. I've led and contributed to
          projects including:
          <br />
          <span className="block mt-4 text-white font-medium">
            • AI-powered attendance system<br />
            • Real-time object detection using OpenCV<br />
            • Time series-based business forecasting<br />
            • Customer churn analysis using ML
          </span>
          <br />
          I enjoy exploring data-driven solutions that solve real-world
          problems. Beyond academics, I find balance through reading, cooking,
          and connecting with nature.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 pt-4">
          {[
            {
              href: "https://mail.google.com/mail/?view=cm&to=ilsasheraz505@gmail.com",
              icon: <FaEnvelope size={28} />,
              title: "Send Email",
            },
            {
              href: "https://github.com/Ilsa-Sheraz",
              icon: <FaGithub size={28} />,
              title: "GitHub",
            },
            {
              href: "https://www.kaggle.com/ilsasheraz",
              icon: <FaKaggle size={28} />,
              title: "Kaggle",
            },
            {
              href: "https://www.linkedin.com/in/ilsa-sheraz-63ab60288/",
              icon: <FaLinkedin size={28} />,
              title: "LinkedIn",
            },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-transform transform hover:scale-125"
              title={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="pt-10">
          <a
            href="/Ilsa Sheraz - Resume.pdf" // Make sure this path is correct
            download="IlsaSheraz_Resume.pdf"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-xl transition duration-300"
            title="Download My Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
