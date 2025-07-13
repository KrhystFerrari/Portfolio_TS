import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Pegasus,
  iiitek,
  sifat,
  dinamometro,
  waymenu,
  bun,
  mui,
} from "../assets/index";
import { translations } from "./translations";
import type { NavLink, Service, Technology, Experience, Project } from "../types";
import type { Language } from "../context/LanguageContext";

export const getNavLinks = (language: Language): NavLink[] => [
  {
    id: "about",
    title: translations[language].nav.about,
  },
  {
    id: "work",
    title: translations[language].nav.projects,
  },
  {
    id: "contact",
    title: translations[language].nav.contact,
  },
];

export const getServices = (language: Language): Service[] => [
  {
    title: translations[language].about.services.softwareEngineer,
    icon: web,
  },
  {
    title: translations[language].about.services.softwareArchitect,
    icon: backend,
  },
  {
    title: translations[language].about.services.softwareDeveloper,
    icon: mobile,
  },
  {
    title: translations[language].about.services.techLead,
    icon: creator,
  },
];

const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const getExperiences = (language: Language): Experience[] => [
  {
    title: translations[language].experience.experiences.pegasus.title,
    company_name: "Pegasus Pro",
    icon: Pegasus,
    iconBg: "#E6DEDD",
    date: (() => {
      if (language === "pt") return "Setembro 2017 - Junho 2020";
      if (language === "en") return "September 2017 - June 2020";
      return "Septiembre 2017 - Junio 2020";
    })(),
    points: translations[language].experience.experiences.pegasus.points,
  },
  {
    title: translations[language].experience.experiences.iiitek.title,
    company_name: "IIItek Technology",
    icon: iiitek,
    iconBg: "#383E56",
    date: (() => {
      if (language === "pt") return "Junho 2020 - Março 2024";
      if (language === "en") return "June 2020 - March 2024";
      return "Junio 2020 - Marzo 2024";
    })(),
    points: translations[language].experience.experiences.iiitek.points,
  },
  {
    title: translations[language].experience.experiences.sifat.title,
    company_name: "Grupo SIFAT",
    icon: sifat,
    iconBg: "#383E56",
    // Extracted ternary operation into an independent statement
    date: (() => {
      if (language === "pt") return "Março 2024 - Agosto 2024";
      if (language === "en") return "March 2024 - August 2024";
      return "Marzo 2024 - Agosto 2024";
    })(),
    points: translations[language].experience.experiences.sifat.points,
  },
];

export const getProjects = (language: Language): Project[] => [
  {
    name: "WayMenu",
    description: translations[language].projects.items.waymenu.description,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Material-UI",
        color: "pink-text-gradient",
      },
    ],
    image: waymenu,
    source_code_link: "https://sifat.com.br/waymenu/",
  },
  {
    // Extracted ternary operation into an independent statement
    name: (() => {
      if (language === "pt") return "Backend Bun e Clean-Arch";
      if (language === "en") return "Bun Backend & Clean-Arch";
      return "Backend Bun y Clean-Arch";
    })(),
    description: translations[language].projects.items.bunBackend.description,
    tags: [
      {
        name: "Bun",
        color: "blue-text-gradient",
      },
      {
        name: "Elysia",
        color: "green-text-gradient",
      },
      {
        name: "Prisma ORM",
        color: "pink-text-gradient",
      },
    ],
    image: bun,
    source_code_link: "https://github.com/KrhystFerrari/Backend-Bun-Elysia-Prisma-Clean-Arch",
  },
  {
    name: (() => {
      if (language === "pt") return "Software Dinamômetro Pegasus Pro";
      if (language === "en") return "Pegasus Pro Dynamometer Software";
      return "Software Dinamómetro Pegasus Pro";
    })(),
    description: translations[language].projects.items.dynamometer.description,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: dinamometro,
    source_code_link: "https://home.pegasuspro.com.br/",
  },
];

export { technologies };
