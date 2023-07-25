import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Picture from "../images/Neesha-1.jpeg";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Over mij
      </h3>
      <motion.div
        className="relative "
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="relative rounded-full h-56 w-56 mx-auto object-cover -mb-20 md:mb-0 flex-shrink-0 md:rounded-lg md:w-80 md:h-80"
          src={Picture}
          alt="Foto Neesha"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Een <span className="underline decoration-green-500/50">stukje</span>{" "}
          over mij
        </h4>
        <p className="text-base">
          Ik ben een 27-jarige studente Informatica die 10 jaar geleden nooit
          had gedacht om software developer te worden. In 2012 ben ik namelijk
          begonnen aan de MBO-opleiding Bedrijfsadministratie, die ik
          uiteindelijk in 2015 heb afgerond. Na een aantal bijbaantjes heb ik er
          toen voor besloten om fulltime te gaan werken. Ik kwam in 2018 terecht
          bij mijn huidige werkgever en zit hier echt op mijn plek, maar helaas
          niet meer qua werkzaamheden. Ergens begon het toch te kriebelen om
          iets anders te gaan doen en heb ik in 2022 besloten om eens gek te
          doen.. ik ging voor Informatica i.p.v. bijvoorbeeld Accountancy. Nu
          zit ik hier, een jaar later in mijn laatste jaar van mijn HBO-Ad
          opleiding op zoek naar de switch in mijn carrière: een baan als
          software developer!
        </p>
      </div>
    </motion.div>
  );
}
