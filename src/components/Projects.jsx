import React from "react";

const projects = [
  {
    title: "Web Scraping and Predictive Modeling: Amazon Case Study",
    role: "Web Scrapping, Data Cleaning and Preprocessing, Data Visualization",
    date: "May 2025",
    description:
      "Scraped the data of 1000+ laptops from Amazon and then stored in the form of csv files format, preprocessed and cleaned the data using python and then performed analysis with visualizations using Power BI.",
    image: "/src/assets/Extra/amazon.png",
  },
  {
    title: "Face Recognition for Attendance System",
    role: "Individual Project",
    date: "Jan 2025",
    description:
      "Built an attendance system utilizing python that detect face using harcascade, recognize it using model and then save it in an excel file with its date and time and user name.",
    image: "/src/assets/Extra/Attendance.jpg",
  },
  {
    title: "Customer Behavior Analysis and Predictive Modeling",
    role: "Individual Project",
    date: "Jan 2025",
    description:
      "Analyzed large customer datasets using PySpark to identify spending patterns and segment users. Implemented Linear Regression for spend prediction, K-Means Clustering for customer segmentation, and the Apriori algorithm for association rule mining. Achieved R² of 0.82 in spending prediction, identifying 5 customer segments, and uncovering product associations with 70% confidence.",
    image: "/src/assets//Extra/customer.jpg",
  },
  {
    title: "Vehicle Detection in Aerial Imagery Using YOLOv9",
    role: "Individual Project",
    date: "May 2025",
    description:
      "Trained YOLOv9 on the VEDAI dataset to detect vehicles in aerial imagery. Achieved strong detection performance (mAP 80.8%) despite small object sizes and occlusion challenges.",
    image: "/src/assets/Extra/vehicle.jpg",
  },
];

const Projects = () => {
  return (
    <div className="py-12 px-4 md:px-16 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center text-indigo-400">Projects</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between mb-16 gap-6 md:gap-12 animate-fade-in-up ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-gray-300 mb-1">
              <strong>Role:</strong> {project.role}
            </p>
            <p className="text-sm text-gray-300 mb-3">
              <strong>Date:</strong> {project.date}
            </p>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center overflow-hidden shadow-lg">
  <img
    src={project.image}
    alt={project.title}
    className="w-64 h-64 object-cover rounded-full border border-gray-700"
  />
</div>

        </div>
      ))}
    </div>
  );
};

export default Projects;
