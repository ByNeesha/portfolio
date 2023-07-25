import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import ProfilePicture from "../images/Neesha.jpeg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hoi, mijn naam is Neesha",
      "Ik ben studente Informatica",
      "#omscholer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={ProfilePicture}
        alt="Profielfoto Neesha"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-4 tracking-[15px]">
          Software Developer Studente
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="green" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Over mij</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Ervaring</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projecten</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
