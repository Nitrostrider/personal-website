import { FaEnvelope, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import profilepic from "./assets/profile_pic.jpg";
import { SiDevpost } from "react-icons/si";
import sciovirtualImage from "./assets/sciovirtual.png";
import pennCourseMarketImage from "./assets/penn_course_market.png";
import academiaedgeImage from "./assets/academiaedge.png";
import straightenUpImage from "./assets/mocohackathon.png";
import pestnetImage from "./assets/pestnet.png";
import laurtivoicstest from "./assets/laurtivoicstest.png";
import ultrasoundAppImage from "./assets/ultrasound_app.png";
import sp_dashboardImage from "./assets/spdashboard_demo.png";
import dp_dashboardImage from "./assets/dp_dashboard.png";
import verogo_dashboardImage from "./assets/verogo_dashboard.png";
import bridgecaer_websiteImage from "./assets/bridgecaer_website.png";
import nearbnbImage from "./assets/nearbnb.png";
import chessGameImage from "./assets/chessGame.png";

import { Slide } from "react-slideshow-image";

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
    company: "BAE Systems, Inc.",
    role: "Software Engineer Intern - Ground Software",
    date: "Jun 2025 - October 2025",
    location: "Broomfield, CO"
  },
  {
    company: "University of Pennsylvania",
    role: "Teaching Assistant, CIS 5500: Database and Information Systems",
    date: "August 2025 - Present",
    location: "Philadelphia, PA",
  },
  {
    company: "Vero Electric",
    role: "Software Developer",
    date: "May 2024 - June 2025",
    project: "Vero Go Dashboard",
    location: "Philadelphia, PA"
  },
  {
    company: "University of Pennsylvania Perelman School of Medicine",
    role: "Research Intern",
    date: "May 2024 - Present",
    location: "Philadelphia, PA",
  },
  {
    company: "The Daily Pennsylvanian",
    role: "Analytics Engineer",
    date: "January 2024 - Present",
    project: "DP Dashboard",
    location: "Philadelphia, PA",
  },
  {
    company: "Green Key Resources",
    role: "Data Visualization Programmer (Contractor at Supernus Pharmaceuticals, Inc.)",
    date: "June 2023 - July 2023",
    project: "Clinical Trials Dashboard",
    location: "Rockville, MD",
  },
  {
    company: "Boston University Chobanian & Avedisian School of Medicine",
    role: "Research Intern",
    date: "June 2022 - June 2023",
    project: "Ultrasound IOS App",
    location: "Boston, MA",
  },
];
const projects = [
  {
    name: "BridgeCaER",
    description:
      "Healthcare/software startup in the works, and I'm a founding engineer. Checkout our website for more information about our product!",
    date: "March 2025 - Present",
    stack: ["AWS", "React", "TypeScript", "Python", "SQL"],
    image: [bridgecaer_websiteImage],
    link: [
      {
        icon: <FaLink size={14} />,
        isIcon: true,
        href: "https://www.bridgecaer.org/",
        name: "bridgecaer.org",
      },
    ]
  },
  {
    name: "NearBnb",
    description:
    "Website to find the best Airbnb based on nearby amentities. Uses Postgres RDS and Typescript, as the final project for CIS 5500.",
    date: "May 2025",
    stack: ["AWS", "React", "Python", "SQL"],
    image: [nearbnbImage],
    link: [],
  },
  {
    name: "Vero Go Dashboard",
    description:
      "Dashboard for customers with user authentication, payments with Stripe, and visualizations of battery management system info.",
    date: "May 2024 - June 2025",
    stack: ["React", "TypeScript", "PHP", "SQL"],
    image: [verogo_dashboardImage],
    link: [],
  },
  {
    name: "DP Dashboard",
    description:
      "A internal dashboard with data analytics and visualizations through the Google Analytics API for The Daily Pennsylvanian business department.",
    date: "Jan 2024 - Jan 2025",
    stack: ["React", "TypeScript", "Flask", "Python"],
    image: [dp_dashboardImage],
    link: [],
  },
  {
    name: "PestNet Web App",
    award: "Winner of Best Use of AI Award at Penn Apps XXV Hackathon",
    description:
      "Web app that outputs timestamps of insect dection based on video using Roboflow inference API computer vision model.",
    date: "Sep 2024",
    stack: ["TypeScript", "React", "Python", "Roboflow", "FastAPI"],
    image: [pestnetImage],
    link: [
      {
        icon: <SiDevpost size={14} />,
        isIcon: true,
        href: "https://devpost.com/software/pennapps-t7jkmf",
        name: "Devpost",
      },
      {
        icon: <FaGithub size={14} />,
        isIcon: true,
        href: "https://github.com/wesleyyliu/pennapps25",
        name: "Github",
      },
    ],
  },
  {
    name: "Penn Course Market Website",
    award: "",
    description:
      "Website to view Penn CIS courses with fuzzy searching and intuitive user experience for viewing course ratings.",
    date: "Sep 2024",
    stack: ["React", "TypeScript"],
    image: [pennCourseMarketImage],
    link: [
      {
        icon: <FaLink size={14} />,
        isIcon: false,
        href: "https://pennlabs-appfall24.onrender.com/",
        name: " Website",
      },
    ],
  },
  {
    name: "Chess Game",
    description:
      "Fully functional chess game created with Java Swing GUI, as the final project for CIS 1200.",
    date: "Dec 2023",
    stack: ["Java"],
    image: [chessGameImage],
    link: [],
  },
  {
    name: "ScioVirtual Website",
    description:
      "Website for national educational nonprofit led by students for teaching science courses to middle schoolers.",
    date: "Dec 2020 - Oct 2023",
    stack: ["Webflow", "JavaScript", "JQuery", "HTML", "CSS"],
    image: [sciovirtualImage, laurtivoicstest],
    captions: ["The official website", "Website 1.0"],
    link: [
      {
        icon: <></>,
        isIcon: false,
        href: "https://www.sciovirtual.org/",
        name: "Official Website",
      },
      {
        icon: <></>,
        isIcon: false,
        href: "https://laurtivoicstest.netlify.app/",
        name: "Website 1.0",
      },
    ],
  },
  {
    name: "Clinical Trials Dashboard",
    description:
      "Dashboard prototype (PowerBI -esque) for pharmaceutical company's R&D team.",
    date: "June 2023- July 2023",
    stack: ["JavaScript", "D3", "HTML", "CSS"],
    image: [sp_dashboardImage],
    link: [],
  },
  {
    name: "Ultrasound IOS App",
    description:
      "Mobile app utilizing phone's gryoscope to simulate motion of the ultrasound transducer for the education of medical students. Presented poster about this at IAMSE Conference 2023.",
    date: "June 2022 - July 2023",
    stack: ["React Native", "Expo"],
    image: [ultrasoundAppImage],
    link: [],
  },
  {
    name: "AcademiaEdge Website",
    description:
      "Website for educational nonprofit delivering coding courses for middle schoolers.",
    date: "Oct 2020 - Nov 2022",
    stack: ["JavaScript", "JQuery", "HTML", "CSS"],
    image: [academiaedgeImage],
    link: [
      {
        icon: <></>,
        isIcon: false,
        href: "https://academiaedgelearning.netlify.app/",
        name: "Website",
      },
      {
        icon: <FaGithub size={14} />,
        isIcon: true,
        href: "https://github.com/Nitrostrider/AcademiaEdge-Website",
        name: "Github",
      },
    ],
  },
  {
    name: "Straighten Up WebApp",
    award: "Winner of Best Overall Hack: 2nd Place at MoCoHacks Hackathon",
    date: "Oct 2021",
    stack: ["Teachable Machine (Google)", "JavaScript", "HTML", "CSS"],
    image: [straightenUpImage],
    link: [
      {
        icon: <SiDevpost size={14} />,
        isIcon: true,
        href: "https://devpost.com/software/straighten-up",
        name: "Devpost",
      },
      {
        icon: <FaGithub size={14} />,
        isIcon: true,
        href: "https://github.com/Nitrostrider/straighten-up",
        name: "Github",
      },
    ],
  },
];

const properties = {
  prevArrow: (
    <button className=" w-[30px]" style={{ left: "-30px" }}>
      <svg width="24" fill="black" height="24" viewBox="0 0 24 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ right: "-30px" }}>
      <svg width="24" fill="black" height="24" viewBox="0 0 24 24">
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    </button>
  ),
};

const scroll = (id: string) => {
  const section = document.querySelector(id)!;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
  return (
    <div>
      <div className="p-3 shadow-md sticky top-0 bg-white w-full z-40">
        <h1 className="text-center text-3xl font-bold">
          Hello World, I'm Maxwell Ye
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
      <div className="px-5 relative max-w-5xl mx-auto">
        <div
          className="flex justify-center items-center my-4 scroll-mt-[132px]"
          id="bio"
        >
          <div className="pr-5">
            <h1 className="text-3xl font-bold pb-2">About Me</h1>
            <p className="indent-8 mb-5">
              I'm a student pursuing a Bachelors and Masters in Computer Science at the University of
              Pennsylvania. On campus I'm involved in the Penn Band as Clarinetist, a member of the Penn Band Fanfare Honor Society, a CIS 5500 Databases TA, and an Engineering Orientation Peer Advisor. I enjoy exploring
              Philadelphia (SKOOL-kil river trail, Chinatown, Benjamin Franklin
              Parkway, Clark Park Farmer's Market), running, and cooking/eating.
            </p>
            <p className="indent-8 mb-5">Currently, I'm working on a startup called <button
              className=" hover:underline text-[#e92737]"
              onClick={() => {
                scroll("#BridgeCaER");
              }}
            >
              BridgeCaER
            </button> to help doctors and social workers better connect patients with resources.</p>
          </div>
          <img src={profilepic} alt="Profile picture" className="h-52 w-auto rounded" />
        </div>
        <div id="experience" className="my-4 scroll-mt-[132px]">
          <h1 className="text-3xl font-bold pb-2">Experience</h1>
          {experience.map((e, i) => {
            return (
              <div className="my-2" key={i}>
                <div className="flex justify-between">
                  <p className="font-bold">{e.company}</p>
                  <p>{e.date}</p>
                </div>
                <div className="flex justify-between">
                  <p className="italic">{e.role}</p>
                  <p className="italic">{e.location}</p>
                </div>

                {e.project && (
                  <button
                    className="text-gray-500 text-sm hover:text-gray-300"
                    onClick={() => {
                      var id = "#" + e.project.replace(/\s+/g, '');
                      scroll(id);
                    }}
                  >
                    Project
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <div id="projects" className="my-4 scroll-mt-[132px]">
          <h1 className="text-3xl font-bold pb-2">Projects</h1>
          {projects.map((e, i) => {
            return (
              <div id={e.name.replace(/\s+/g, '')} className="sm:flex w-full scroll-mt-[132px]">
                <div
                  className="flex sm:w-1/2 items-center"
                  style={{ order: i % 2 == 0 ? 0 : 1 }}
                >
                  <div className="my-1 w-full" key={i}>
                    <div>
                      <div className="md:flex justify-between ">
                        <p className="font-bold">{e.name}</p>
                        <p>{e.date}</p>
                      </div>
                      <p>
                        {e.stack.map((skill, j) => {
                          return (
                            <span
                              key={j}
                              className="text-sm mr-2 bg-slate-200 "
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </p>

                      <p className="text-sm italic">{e.award}</p>
                      <p className="mt-2">{e.description}</p>

                      <div className="flex">
                        {e.link.map((l, j) => {
                          return (
                            <a
                              key={j}
                              href={l.href}
                              target="_blank"
                              className="flex items-center text-blue-600 hover:underline mr-4"
                            >
                              {l.icon}
                              {l.isIcon && <span className="ml-1"></span>}
                              <p className="text-sm">{l.name}</p>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/2 py-3 px-10">
                  {e.image.length > 1 && (
                    <Slide {...properties}>
                      {e.image.map((img, k) => {
                        return (
                          <div key={k}>
                            <img
                              src={img}
                              className="rounded border border-slate-300 shadow-md"
                            />
                            {e.captions && (
                              <p className="text-center">{e.captions[k]}</p>
                            )}
                          </div>
                        );
                      })}
                    </Slide>
                  )}
                  {e.image.length == 1 && (
                    <div>
                      <img
                        src={e.image[0]}
                        className="rounded border border-slate-300 shadow-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
