import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 sm:px-8">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-extrabold text-orange-500 dark:text-white">
          Ashfaque Ahmad
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={handleMenuToggle} className="text-orange-500 dark:text-white text-2xl">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Navigation Links - Hidden on small screens */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 lg:static absolute top-full left-0 w-full lg:w-auto bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent lg:flex-row flex flex-col text-center py-4 lg:py-0 text-xl text-gray-700 dark:text-white`}
        >
          <a
            href="#home"
            className="hover:text-orange-500 transition duration-300 lg:mx-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-orange-500 transition duration-300 lg:mx-2"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-orange-500 transition duration-300 lg:mx-2"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-orange-500 transition duration-300 lg:mx-2"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-orange-500 transition duration-300 lg:mx-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={handleDarkModeToggle}
          className="hidden lg:block bg-orange-500 text-white p-2 rounded-full border-none outline-none hover:bg-orange-600 transition duration-300"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>

        {/* Dark Mode Toggle for mobile */}
        <button
          onClick={handleDarkModeToggle}
          className="lg:hidden hover:bg-orange-200 text-white p-2 rounded-full border-none outline-none bg-orange-900 transition duration-300 fixed bottom-4 right-4 z-50"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
