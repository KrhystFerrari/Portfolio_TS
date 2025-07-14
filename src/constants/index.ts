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
  nous,
  dinamometro,
  waymenu,
  bun,
  mui,
} from "../assets/index";

import type { NavLink, Service, Technology, Experience, Project } from "../types";

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services: Service[] = [
  {
    title: "Engenheiro de Software",
    icon: web,
  },
  {
    title: "Arquiteto de Software",
    icon: backend,
  },
  {
    title: "Desenvolvedor de Software",
    icon: mobile,
  },
  {
    title: "Head de Tecnologia",
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

const experiences: Experience[] = [
  {
    title: "Desenvolvedor Web/IoT",
    company_name: "Pegasus Pro",
    icon: Pegasus,
    iconBg: "#E6DEDD",
    date: "Setembro 2017 - Junho 2020",
    points: [
      "Desenvolvimento e manutenção de aplicações web utilizando HTML, CSS, JavaScript e outras tecnologias relacionadas.",
      "Desenvolvimento e manutenção do software do dinamômetro Pegasus Pro em linguagem C junto ao micro-controlador ESP-32 da Espressif.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
    ],
  },
  {
    title: "Engenheiro de Software/Head de Tecnologia",
    company_name: "IIItek Technology",
    icon: iiitek,
    iconBg: "#383E56",
    date: "Junho 2020 - Março 2024",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js, Next.js e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Gestão das equipes de desenvolvimento.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "Coordenador de Desenvolvimento",
    company_name: "Grupo SIFAT",
    icon: sifat,
    iconBg: "#383E56",
    date: "Março 2024 - Agosto 2024",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js no frontend e Java no backend.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Gestão e coordenação das equipes de desenvolvimento, garantindo a entrega dentro dos prazos e conforme os padrões de qualidade.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
      "Supervisão e otimização de soluções de automação comercial, incluindo sistemas de PDV, ERP e CRM.",
      "Identificação e implementação de melhorias em processos e sistemas para aumentar a eficiência e escalabilidade.",
      "Treinamento e mentoria de desenvolvedores, promovendo a adoção de melhores práticas e o desenvolvimento contínuo da equipe.",
    ],
  },
  {
    title: "Desenvolvedor Front-end Sênior",
    company_name: "Noûs",
    icon: nous,
    iconBg: "#000000",
    date: "Setembro 2024 - Presente",
    points: [
      "Desenvolvimento e manutenção de aplicações web modernas utilizando React.js, TypeScript, Next.js e outras tecnologias de ponta.",
      "Prestação de consultoria técnica especializada para o SBT Lab, contribuindo para projetos inovadores na área de mídia e tecnologia.",
      "Colaboração com equipes multidisciplinares para criar soluções escaláveis e de alta performance.",
      "Implementação de melhores práticas de desenvolvimento, incluindo clean code, testes automatizados e arquitetura de software.",
      "Mentoria e orientação técnica para desenvolvedores juniores e plenos da equipe.",
    ],
  },
];

const projects: Project[] = [
  {
    name: "Marketplace E-commerce",
    description:
      "Marketplace completo desenvolvido com tRPC, TypeScript, Payload CMS, garantindo type-safety e performance otimizada.",
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
    image: waymenu, // Você pode adicionar uma imagem específica depois
    source_code_link: "#",
  },
  {
    name: "Portal Caravanas - SBT",
    description:
      "Portal oficial do programa Caravanas do SBT, desenvolvido com tecnologias modernas para alta performance e experiência do usuário.",
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
    image: waymenu, // Você pode adicionar uma imagem específica depois
    source_code_link: "#",
  },
  {
    name: "Site GSS - Grupo Silvio Santos",
    description:
      "Website institucional do Grupo Silvio Santos, focado em apresentar a empresa e seus valores de forma moderna e responsiva.",
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
    image: waymenu, // Você pode adicionar uma imagem específica depois
    source_code_link: "#",
  },
  {
    name: "AgriTech 4.0 - IIItek",
    description:
      "Plataforma de gerenciamento de fazendas e agricultura 4.0, integrando IoT, análise de dados e automação para otimização agrícola.",
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
    image: waymenu, // Você pode adicionar uma imagem específica depois
    source_code_link: "#",
  },
  {
    name: "Site Institucional IIItek",
    description:
      "Website institucional da IIItek Technology, apresentando soluções tecnológicas inovadoras com design moderno e responsivo.",
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
    image: waymenu, // Você pode adicionar uma imagem específica depois
    source_code_link: "https://iiitek.com.br",
  },
  {
    name: "Site Grupo A3",
    description:
      "Portal institucional do Grupo A3, desenvolvido com foco em performance e experiência do usuário, apresentando os serviços da empresa.",
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
    image: waymenu, // Você pode adicionar uma imagem específica depois
    source_code_link: "#",
  },
  {
    name: "WayMenu",
    description:
      "Cardápio digital para restaurantes, desenvolvido com React.js, Material UI entre outros.",
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
    name: "Backend Bun e Clean-Arch",
    description:
      "Backend construido com a nova tecnologias Bun e utilizando arquitetura limpa e Prisma.",
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
    name: "Software Dinamômetro Pegasus Pro",
    description:
      "Software do dinamômetro inercial Pegasus Pro, desenvolvido com HTML, CSS, JavaScript, linguagem C e Micro-controladora ESP32.",
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

export { services, technologies, experiences, projects };
