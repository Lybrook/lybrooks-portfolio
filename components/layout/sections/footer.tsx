import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const FooterSection = () => {
  return (
    <footer id="footer" className="bg-black text-white text-center py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:text-center space-y-1">
          <div className="text-4xl font-extrabold text-yellow-500">LS</div>
          <p className="text-lg font-medium text-gray-200">Lybrooks Snagsolvers</p>
          <p className="text-sm text-gray-400 italic">Software Engineers</p>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/lyb_rook/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="relative group hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-125"
          >
            <FaInstagram className="size-6" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded">
              Instagram
            </span>
          </a>

          <a
            href="https://www.facebook.com/myles.vasquez.3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="relative group hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-125"
          >
            <FaFacebook className="size-6" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded">
              Facebook
            </span>
          </a>

          <a
            href="https://x.com/LybrookOmondi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="relative group hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-125"
          >
            <FaTwitter className="size-6" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded">
              Twitter
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/lybrook-omondi-51601a20b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="relative group hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-125"
          >
            <FaLinkedin className="size-6" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/Lybrook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="relative group hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-125"
          >
            <FaGithub className="size-6" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded">
              GitHub
            </span>
          </a>

        </div>

        <div className="text-sm md:text-right text-gray-400 space-y-1">
          <p>&copy; {new Date().getFullYear()} Lybrooks Snagsolvers | Brand</p>
          <p>
            Development & Website by {" "}
            <span className="text-orange-500 font-semibold">LYBROOK</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
