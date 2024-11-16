import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = ({ isDarkTheme }) => {
  return (
    <div className="mb-8 pb-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 pb-5 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4 rounded-full">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-2xl"
              ></motion.img>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p
                className={`${
                  isDarkTheme ? "text-neutral-400" : "text-gray-800"
                } mb-4`}
              >
                {project.description}
              </p>
              {/* Flex container for technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`mr-3 rounded p-2 py-1 text-sm font-medium ${
                      isDarkTheme
                        ? "text-purple-600 bg-neutral-900"
                        : "text-fuchsia-950 bg-violet-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
