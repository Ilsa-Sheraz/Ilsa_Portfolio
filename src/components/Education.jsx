import React from "react";

const Education = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-800 rounded-xl shadow-2xl p-8 space-y-8">
        
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-indigo-400 mb-4">Education</h1>



        {/* University Info */}
        <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
          <a
            href="https://paf-iast.edu.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <img
              src="/src/assets/Pafiast.png" // ✅ Replace with your actual logo image path
              alt="PAF-IAST Logo"
              className="w-15 h-20 object-cover rounded-full"
            />
            <h2 className="text-2xl md:text-2xl font-semibold text-indigo-300 hover:underline">
              Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology
            </h2>
          </a>
        </div>

        {/* Degree & CGPA */}
        <div className="text-lg md:text-xl text-gray-300">
          <p>
            <span className="font-semibold text-white">Bachelor of Science in Data Science</span>
          </p>
          <p>
            CGPA:{" "}
            <span className="text-green-400 font-semibold">3.89 / 4.0</span>
          </p>
        </div>

        {/* Co-curricular Activities */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Co-curricular Activities:
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>General Secretary at Data Science Society</li>
            <li>ML Lead at Google Developer Group on Campus (GDGOC)</li>
            <li>Teaching Assistant</li>
          </ul>
        </div>

        {/* Academic Achievements */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Academic Achievements:
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>6× Dean's List of Honors Awards</li>
            <li>5× 100% Merit-based Scholarships</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
