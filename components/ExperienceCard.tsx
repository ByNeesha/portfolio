import Image from "next/image";
import React from "react";
import Avans from "../images/Avans.png";
import Github from "../images/Github.svg";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] snap-center p-5 bg-gray-100 hover:opacity-100 opacity-25 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="h-32 w-32 rounded-full object-cover object-center"
          src={Avans}
          alt="Logo"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Studente Informatica</h4>
        <p className="font-bold text-2xl mt-1">Avans Hogeschool</p>
        <div className="flex space-x-2 my-2">
          <Image className="h-10 w-10 rounded-full" src={Github} alt="Logo" />
          <Image className="h-10 w-10 rounded-full" src={Github} alt="Logo" />
          <Image className="h-10 w-10 rounded-full" src={Github} alt="Logo" />
        </div>
        <p className="uppercase py-5 text-gray-300">2022 - heden</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>
      </div>
    </article>
  );
}
