import React from "react";
import { motion } from "framer-motion";

// Skill data
const skills = [
  {
    title: "Python Programming",
    description:
      "Strong foundation in Python, used extensively in data analysis, machine learning, and computer vision projects.",
    logo: "/src/assets/Python.png",
  },
  {
    title: "Machine Learning",
    description:
      "Built and evaluated predictive models using scikit-learn and TensorFlow. Applied them to real-world problems like churn analysis and forecasting.",
    logo: "/src/assets/Tensorflow.png",
  },
  {
    title: "Computer Vision & OpenCV",
    description:
      "Developed real-time object detection and face recognition systems using OpenCV and deep learning techniques.",
    logo: "/src/assets/opencv.png",
  },
  {
    title: "Data Analysis & Visualization",
    description:
      "Proficient in pandas, NumPy, Matplotlib, and Seaborn. Also skilled in Excel and Power BI for data cleaning, dashboard creation, and business reporting.",
    logo: "/src/assets/powerbi.png",
  },
  {
    title: "Version Control with Git",
    description:
      "Experienced with Git for source code management, branching, and collaborating on projects via GitHub.",
    logo: "/src/assets/git.png",
  },
  {
    title: "C++ Programming",
    description:
      "Experience with C++ for implementing algorithms and building logic-driven programs.",
    logo: "/src/assets/C++.png",
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-12">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-center text-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h1>

        {/* Grid of Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-indigo-500/50 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Logo */}
              <div className="w-16 h-16 mb-4 mx-auto">
                <img
                  src={skill.logo}
                  alt={`${skill.title} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center text-indigo-300 mb-2">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
