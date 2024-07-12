import { skillsList } from "@/constants";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const Skills = ({ ...props }) => {
  return (
    <div {...props} className="section_padding h-96">
      <p>My Skills</p>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={skillsList} />
      </div>
    </div>
  );
};

export default Skills;
