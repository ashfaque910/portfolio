import React from "react";
import portImage from '../assets/pj-1.png'; // Adjust the path as needed
import tourImage from '../assets/pj-2.png'; // Adjust the path as needed
import ngaImage from '../assets/pj-3.png'; // Adjust the path as needed

const Projects = () => {
  const projects = [
    { title: "Portfolio", description: "A modern and responsive portfolio website built using ReactJS and Tailwind CSS. It showcases my projects, skills, and experience in a clean and professional layout, with easy navigation and interactive elements to provide a seamless user experience.", image: portImage, link: "#" },
    { title: "Tourism Website",
       description: "Developed as part of a team during my traineeship program, this tourism website offers destination guides, travel tips, and booking services. I and my frontend teammates worked on the frontend using ReactJS, while the backend team handled server-side tasks with Node.js and MongoDB.",
        image: tourImage, link: "https://wondersofbharat-tourism-app.vercel.app/" },

    { title: "NGA Publications", 
      description: "A freelance project built for NGA Publications, providing educational content like NEET and JEE test series. The site features a modern design, built with ReactJS, and is optimized for both mobile and desktop users.",
       image: ngaImage, link: "https://www.ngapublications.com/" },
  ];

  return (
    <section id="projects">
      <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-gray-100 text-gray-800 animate-fade-in">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-orange-500 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-white hover:text-orange-600 border-2 hover:border-orange-500">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
