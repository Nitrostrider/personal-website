import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import profilepic from "./assets/profile_pic.jpg";
import { SiDevpost } from "react-icons/si";

const icons = [
  {
    icon: <FaEnvelope size={14} />,
    href: "mailto:maxwelly@seas.upenn.edu",
    name: "Email",
  },
  {
    icon: <FaLinkedin size={14} />,
    href: "https://www.linkedin.com/in/maxwellye",
    name: "LinkedIn",
  },
  {
    icon: <FaGithub size={14} />,
    href: "https://github.com/Nitrostrider",
    name: "Github",
  },
];
const experience = [
  {
    company: "Vero Electric",
    role: "Software Developer",
    date: "May 2024 - Present",
  },
  {
    company: "University of Pennsylvania Perelman School of Medicine",
    role: "Research Intern",
    date: "May 2024 - Present",
  },
  {
    company: "The Daily Pennsylvanian",
    role: "Analytics Engineer",
    date: "January 2024 - Present",
  },
  {
    company: "Green Key Resources",
    role: "Data Visualization Programmer (Contractor at Supernus Pharmaceuticals, Inc.",
    date: "June 2023 - July 2023",
  },
  {
    company: "Boston University Chobanian & Avedisian School of Medicine",
    role: "Research Intern",
    date: "June 2022 - June 2023",
  },
];
const projects = [
  {
    name: "PestNet WebApp",
    description: "Winner of Best Use of AI Award at Penn Apps XXV Hackathon",
    date: "September 2024",
    link: {
      icon: <SiDevpost size={14} />,
      isIcon: true,
      href: "https://devpost.com/software/pennapps-t7jkmf",
      name: "Devpost",
    },
  },
  {
    name: "Penn Course Market WebApp",
    description: "",
    date: "September 2024",
    link: {
      icon: <></>,
      isIcon: false,
      href: "https://pennlabs-appfall24.onrender.com/",
      name: "Website",
    },
  },
  {
    name: "ScioVirtual Website",
    description: "",
    date: "December 2020 - October 2023",
    link: {
      icon: <></>,
      isIcon: false,
      href: "https://www.sciovirtual.org/",
      name: "Website",
    },
  },
  {
    name: "AcademiaEdge Website",
    description: "",
    date: "October 2020 - November 2022",
    link: {
      icon: <></>,
      isIcon: false,
      href: "https://academiaedgelearning.netlify.app/",
      name: "Website",
    },
  },
  {
    name: "Straighten Up WebApp",
    description:
      "Winner of Best Overall Hack: 2nd Place at MoCoHacks Hackathon",
    date: "Fall 2021",
    link: {
      icon: <SiDevpost size={14} />,
      isIcon: true,
      href: "https://devpost.com/software/straighten-up",
      name: "Devpost",
    },
  },
];

const scroll = (id: string) => {
  const section = document.querySelector(id)!;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
  return (
    <div>
      <div className="p-3 shadow-md sticky top-0 bg-white w-full z-40">
        <h1 className="text-center text-3xl font-bold">
          Hello, I'm Maxwell Ye
        </h1>

        <div className="flex items-center justify-center p-2">
          <button
            className="px-3 hover:text-slate-400"
            onClick={() => scroll("#bio")}
          >
            About Me
          </button>{" "}
          |
          <button
            className="px-3 hover:text-slate-400"
            onClick={() => scroll("#experience")}
          >
            Experience
          </button>{" "}
          |
          <button
            className="px-3 hover:text-slate-400"
            onClick={() => scroll("#projects")}
          >
            Projects
          </button>
        </div>
        <div className="flex items-center justify-center">
          {icons.map((e, i) => {
            return (
              <a
                key={i}
                href={e.href}
                target="_blank"
                className="hover:text-slate-400 flex justify-center items-center  w-24"
              >
                {e.icon} <p className="ml-2 text-sm">{e.name}</p>
              </a>
            );
          })}
        </div>
      </div>
      {/* BODY */}
      <div className="px-5 relative max-w-4xl mx-auto">
        <div className="flex justify-center items-center my-4 scroll-mt-[132px]" id="bio">
          <div className="pr-5">
            <h1 className="text-xl font-bold pb-2">About Me</h1>
            <p className="indent-8 mb-5">
              I'm a student studying Computer Science at the University of
              Pennsylvania. On campus I'm involved in The Daily Pennsylvanian,
              Penn Band, and Machine Learning Research@Penn. I enjoy exploring
              Philadelphia (SKOOL-kil river trail, Chinatown, Benjamin Franklin
              Parkway, Clark Park Farmer's Market), running, and cooking/eating.
            </p>
          </div>
          <img src={profilepic} alt="Profile picture" className="h-52 w-auto" />
        </div>
        <div id="experience" className="my-4 scroll-mt-[132px]">
          <h1 className="text-xl font-bold pb-2">Experience</h1>
          {experience.map((e, i) => {
            return (
              <div className="flex justify-between my-1" key={i}>
                <div>
                  <p className="font-bold">{e.company}</p>
                  <p className="text-sm italic">{e.role}</p>
                </div>
                <p>{e.date}</p>
              </div>
            );
          })}
        </div>
        <div id="projects " className="my-4 scroll-mt-[132px]">
          <h1 className="text-xl font-bold pb-2">Projects</h1>
          {projects.map((e, i) => {
            return (
              <div className="flex justify-between my-1" key={i}>
                <div>
                  <p className="font-bold">{e.name}</p>
                  <p className="text-sm italic">{e.description}</p>
                  <a href={e.link.href} target="_blank" className="flex items-center text-blue-600 hover:underline">
                    {e.link.icon}
                    {e.link.isIcon && <span className="ml-2"></span>}
                    <p className="text-sm">{e.link.name}</p>
                  </a>
                </div>
                <p>{e.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
