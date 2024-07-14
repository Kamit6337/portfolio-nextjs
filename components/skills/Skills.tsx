import { skillsList } from "@/constants";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const Skills = ({ ...props }) => {
  return (
    <div {...props} className="section_padding mb-72">
      <div className="text-center space-y-2 mb-32">
        <p className="section_title">My Skills</p>
        <p className="section_intro ">
          A proficient in his skill and would love to collaborate with other
          peoples to make a big thing
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={skillsList} />
      </div>
    </div>
  );
};

export default Skills;
