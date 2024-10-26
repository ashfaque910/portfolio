import React from 'react'
import bgImage from '../assets/bg-1.jpg'
import CV from '../assets/ASHFAQUEAHMAD.pdf' // Assuming the CV is stored in the 'assets' folder

const About = () => {
  return (
    <>
    <section id="about" className="bg-white text-gray-900 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={bgImage}
            alt="Ashfaque Ahmad"
            className="rounded-full w-60 h-60 md:w-80 md:h-80 transition-transform transform hover:scale-110" // Increased image size
          />
        </div>
    
        {/* About Content */}
        <div className="w-full md:w-1/2 md:ml-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-orange-500 mb-4 font-sans"> {/* Updated font */}
            A Little About Me
          </h2>
          <p className="text-lg mb-4 leading-relaxed font-sans">
            Hello! I'm <span className="font-bold text-orange-500">Ashfaque Ahmad</span>, a software developer with a unique journey...
          </p>
          <p className="text-lg font-sans">
            I graduated from <span className="font-bold text-orange-600 dark:text-orange-500">B.B.M. Koyalanchal University</span>, where I developed a strong foundation in business management.
          </p>

          <p className="mt-2 text-lg leading-relaxed font-sans">
            After graduation, I began my career in retail, working as a <span className="italic">Retail Sales Assistant</span> at Standard Medical for 3 years.
            During this time, I honed my skills in customer relations and operations management, but I always had a curiosity for the tech world.
          </p>

          <p className="mt-2 text-lg leading-relaxed font-sans">
            Driven by my interest in technology, I transitioned to IT and completed a <span className="font-bold text-orange-600 dark:text-orange-500">Python Full Stack Development course</span>.
          </p>
          <p className="mt-4 pb-4 text-lg leading-relaxed font-sans">
          "Completed a 6-month traineeship in software development, focusing on both frontend and backend technologies, at  <span className="font-bold text-orange-600 dark:text-orange-500">Numetry Technologies, Pune</span>".
          </p>
          
          {/* Download CV Button */}
          <a href={CV} download="Ashfaque_Ahmad_CV.pdf">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
    </>  
  )
}

export default About;
