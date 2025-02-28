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
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary font-semibold">Software Engineer</span>
          </Badge>

          <h1 className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Lybrooks Snagsolvers
            </span>
          </h1>

          <p className="max-w-screen-sm mx-auto text-lg md:text-xl text-white leading-relaxed font-serif">
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
            src={
              theme === "light" ? "/portfolio-light.jpeg" : "/portfolio-dark.jpeg"
            }
            alt="dashboard"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  );
};
