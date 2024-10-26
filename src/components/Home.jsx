import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg"; // Replace with your image

const Home = () => {
  const [currentText, setCurrentText] = useState("Frontend Development");

  const skills = ["Frontend Development", "Full Stack Development", "Software Development"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = skills.indexOf(prev);
        const nextIndex = (currentIndex + 1) % skills.length;
        return skills[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-orange-400 to-orange-500 dark:bg-gray-900 text-white h-screen flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8"
    >
      {/* Content Section */}
      <div className="text-center lg:text-left lg:w-1/2 px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
          Hello, I'm <span className="text-orange-700">Ashfaque Ahmad</span>
        </h1>
        <p className="text-lg sm:text-xl mb-4">Software Developer | React Enthusiast</p>

        {/* Running Text */}
        <p className="text-xl sm:text-2xl font-semibold animate-pulse">{currentText}</p>

        <a
          href="#projects"
          className="mt-6 sm:mt-8 inline-block bg-white text-orange-500 px-5 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 hover:text-white transition duration-300"
        >
          See My Work
        </a>
      </div>

      {/* Profile Image Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-1/2 flex justify-center">
        <img
          src={bg}
          alt="Ashfaque Ahmad"
          className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full shadow-lg object-cover transition-transform transform hover:scale-110" style={{boxShadow: '0 0 4px 2px brown'}}
        />
      </div>
    </section>
  );
};

export default Home;
