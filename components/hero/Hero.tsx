import Image from "next/image";
import { Meteors } from "../ui/meteors";
import CustomImages from "@/assets/images";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Hero = ({ ...props }) => {
  const para = "A Full Stack Web Developer in MERN and Next JS";
  const newWords = para.split(" ").map((el) => ({ text: el }));

  return (
    <div className="h-screen relative section_padding " {...props}>
      <div className="h-full">
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
        <p className="font-semibold tracking-wider mt-3">Hi, I&apos;m</p>
        <TextGenerateEffect
          words={"Amit Kumar"}
          className="uppercase text-5xl tracking-wide font-bold"
        />
        <div className="hidden sm:flex">
          <TypewriterEffectSmooth
            words={newWords}
            className="text-center font-semibold tracking-wider mt-3 uppercase"
          />
        </div>
        <p className="sm:hidden text-center font-semibold tracking-wider mt-3 uppercase">
          {para}
        </p>
      </div>
    </div>
  );
};

export default Hero;
