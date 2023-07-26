import React from "react";
import Image from "next/image";
import Avans from "../images/Avans.png";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <Image src={Avans} alt="Logo" className="h-50 w-50" />
            <div>
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-green-500/50">
                  Project
                </span>{" "}
                {i + 1} van {projects.length}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-green-500/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
