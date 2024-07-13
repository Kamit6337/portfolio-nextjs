"use client";

import ProjectsData from "@/data/projects";
import Image from "next/image";

import { useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import SingleProject from "./SingleProject";

const Projects = ({ ...props }) => {
  const [index, setIndex] = useState(null);
  const [toggleShadow, setToggleShadow] = useState(false);

  const handleMouseEnter = (i: number) => {
    setIndex(i);
    setToggleShadow(true);
  };

  const handleMouseLeave = () => {
    setToggleShadow(false);
    setIndex(null);
  };

  return (
    <div {...props} className="section_padding pb-40">
      <div className="text-center space-y-2 mb-20">
        <p className="section_title">Projects</p>
        <p className="text-sm tracking-wide">
          Projects cover MERN Stack with Next JS, both are popular framework for
          making industry level, well developed and scalable Full-Stack Web Apps
        </p>
      </div>
      <div className="w-full flex flex-col gap-32 items-center md:grid md:grid-cols-2 md:justify-items-center md:gap-y-32 ">
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

              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className={`${
                      toggleShadow && i === index && "gradient_link_shadow"
                    } mx-auto rounded-lg px-6 py-2 w-max gradient_link text-white duration-200 cursor-pointer`}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                  >
                    View Full Detail
                  </div>
                </DialogTrigger>
                <SingleProject project={project} />
              </Dialog>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
