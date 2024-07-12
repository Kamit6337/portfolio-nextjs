import { TfiHtml5 } from "react-icons/tfi";
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiReactrouter,
  SiReactquery,
  SiReacthookform,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { GoFileMedia } from "react-icons/go";
import { SiSocketdotio } from "react-icons/si";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { DiJavascript } from "react-icons/di";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsDashLg } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";
import { FaLinkedin, FaGithub, FaStripe } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { TbSeo } from "react-icons/tb";

const ReactIcons = {
  seo: <TbSeo />,
  upArrow: <IoIosArrowUp />,
  stripe: <FaStripe />,
  mail: <IoMail />,
  github: <FaGithub />,
  linkedIn: <FaLinkedin />,
  nextjs: <SiNextdotjs />,
  dash: <BsDashLg />,
  arrowRight: <FaArrowRightLong />,
  cancel: <MdOutlineCancel />,
  hamburger: <RxHamburgerMenu />,
  email: <MdEmail />,
  twitter: <BsTwitterX />,
  html: <TfiHtml5 className="text-orange-500" />,
  nodejs: <FaNodeJs className="text-green-500" />,
  express: <SiExpress />,
  mongodb: <SiMongodb className="text-green-600" />,
  jsonwebtoken: <SiJsonwebtokens />,
  multimedia: <GoFileMedia />,
  socketIO: <SiSocketdotio />,
  userAdmin: <GrUserAdmin />,
  css: <FaCss3Alt className="text-sky-600" />,
  javascript: <DiJavascript className="text-yellow-500" />,
  reactjs: <FaReact className="text-sky-500" />,
  reactRouter: <SiReactrouter />,
  reactQuery: <SiReactquery className="" />,
  reactHookForm: <SiReacthookform />,
  redux: <SiRedux className="text-purple-500" />,
  tailwind: <SiTailwindcss className="text-sky-500" />,
};

export default ReactIcons;
