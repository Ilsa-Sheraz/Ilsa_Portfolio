import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'National Radio and Telecommunication Corporation (NRTC)',
    date: 'July - August 2024',
    role: 'Image Processing Intern',
    logo: '/src/assets/nrtc.png',
    responsibilities: [
      'Developed and implemented a face detection and recognition attendance system using OpenCV and Python.',
      'Built OCR pipelines for data extraction from scanned documents.',
      'Created a 3D plane simulation for visualizing aircraft flight paths.',
    ],
  },
  {
    title: 'Pak Austria Fachhochschule: Institute of Applied Sciences and Technology',
    date: 'September 2024 - Present',
    role: 'Teaching Assistant',
    logo: '/src/assets/Pafiast.png',
    responsibilities: [
      'Supported faculty in organizing practical lab sessions and tutorials.',
      'Maintain records of student progress, attendance, and assignments.',
      'Evaluate and provide feedback on student assignments under the teacher’s guidance.',
      'Facilitate communication between teachers and students to address academic needs.',
    ],
  },
  {
    title: 'Made in Pakistan (Pakistan Sakhta)',
    date: 'August - October 2023',
    role: 'Graphics Design / Video Editing / Content Writing Intern',
    logo: '/src/assets/mip.png',
    responsibilities: [
      'Designed promotional graphics and videos for digital campaigns.',
      'Wrote engaging blog content to boost online visibility.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 px-4 md:px-12">
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl font-bold md:text-4xl text-center mb-10 text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experiences
      </motion.h1>

      {/* Animated Grid */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-xl p-6 flex flex-col gap-4 transition-transform hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-4">
              <img src={exp.logo} alt={`${exp.title} Logo`} className="w-16 h-16 rounded-full object-contain" />
              <div>
                <h3 className="text-xl font-semibold text-indigo-300 mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.date}</p>
              </div>
            </div>
            <h4 className="text-lg text-teal-400 font-semibold">{exp.role}</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
