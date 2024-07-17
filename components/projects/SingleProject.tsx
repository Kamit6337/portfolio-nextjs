import { DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import ReactIcons from "@/assets/icons";

type Project = {
  title: string;
  category: string;
  image: any;
  details: string[];
  icons: { name: string; icon: React.ReactNode }[];
  github: string;
  preview: string;
};

const SingleProject = ({ project }: { project: Project }) => {
  const { title, category, image, details, icons, github, preview } = project;

  return (
    <DialogContent className="md:max-w-4xl">
      <div className="flex gap-10 ">
        <div className="w-2/5 hidden md:flex md:flex-col space-y-10">
          <div className="w-full ">
            <Image
              src={image}
              alt="portfolio"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <a href={github} target="_blank" rel="noreferrer">
              <p className="flex justify-center items-center text-xl py-2 border rounded ">
                {ReactIcons.github}
              </p>
            </a>
            <a href={preview} target="_blank" rel="noreferrer">
              <div
                className={`hover:gradient_link_shadow text-center rounded py-2 cursor-pointer gradient_link text-white duration-200`}
              >
                Preview
              </div>
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div>
            <p className="portfolio_title">{title}</p>
            <p className="portfolio_category">({category})</p>
          </div>
          <div className="mt-4 mb-8">
            <p className="text-gray-500 sm_lap:text-sm">Details :</p>
            {details.map((detail, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-1 pl-6 text-xs md:text-sm tracking-wide text-gray-500 mb-1"
                >
                  <p className="pt-1">{ReactIcons.dash}</p>
                  <p>{detail}</p>
                </div>
              );
            })}
          </div>
          <div className="sm:flex gap-5 flex-wrap hidden">
            {icons.map((obj, i) => {
              const { name, icon } = obj;

              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-between gap-1"
                >
                  <p className="text-2xl">{icon}</p>
                  <p className="text-xs">{name}</p>
                </div>
              );
            })}
          </div>
          <div className="md:hidden grid grid-cols-2 gap-x-2 mt-6">
            <a href={github} target="_blank" rel="noreferrer">
              <p className="flex justify-center items-center text-xl py-2 border rounded ">
                {ReactIcons.github}
              </p>
            </a>
            <a href={preview} target="_blank" rel="noreferrer">
              <div
                className={`hover:gradient_link_shadow text-center rounded py-2 cursor-pointer gradient_link text-white duration-200`}
              >
                Preview
              </div>
            </a>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default SingleProject;
