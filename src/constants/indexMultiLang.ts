import {
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
  nous,
  sbt,
  dinamometro,
  waymenu,
  mui,
  ecommerce,
  caravanas,
  gss,
  siteIiitek,
  a3,
  agritech,
  thevoice,
  sbtdobem,
  uikit,
  premiado,
  relayout,
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
    id: "experience",
    title: translations[language].nav.experience,
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
    title: translations[language].about.services.frontendEngineer.title,
    description: translations[language].about.services.frontendEngineer.description,
    icon: web,
  },
  {
    title: translations[language].about.services.frontendDeveloper.title,
    description: translations[language].about.services.frontendDeveloper.description,
    icon: backend,
  },
  {
    title: translations[language].about.services.frontendConsultant.title,
    description: translations[language].about.services.frontendConsultant.description,
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
    iconBg: "#0e4c89",
    // Extracted ternary operation into an independent statement
    date: (() => {
      if (language === "pt") return "Março 2024 - Agosto 2024";
      if (language === "en") return "March 2024 - August 2024";
      return "Marzo 2024 - Agosto 2024";
    })(),
    points: translations[language].experience.experiences.sifat.points,
  },
  {
    title: translations[language].experience.experiences.nous.title,
    company_name: "Noûs | SBT Lab",
    icon: nous,
    secondaryIcon: sbt,
    iconBg: "#000000",
    date: (() => {
      if (language === "pt") return "Setembro 2024 - Presente";
      if (language === "en") return "September 2024 - Present";
      return "Septiembre 2024 - Presente";
    })(),
    points: translations[language].experience.experiences.nous.points,
  },
];

export const getProjects = (language: Language): Project[] => [
  {
    name: (() => {
      if (language === "pt") return "The Voice Brasil 2025 - SBT";
      if (language === "en") return "The Voice Brasil 2025 - SBT";
      return "The Voice Brasil 2025 - SBT";
    })(),
    description: translations[language].projects.items.theVoiceBrasil2025.description,
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: thevoice,
    source_code_link: "https://thevoicebrasil.sbt.com.br/",
  },
  {
    name: (() => {
      if (language === "pt") return "Redesign Portais SBT";
      if (language === "en") return "SBT Portals Redesign";
      return "Rediseño Portales SBT";
    })(),
    description: translations[language].projects.items.sbtPortalsRelayout.description,
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Design System",
        color: "pink-text-gradient",
      },
    ],
    image: relayout,
    source_code_link: "https://www.sbt.com.br",
  },
  {
    name: (() => {
      if (language === "pt") return "SBT UI Kit";
      if (language === "en") return "SBT UI Kit";
      return "SBT UI Kit";
    })(),
    description: translations[language].projects.items.sbtUIKit.description,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Storybook",
        color: "pink-text-gradient",
      },
    ],
    image: uikit,
    source_code_link: "#",
  },
  {
    name: (() => {
      if (language === "pt") return "SBT Premiado";
      if (language === "en") return "SBT Premiado";
      return "SBT Premiado";
    })(),
    description: translations[language].projects.items.sbtPremiado.description,
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "API Integration",
        color: "pink-text-gradient",
      },
    ],
    image: premiado,
    source_code_link: "#",
  },
  {
    name: (() => {
      if (language === "pt") return "SBT do Bem";
      if (language === "en") return "SBT do Bem";
      return "SBT do Bem";
    })(),
    description: translations[language].projects.items.sbtDoBem.description,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: sbtdobem,
    source_code_link: "#",
  },
  {
    name: (() => {
      if (language === "pt") return "Portal Caravanas - SBT";
      if (language === "en") return "Caravanas Portal - SBT";
      return "Portal Caravanas - SBT";
    })(),
    description: translations[language].projects.items.sbtCaravanas.description,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: caravanas,
    source_code_link: "https://tv.sbt.com.br/inscricoes",
  },
  {
    name: (() => {
      if (language === "pt") return "Site GSS - Grupo Silvio Santos";
      if (language === "en") return "GSS Website - Grupo Silvio Santos";
      return "Sitio GSS - Grupo Silvio Santos";
    })(),
    description: translations[language].projects.items.gssWebsite.description,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gss,
    source_code_link: "#",
  },
  {
    name: (() => {
      if (language === "pt") return "Marketplace E-commerce";
      if (language === "en") return "E-commerce Marketplace";
      return "Marketplace E-comercio";
    })(),
    description: translations[language].projects.items.marketplace.description,
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "tRPC",
        color: "green-text-gradient",
      },
      {
        name: "Payload CMS",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:
      "https://github.com/KrhystFerrari/Marketplace-with-Next.js-14-tRPC-TS-Payload-Tailwind-CSS-MongoDB-e-mais",
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
  {
    name: (() => {
      if (language === "pt") return "AgriTech 4.0 - IIItek";
      if (language === "en") return "AgriTech 4.0 - IIItek";
      return "AgroTech 4.0 - IIItek";
    })(),
    description: translations[language].projects.items.agritech.description,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "IoT",
        color: "green-text-gradient",
      },
      {
        name: "Data Analytics",
        color: "pink-text-gradient",
      },
    ],
    image: agritech,
    source_code_link: "#",
  },
  {
    name: (() => {
      if (language === "pt") return "Site Institucional IIItek";
      if (language === "en") return "IIItek Institutional Website";
      return "Sitio Institucional IIItek";
    })(),
    description: translations[language].projects.items.iiitekWebsite.description,
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: siteIiitek,
    source_code_link: "https://iiitek.com.br",
  },
  {
    name: (() => {
      if (language === "pt") return "Site Grupo A3";
      if (language === "en") return "Grupo A3 Website";
      return "Sitio Grupo A3";
    })(),
    description: translations[language].projects.items.grupoA3.description,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Material-UI",
        color: "pink-text-gradient",
      },
    ],
    image: a3,
    source_code_link: "#",
  },
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
];

export { technologies };
