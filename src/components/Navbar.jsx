import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaSun, FaMoon, FaEnvelope } from "react-icons/fa";

const Navbar = ({ toggleTheme, isDarkTheme }) => {
  return (
    <nav className="mb-20 flex items-center justify-center lg:justify-between lg:py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* You can add your logo or site name here */}
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/vedchakre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/vedchakre2851"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:vedchakre28@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-slate-800" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
