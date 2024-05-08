// LinktreePage.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaInstagram,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";

import AuthorImage from "../assets/author.jpg"; // Replace 'author.jpg' with the path to your author image

const links = [
  { id: 1, title: "Website", url: "https://example.com", icon: FaGlobe },
  {
    id: 2,
    title: "Instagram",
    url: "https://instagram.com/example",
    icon: FaInstagram,
  },
  {
    id: 3,
    title: "Twitter",
    url: "https://twitter.com/example",
    icon: FaTwitter,
  },
  // Add more links as needed
];

const LinktreePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="py-12 text-center relative">
        <img
          src={AuthorImage}
          alt="Author"
          className="mx-auto w-32 h-32 rounded-full mb-4 border-4 border-white shadow-lg"
          style={{ objectFit: "cover", background: "none" }}
        />
        <h1 className="text-4xl font-bold mb-8">My Linktree</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div>
          {links.map((link) => (
            <Link
              key={link.id}
              to={{ pathname: link.url }}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg p-4 mb-4 transition-all duration-300 shadow-lg flex items-center justify-between"
            >
              <span className="flex items-center">
                <link.icon className="mr-4 text-xl" />
                <span className="text-lg font-medium">{link.title}</span>
              </span>
              <FaExternalLinkAlt className="text-lg" />
            </Link>
          ))}
        </div>
        <p className="text-sm mt-8 text-gray-400 text-center">
          © 2024 Your Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LinktreePage;
