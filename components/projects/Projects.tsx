"use client";

import ProjectsData from "@/data/projects";
import Image from "next/image";

import { useState } from "react";

const Projects = ({ ...props }) => {
  const [index, setIndex] = useState(null);
  const [toggleShadow, setToggleShadow] = useState(false);

  const handleMouseEnter = (i: Number) => {
    setIndex(i);
    setToggleShadow(true);
  };

  const handleMouseLeave = () => {
    setToggleShadow(false);
    setIndex(null);
  };

  return (
    <div {...props}>
      <p>Projects</p>
      <div className="w-full flex flex-col items-center md:grid md:grid-cols-2 md:justify-items-center gap-10 ">
        {ProjectsData.map((project, i) => {
          const { title, category, image } = project;

          return (
            <div key={i} className="w-96 sm_lap:w-72 flex flex-col gap-4">
              <div className="transition-all duration-1000 relative h-[420px] sm_lap:h-80 rounded-xl ">
                <Image
                  src={image}
                  alt="portfolio"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="portfolio_title">{title}</p>
                <p className="portfolio_category">({category})</p>
              </div>

              <div
                className={`${
                  toggleShadow && i === index && "gradient_link_shadow"
                } mx-auto rounded-lg px-6 py-2 w-max gradient_link text-white duration-200 cursor-pointer`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                View Full Detail
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
