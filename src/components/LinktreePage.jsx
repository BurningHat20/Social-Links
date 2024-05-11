import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaSun, FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import classnames from "classnames";
import { links } from "../constants";
import AuthorImage from "../assets/Yash-Gohel.jpg";

const Link = ({ link, isLightTheme }) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={classnames(
      "block rounded-lg p-4 mb-4 transition-all duration-300 shadow-lg flex items-center justify-between mx-4 font-montserrat",
      {
        "bg-gray-200 hover:bg-gray-300 text-gray-900": isLightTheme,
        "bg-gray-800 hover:bg-gray-700 text-white": !isLightTheme,
      }
    )}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.span
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <link.icon className="mr-4 text-xl" />
      <span className="text-lg font-medium">{link.title}</span>
    </motion.span>
    <motion.span
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <FaExternalLinkAlt className="text-lg" />
    </motion.span>
  </motion.a>
);

const LinktreePage = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsLightTheme(!systemPrefersDark);
  }, []);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredLinks =
    selectedCategory === "All"
      ? links
      : links.filter((link) => link.category === selectedCategory);

  return (
    <div
      className={classnames("min-h-screen flex flex-col justify-between", {
        "text-gray-900 bg-gray-100": isLightTheme,
        "text-white bg-gray-900": !isLightTheme,
      })}
    >
      <div>
        <div className="py-8 text-center relative">
          <motion.img
            src={AuthorImage}
            alt="Author"
            className="mx-auto w-32 h-32 rounded-full mb-4 border-4 border-gray-700 shadow-lg"
            style={{ objectFit: "cover" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-4xl font-bold mb-2 font-ubuntu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My Linktree
          </motion.h1>
          <motion.p
            className="text-lg mb-5 font-palanquin"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Connect with me on various platforms
          </motion.p>
          <div className="mb-4 flex justify-center">
            {["All", "Social Media", "Portfolio", "Contact"].map((category) => (
              <motion.button
                key={category}
                className={classnames(
                  "mr-2 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base",
                  {
                    "bg-gray-800 text-white": selectedCategory === category,
                    "bg-gray-200 text-gray-900": selectedCategory !== category,
                  }
                )}
                onClick={() => handleCategoryClick(category)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <button
            className="absolute top-0 right-0 m-4 p-2 rounded-full bg-gray-800 text-white"
            onClick={toggleTheme}
          >
            {isLightTheme ? <FaMoon /> : <IoIosSunny />}
          </button>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <AnimatePresence>
              {filteredLinks.map((link) => (
                <Link
                  key={selectedCategory + "-" + link.id}
                  link={link}
                  isLightTheme={isLightTheme}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <motion.p
        className="text-sm mt-8 pb-4 text-center font-palanquin"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <a
          href="https://burninghat.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2024 BurningHat. All rights reserved.
        </a>
      </motion.p>
    </div>
  );
};

export default LinktreePage;
