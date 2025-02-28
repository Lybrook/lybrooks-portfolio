"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowBigDown } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="text-sm py-2" role="status">
            <span className="mr-2 text-primary font-semibold">Software Engineer</span>
          </Badge>

          <div className="relative w-full flex justify-center items-center">
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="absolute left-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: [0, 50, 0], opacity: [0, 1, 1, 1] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {/* Head */}
              <circle cx="50" cy="20" r="8" stroke="orange" strokeWidth="2" fill="none" />
              {/* Body */}
              <line x1="50" y1="28" x2="50" y2="50" stroke="orange" strokeWidth="2" />
              {/* Arms */}
              <motion.line
                x1="40"
                y1="35"
                x2="60"
                y2="35"
                stroke="orange"
                strokeWidth="2"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Legs */}
              <motion.line
                x1="50"
                y1="50"
                x2="40"
                y2="70"
                stroke="orange"
                strokeWidth="2"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.line
                x1="50"
                y1="50"
                x2="60"
                y2="70"
                stroke="orange"
                strokeWidth="2"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -20, 20, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Smiling Emoji */}
              <motion.circle
                cx="50"
                cy="20"
                r="8"
                fill="yellow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              />
              <motion.circle
                cx="47"
                cy="18"
                r="1"
                fill="black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              />
              <motion.circle
                cx="53"
                cy="18"
                r="1"
                fill="black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              />
              <motion.path
                d="M 47 22 Q 50 25 53 22"
                stroke="black"
                strokeWidth="1"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              />
            </motion.svg>

            <motion.span
              className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-4xl md:text-6xl font-extrabold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              SnaGGsoLLveRs
            </motion.span>
          </div>

          <p className={`max-w-screen-sm mx-auto text-lg md:text-xl leading-relaxed font-serif ${theme === "light" ? "text-black" : "text-white"}`}>
            {`Hi, we're more than just a tool, we're a community of passionate full-stack developers 🚀. We thrive on turning complex challenges into creative software solutions. Let's connect and build something amazing together! 🤝`}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button className="w-5/6 md:w-auto font-bold group transition-all hover:scale-105 shadow-md">
              Get Started
              <ArrowBigDown className="size-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative group mt-14"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-secondary border-t-primary/30 shadow-lg"
            src={theme === "light" ? "/portfolio-light.jpeg" : "/portfolio-dark.jpeg"}
            alt="dashboard"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  );
};