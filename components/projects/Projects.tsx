"use client";

import ProjectsData from "@/data/projects";
import Image from "next/image";

import { useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import SingleProject from "./SingleProject";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const Projects = ({ ...props }) => {
  const [index, setIndex] = useState<number | null>(null);
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
    <div {...props} className="pb-40 md:px-10 lg:px-20">
      <div className="text-center space-y-2">
        <p className="section_title">Projects</p>
        <p className="section_intro px-2">
          Projects cover MERN Stack with Next JS, both are popular framework for
          making industry level, well developed and scalable Full-Stack Web Apps
        </p>
      </div>

      <div className="w-full flex flex-col items-center sm:grid sm:grid-cols-2 sm:justify-items-center md:gap-y-0 ">
        {ProjectsData.map((project, i) => {
          const { title, category, image } = project;

          return (
            <CardContainer className="inter-var" key={i}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl border lg:w-96 md:w-[350px] w-72 flex flex-col gap-4 items-center pb-10">
                <CardItem
                  translateZ="60"
                  className="md:h-[420px] h-80 rounded-xl"
                >
                  <Image
                    src={image}
                    alt="portfolio"
                    className="w-full h-full object-cover rounded-xl rounded-b-none"
                  />
                </CardItem>
                <CardItem
                  translateZ="100"
                  className="flex flex-col justify-center items-center gap-1"
                >
                  <p className="portfolio_title">{title}</p>
                  <p className="portfolio_category">({category})</p>
                </CardItem>

                <CardItem as={"button"} translateZ="100">
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
                </CardItem>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
