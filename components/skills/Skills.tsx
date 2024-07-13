import { skillsList } from "@/constants";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const Skills = ({ ...props }) => {
  return (
    <div {...props} className="section_padding pb-40">
      <div className="text-center space-y-2 mb-16">
        <p className="section_title">My Skills</p>
        <p>I&apos;m a Full Stack Web Developer in MERN Stack and Next JS</p>
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={skillsList} />
      </div>
    </div>
  );
};

export default Skills;
