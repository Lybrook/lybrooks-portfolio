"use client";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import useCurSection from "@/app/use-cur-section";
import data from "@/app/metadata";

export default function Technologies() {
  const ref = useRef(null);
  useCurSection(ref);

  return (
    <section
      ref={ref}
      className="max-w-[75%] mx-auto pb-24 sm:pb-32 bg-white dark:bg-black text-black dark:text-white p-8 rounded-lg"
    >
      <h2 className="text-lg md:text-xl text-center mb-6 text-orange-400 font-bold">
        My Technologies
      </h2>
      
      <div className="relative">
        <Marquee autoFill pauseOnClick gradient={false} speed={40}>
          <div className="flex gap-6 items-center">
            {data.technologies.skills.map((skill) => (
              <Link
                key={skill.name}
                href={skill.link}
                target="_blank"
                className="bg-background dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                size-[70px] md:size-[90px] flex items-center justify-center rounded-full shadow-lg 
                p-4 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Image className="h-full w-auto" src={skill.src} alt={skill.name} width={50} height={50} />
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
