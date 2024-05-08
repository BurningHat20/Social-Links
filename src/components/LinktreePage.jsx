import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaSnapchatGhost,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { GrDocumentPdf } from "react-icons/gr";
import AuthorImage from "../assets/Yash-Gohel.jpg";

const links = [
  {
    id: 1,
    title: "Portfolio Website",
    url: "https://burninghat.tech",
    icon: FaGlobe,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/yashgohel777/",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    title: "Twitter",
    url: "https://twitter.com/yashgohel_",
    icon: FaXTwitter,
  },
  {
    id: 4,
    title: "Github",
    url: "https://github.com/BurningHat20/",
    icon: FaGithub,
  },
  {
    id: 5,
    title: "Mail",
    url: "mailto:burninghat20@gmail.com",
    icon: IoIosMail,
  },
  {
    id: 6,
    title: "Resume",
    url: "https://drive.google.com/file/d/1D2cpUku3Y0NrFDQUYskLhJJA5VSLL-qQ/view?usp=sharing",
    icon: GrDocumentPdf,
  },

  {
    id: 7,
    title: "Instagram",
    url: "https://www.instagram.com/yashdgaf._",
    icon: FaInstagram,
  },

  {
    id: 8,
    title: "Snapchat",
    url: "https://www.snapchat.com/add/yashh_312?share_id=brjf_cQLyM4&locale=en-IN",
    icon: FaSnapchatGhost,
  },

  {
    id: 9,
    title: "Threads",
    url: "https://www.threads.net/@yashdgaf._",
    icon: FaThreads,
  },
];

const LinktreePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
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
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 hover:bg-gray-700 rounded-lg p-4 mb-4 transition-all duration-300 shadow-lg flex items-center justify-between mx-4 font-montserrat"
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
          ))}
        </div>
        <motion.p
          className="text-sm mt-8 pb-4 text-gray-400 text-center font-palanquin"
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
    </div>
  );
};

export default LinktreePage;
