import Image from "next/image";
import { Meteors } from "../ui/meteors";
import CustomImages from "@/assets/images";

const Hero = ({ ...props }) => {
  return (
    <div className="h-screen relative " {...props}>
      <div className="h-full flex justify-center items-center">
        <Meteors className="" number={50} />
      </div>
      <div className="absolute z-10 top-0 left-0 h-full w-full flex flex-col justify-center items-center section_padding">
        <Image
          src={CustomImages.profile}
          alt="profile"
          height={200}
          width={200}
          className="rounded-full border border-slate-400"
        />
        <p className="mt-2 ">Hi, I&apos;m</p>
        <p className="uppercase text-4xl">Amit Kumar</p>
        <p className="text-center text-xs tracking-wider mt-3">
          A PROFICIENT IN HIS SKILL AND WOULD LOVE TO COLLABORATE WITH OTHER
          PEOPLES TO MAKE A BIG THING.
        </p>
      </div>
    </div>
  );
};

export default Hero;
