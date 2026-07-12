import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaPhp,
  FaReact,
  FaBootstrap,
  FaLaravel,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiCodeigniter,
  SiStreamlit,
  SiComposer,
} from "react-icons/si";

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "text-sky-500",
      },
      {
        name: "PHP",
        icon: FaPhp,
        color: "text-indigo-400",
      },
      {
        name: "C++",
        icon: null,
      },
    ],
  },

  {
    title: "Frameworks",
    items: [
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "text-purple-500",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-sky-400",
      },
      {
        name: "Laravel",
        icon: FaLaravel,
        color: "text-red-500",
      },
      {
        name: "CodeIgniter",
        icon: SiCodeigniter,
        color: "text-orange-500",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Streamlit",
        icon: SiStreamlit,
        color: "text-red-400",
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
      },
      {
        name: "Composer",
        icon: SiComposer,
        color: "text-amber-500",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-violet-400",
      },
      {
        name: "PhpMyAdmin",
        icon: null,
      },
    ],
  },

  {
    title: "Concepts",
    items: [
      {
        name: "REST API",
        icon: null,
      },
      {
        name: "MVC Architecture",
        icon: null,
      },
      {
        name: "Object-Oriented Programming",
        icon: null,
      },
    ],
  },
];
