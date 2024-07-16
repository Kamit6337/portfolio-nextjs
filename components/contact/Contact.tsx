import ReactIcons from "@/assets/icons";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
});
const EMAIL = "amitprofessional007@gmail.com";
const social_profile = [
  {
    title: "LinkedIn",
    icon: ReactIcons.linkedIn,
    link: "https://www.linkedin.com/in/amit-kumar-505084259/",
  },
  {
    title: "Github",
    icon: ReactIcons.github,
    link: "https://github.com/Kamit6337",
  },
  {
    title: "Mail",
    icon: ReactIcons.mail,
    link: `mailto:${EMAIL}`,
  },
];
const Contact = ({ ...props }) => {
  const location = { latitude: 25.266497, longitude: 82.989469 };

  return (
    <main {...props}>
      <p>Contact</p>
      <div className="h-[500px] w-full z-0">
        <MapComponent
          latitude={location.latitude}
          longitude={location.longitude}
        />
      </div>
      <div className="section_padding mt-40 mb-20 flex flex-col  items-center justify-center w-full">
        <div className="flex items-center gap-5">
          {social_profile.map((obj, i) => {
            const { icon, link, title } = obj;

            return (
              <a href={link} target="_blank" rel="noreferrer" key={i}>
                <div className="rounded-full p-4 bg-slate-700 text-3xl">
                  {icon}
                </div>
              </a>
            );
          })}
        </div>
        <p className="md:text-4xl text-3xl font-bold tracking-wide mt-20 mb-6">
          Contact Me
        </p>
        <p className="md:text-2xl text-xl  font-semibold tracking-wider">
          {EMAIL}
        </p>
      </div>
    </main>
  );
};

export default Contact;
