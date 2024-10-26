import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "80%" },
    { name: "Bootstrap", level: "90%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "React", level: "80%" },
    { name: "JavaScript", level: "75%" },
  ];

  return (
    <section id="skills" className="bg-orange-400 dark:bg-gray-900 dark:text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-white dark:text-gray-200 mb-12">
          Professional Skills
        </h2>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-200">
                {skill.name}
              </h3>
              {/* Skill Progress Bar */}
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-orange-500 h-3 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Proficiency: {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
