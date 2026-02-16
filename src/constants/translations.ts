export interface Translations {
  // Navigation
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };

  // Hero section
  hero: {
    subtitle: string;
    subtitlePrefixes: string[];
    subtitleSuffix: string;
    prefixFirst: boolean; // true = "Desenvolvedor Front-end", false = "Front-end Developer"
  };

  // About section
  about: {
    intro: string;
    title: string;
    description: string;
    services: {
      frontendEngineer: {
        title: string;
        description: string;
      };
      frontendDeveloper: {
        title: string;
        description: string;
      };
      frontendConsultant: {
        title: string;
        description: string;
      };
    };
  };

  // Experience section
  experience: {
    title: string;
    experiences: {
      nous: {
        title: string;
        points: string[];
      };
      pegasus: {
        title: string;
        points: string[];
      };
      iiitek: {
        title: string;
        points: string[];
      };
      sifat: {
        title: string;
        points: string[];
      };
    };
  };

  // Projects section
  projects: {
    title: string;
    subtitle: string;
    items: {
      theVoiceBrasil2025: {
        description: string;
      };
      sbtDoBem: {
        description: string;
      };
      sbtUIKit: {
        description: string;
      };
      sbtPremiado: {
        description: string;
      };
      sbtPortalsRelayout: {
        description: string;
      };
      marketplace: {
        description: string;
      };
      sbtCaravanas: {
        description: string;
      };
      gssWebsite: {
        description: string;
      };
      agritech: {
        description: string;
      };
      iiitekWebsite: {
        description: string;
      };
      grupoA3: {
        description: string;
      };
      waymenu: {
        description: string;
      };
      bunBackend: {
        description: string;
      };
      dynamometer: {
        description: string;
      };
    };
  };

  // Contact section
  contact: {
    subtitle: string;
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      sendButton: string;
      sendingButton: string;
    };
    directContact: {
      title: string;
      linkedin: string;
      whatsapp: string;
    };
    alerts: {
      success: string;
      error: string;
    };
  };

  // Back to top
  backToTop: {
    title: string;
  };

  // 3D Model fallback
  model3d: {
    fallbackMessage: string;
  };
}

export const translations: Record<string, Translations> = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      subtitle: "Desenvolvedor Front-end",
      subtitlePrefixes: ["Desenvolvedor", "Engenheiro", "Consultor"],
      subtitleSuffix: "Front-end",
      prefixFirst: true,
    },
    about: {
      intro: "Intro",
      title: "Sobre mim...",
      description:
        "Sou um Engenheiro Frontend Sênior com mais de oito anos de experiência, construindo minha carreira em uma especialização profunda em JavaScript, TypeScript e no ecossistema React/Next.js. Desde o início da minha jornada em 2017, sou apaixonado por tecnologias de ponta e dedicado a criar aplicações web de alto desempenho e centradas no usuário.\n\nMinha expertise está centrada no desenvolvimento de interfaces sofisticadas e arquiteturas escaláveis utilizando React, Next.js e soluções modernas de estilização como TailwindCSS e Material UI. Uma parte significativa do meu trabalho envolve a construção e manutenção de sistemas de design com Storybook, garantindo consistência, acelerando o desenvolvimento e melhorando a colaboração entre equipes.\n\nAtualmente, atuo em um papel-chave na emissora SBT, onde tenho sido fundamental no redesign completo e no desenvolvimento contínuo de todos os seus portais web. Esse projeto focou na modernização da experiência do usuário, melhoria de performance e implementação de um sistema de design coeso. Uma conquista recente de maior destaque foi o desenvolvimento frontend do site oficial do The Voice Brasil, entregue com sucesso para a estreia de grande visibilidade do programa no final de 2025.\n\nAlém da execução técnica avançada, aplico sólidos princípios de engenharia e arquitetura de software para criar soluções frontend robustas e de fácil manutenção. Também desenvolvi habilidades de liderança através da coordenação de equipes, promovendo ambientes de colaboração e inovação que são cruciais para o sucesso dos projetos. Sou um profissional comprometido e resiliente, reconhecido pela minha capacidade de me adaptar rapidamente e resolver desafios complexos com determinação.\n\nPronto para transformar sua ideia em uma experiência digital de ponta? Vamos conversar.",
      services: {
        frontendEngineer: {
          title: "Engenheiro Front-end",
          description:
            "Arquitetura de sistemas front-end escaláveis e soluções técnicas avançadas.",
        },
        frontendDeveloper: {
          title: "Desenvolvedor Front-end",
          description: "Desenvolvimento de interfaces modernas com React, TypeScript e Next.js.",
        },
        frontendConsultant: {
          title: "Consultor Front-end",
          description: "Consultoria estratégica em tecnologias front-end e otimização de projetos.",
        },
      },
    },
    experience: {
      title: "Experiência",
      experiences: {
        nous: {
          title: "Consultor Front-end Sênior",
          points: [
            "Desenvolvimento e manutenção de aplicações web modernas utilizando React.js, TypeScript, Next.js e outras tecnologias de ponta.",
            "Prestação de consultoria técnica especializada para o SBT Lab, contribuindo para projetos inovadores na área de mídia e tecnologia.",
            "Colaboração com equipes multidisciplinares para criar soluções escaláveis e de alta performance.",
            "Implementação de melhores práticas de desenvolvimento, incluindo clean code, testes automatizados e arquitetura de software.",
            "Mentoria e orientação técnica para desenvolvedores juniores e plenos da equipe.",
          ],
        },
        pegasus: {
          title: "Desenvolvedor Web/IoT",
          points: [
            "Desenvolvimento e manutenção de aplicações web utilizando HTML, CSS, JavaScript e outras tecnologias relacionadas.",
            "Desenvolvimento e manutenção do software do dinamômetro Pegasus Pro em linguagem C junto ao micro-controlador ESP-32 da Espressif.",
            "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
          ],
        },
        iiitek: {
          title: "Engenheiro de Software/Desenvolvedor Full Stack",
          points: [
            "Desenvolvimento e manutenção de aplicações web usando React.js, Next.js e outras tecnologias relacionadas.",
            "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
            "Gestão das equipes de desenvolvimento.",
            "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
          ],
        },
        sifat: {
          title: "Coordenador de Desenvolvimento",
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
      },
    },
    projects: {
      title: "Projetos",
      subtitle: "Meu trabalho",
      items: {
        theVoiceBrasil2025: {
          description:
            "Site oficial do programa The Voice Brasil 2025 para o SBT, desenvolvido com Next.js, TypeScript e TailwindCSS. Entrega de alto impacto para a estreia do programa na emissora, com foco em performance, experiência do usuário e integração com redes sociais.",
        },
        sbtDoBem: {
          description:
            "Plataforma de responsabilidade social do SBT, desenvolvida com React, Next.js e design system próprio. Portal dedicado a projetos sociais, campanhas beneficentes e ações de impacto social da emissora.",
        },
        sbtUIKit: {
          description:
            "Sistema de design proprietário do SBT desenvolvido com React, TypeScript, Vite, Storybook e CSS Modules. Biblioteca de componentes reutilizáveis que garante consistência visual e acelera o desenvolvimento em todos os portais da emissora.",
        },
        sbtPremiado: {
          description:
            "Plataforma de premiações e reconhecimentos do SBT, desenvolvida com Next.js e integração com APIs internas. Sistema para gerenciamento de campanhas promocionais, sorteios e programas de fidelidade da emissora.",
        },
        sbtPortalsRelayout: {
          description:
            "Redesign completo e modernização de todos os portais web do SBT (sbt.com.br, notícias, esportes, TV), implementando arquitetura escalável com Next.js, sistema de design unificado, otimização de performance e experiência do usuário aprimorada.",
        },
        marketplace: {
          description:
            "Marketplace completo desenvolvido com tRPC, TypeScript, Payload CMS, garantindo type-safety e performance otimizada.",
        },
        sbtCaravanas: {
          description:
            "Portal oficial do programa Caravanas do SBT, desenvolvido com tecnologias modernas para alta performance e experiência do usuário.",
        },
        gssWebsite: {
          description:
            "Website institucional do Grupo Silvio Santos, focado em apresentar a empresa e seus valores de forma moderna e responsiva.",
        },
        agritech: {
          description:
            "Plataforma de gerenciamento de fazendas e agricultura 4.0, integrando IoT, análise de dados e automação para otimização agrícola.",
        },
        iiitekWebsite: {
          description:
            "Website institucional da IIItek Technology, apresentando soluções tecnológicas inovadoras com design moderno e responsivo.",
        },
        grupoA3: {
          description:
            "Portal institucional do Grupo A3, desenvolvido com foco em performance e experiência do usuário, apresentando os serviços da empresa.",
        },
        waymenu: {
          description:
            "Cardápio digital para restaurantes, desenvolvido com React.js, Material UI entre outros.",
        },
        bunBackend: {
          description:
            "Backend construido com a nova tecnologias Bun e utilizando arquitetura limpa e Prisma.",
        },
        dynamometer: {
          description:
            "Software do dinamômetro inercial Pegasus Pro, desenvolvido com HTML, CSS, JavaScript, linguagem C e Micro-controladora ESP32.",
        },
      },
    },
    contact: {
      subtitle: "Mande uma mensagem",
      title: "Contato:",
      form: {
        name: "Nome",
        email: "Email",
        message: "Mensagem",
        namePlaceholder: "Digite seu nome.",
        emailPlaceholder: "Digite seu e-mail.",
        messagePlaceholder: "Deixe sua mensagem.",
        sendButton: "Enviar",
        sendingButton: "Enviando...",
      },
      alerts: {
        success: "Obrigado. Entrarei em contato em breve.",
        error: "Ah, algo deu errado. Por favor, tente novamente.",
      },
      directContact: {
        title: "Ou entre em contato direto:",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
      },
    },
    backToTop: {
      title: "Voltar ao topo",
    },
    model3d: {
      fallbackMessage: "Desculpe, não foi possível carregar o modelo 3D neste dispositivo.",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      subtitle: "Front-end Developer",
      subtitlePrefixes: ["Developer", "Engineer", "Consultant"],
      subtitleSuffix: "Front-end",
      prefixFirst: false,
    },
    about: {
      intro: "Introduction",
      title: "About me...",
      description:
        "I am a Senior Frontend Engineer with over eight years of experience, building my career on deep specialization in JavaScript, TypeScript, and the React/Next.js ecosystem. Since beginning my journey in 2017, I have been passionate about cutting-edge technologies and dedicated to creating high-performance, user-centric web applications.\n\nMy expertise is centered on developing sophisticated interfaces and scalable architectures using React, Next.js, and modern styling solutions like TailwindCSS and Material UI. A significant part of my work involves building and maintaining design systems with Storybook, ensuring consistency, accelerating development, and improving collaboration across teams.\n\nI currently play a key role at the Brazilian broadcaster SBT, where I have been instrumental in the complete redesign and ongoing development of all their web portals. This project focused on modernizing the user experience, improving performance, and implementing a cohesive design system. A major recent achievement was the frontend development of the official The Voice Brasil website, successfully delivered for the show's high-profile premiere at the end of 2025.\n\nBeyond advanced technical execution, I apply solid software engineering and architectural principles to create robust and maintainable frontend solutions. I have also developed leadership skills through team coordination, fostering environments of collaboration and innovation that are crucial for project success. I am a committed and resilient professional, recognized for my ability to quickly adapt and solve complex challenges with determination.\n\nReady to turn your idea into a cutting-edge digital experience? Let's talk.",
      services: {
        frontendEngineer: {
          title: "Frontend Engineer",
          description: "Scalable frontend system architecture and advanced technical solutions.",
        },
        frontendDeveloper: {
          title: "Frontend Developer",
          description: "Modern interface development with React, TypeScript and Next.js.",
        },
        frontendConsultant: {
          title: "Frontend Consultant",
          description: "Strategic consulting on frontend technologies and project optimization.",
        },
      },
    },
    experience: {
      title: "Experience",
      experiences: {
        nous: {
          title: "Senior Front-end Consultant",
          points: [
            "Development and maintenance of modern web applications using React.js, TypeScript, Next.js, and other cutting-edge technologies.",
            "Providing specialized technical consulting for SBT Lab, contributing to innovative projects in media and technology.",
            "Collaboration with multidisciplinary teams to create scalable and high-performance solutions.",
            "Implementation of development best practices, including clean code, automated testing, and software architecture.",
            "Mentoring and technical guidance for junior and mid-level developers on the team.",
          ],
        },
        pegasus: {
          title: "Web/IoT Developer",
          points: [
            "Development and maintenance of web applications using HTML, CSS, JavaScript, and other related technologies.",
            "Development and maintenance of Pegasus Pro dynamometer software in C language with Espressif's ESP-32 microcontroller.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
          ],
        },
        iiitek: {
          title: "Software Engineer/Full Stack Developer",
          points: [
            "Development and maintenance of web applications using React.js, Next.js, and other related technologies.",
            "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Management of development teams.",
            "Participate in code reviews and provide constructive feedback to other developers.",
          ],
        },
        sifat: {
          title: "Development Coordinator",
          points: [
            "Development and maintenance of web applications using React.js on the frontend and Java on the backend.",
            "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Management and coordination of development teams, ensuring delivery within deadlines and according to quality standards.",
            "Participate in code reviews and provide constructive feedback to other developers.",
            "Supervision and optimization of commercial automation solutions, including POS, ERP, and CRM systems.",
            "Identification and implementation of process and system improvements to increase efficiency and scalability.",
            "Training and mentoring developers, promoting the adoption of best practices and continuous team development.",
          ],
        },
      },
    },
    projects: {
      title: "Projects",
      subtitle: "My work",
      items: {
        theVoiceBrasil2025: {
          description:
            "Official website for The Voice Brasil 2025 TV show for SBT, developed with Next.js, TypeScript and TailwindCSS. High-impact delivery for the show's premiere on the network, focusing on performance, user experience and social media integration.",
        },
        sbtDoBem: {
          description:
            "SBT's social responsibility platform, developed with React, Next.js and custom design system. Portal dedicated to social projects, charity campaigns and the broadcaster's social impact actions.",
        },
        sbtUIKit: {
          description:
            "SBT's proprietary design system developed with React, TypeScript, Vite, Storybook and CSS Modules. Reusable component library that ensures visual consistency and accelerates development across all the broadcaster's portals.",
        },
        sbtPremiado: {
          description:
            "SBT's awards and recognition platform, developed with Next.js and integration with internal APIs. System for managing promotional campaigns, sweepstakes and the broadcaster's loyalty programs.",
        },
        sbtPortalsRelayout: {
          description:
            "Complete redesign and modernization of all SBT web portals (sbt.com.br, news, sports, TV), implementing scalable architecture with Next.js, unified design system, performance optimization and enhanced user experience.",
        },
        marketplace: {
          description:
            "Complete marketplace developed with tRPC, TypeScript, Payload CMS, ensuring type-safety and optimized performance.",
        },
        sbtCaravanas: {
          description:
            "Official portal for SBT's Caravanas program, developed with modern technologies for high performance and user experience.",
        },
        gssWebsite: {
          description:
            "Institutional website for Grupo Silvio Santos, focused on presenting the company and its values in a modern and responsive way.",
        },
        agritech: {
          description:
            "Farm management and agriculture 4.0 platform, integrating IoT, data analytics, and automation for agricultural optimization.",
        },
        iiitekWebsite: {
          description:
            "Institutional website for IIItek Technology, showcasing innovative technological solutions with modern and responsive design.",
        },
        grupoA3: {
          description:
            "Institutional portal for Grupo A3, developed with focus on performance and user experience, presenting the company's services.",
        },
        waymenu: {
          description:
            "Digital menu for restaurants, developed with React.js, Material UI, and other technologies.",
        },
        bunBackend: {
          description:
            "Backend built with the new Bun technology using clean architecture and Prisma.",
        },
        dynamometer: {
          description:
            "Pegasus Pro inertial dynamometer software, developed with HTML, CSS, JavaScript, C language, and ESP32 microcontroller.",
        },
      },
    },
    contact: {
      subtitle: "Send a message",
      title: "Contact:",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Enter your name.",
        emailPlaceholder: "Enter your email.",
        messagePlaceholder: "Leave your message.",
        sendButton: "Send",
        sendingButton: "Sending...",
      },
      alerts: {
        success: "Thank you. I will get in touch shortly.",
        error: "Oops, something went wrong. Please try again.",
      },
      directContact: {
        title: "Or contact me directly:",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
      },
    },
    backToTop: {
      title: "Back to top",
    },
    model3d: {
      fallbackMessage: "Sorry, the 3D model could not be loaded on this device.",
    },
  },
  es: {
    nav: {
      about: "Acerca de",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      subtitle: "Desarrollador Front-end",
      subtitlePrefixes: ["Desarrollador", "Ingeniero", "Consultor"],
      subtitleSuffix: "Front-end",
      prefixFirst: true,
    },
    about: {
      intro: "Introducción",
      title: "Acerca de mí...",
      description:
        "Soy un Ingeniero Frontend Senior con más de ocho años de experiencia, construyendo mi carrera sobre una especialización profunda en JavaScript, TypeScript y el ecosistema React/Next.js. Desde el inicio de mi trayectoria en 2017, me apasionan las tecnologías de vanguardia y estoy dedicado a crear aplicaciones web de alto rendimiento centradas en el usuario.\n\nMi experiencia se centra en el desarrollo de interfaces sofisticadas y arquitecturas escalables utilizando React, Next.js y soluciones modernas de estilizado como TailwindCSS y Material UI. Una parte significativa de mi trabajo implica la construcción y mantenimiento de sistemas de diseño con Storybook, garantizando consistencia, acelerando el desarrollo y mejorando la colaboración entre equipos.\n\nActualmente, desempeño un papel clave en la emisora brasileña SBT, donde he sido fundamental en el rediseño completo y el desarrollo continuo de todos sus portales web. Este proyecto se enfocó en modernizar la experiencia del usuario, mejorar el rendimiento e implementar un sistema de diseño cohesivo. Un logro reciente destacado fue el desarrollo frontend del sitio oficial de The Voice Brasil, entregado con éxito para el estreno de gran visibilidad del programa a finales de 2025.\n\nMás allá de la ejecución técnica avanzada, aplico sólidos principios de ingeniería y arquitectura de software para crear soluciones frontend robustas y de fácil mantenimiento. También he desarrollado habilidades de liderazgo a través de la coordinación de equipos, fomentando entornos de colaboración e innovación que son cruciales para el éxito de los proyectos. Soy un profesional comprometido y resiliente, reconocido por mi capacidad para adaptarme rápidamente y resolver desafíos complejos con determinación.\n\n¿Listo para convertir tu idea en una experiencia digital de vanguardia? Hablemos.",
      services: {
        frontendEngineer: {
          title: "Ingeniero Frontend",
          description:
            "Arquitectura de sistemas frontend escalables y soluciones técnicas avanzadas.",
        },
        frontendDeveloper: {
          title: "Desarrollador Frontend",
          description: "Desarrollo de interfaces modernas con React, TypeScript y Next.js.",
        },
        frontendConsultant: {
          title: "Consultor Frontend",
          description:
            "Consultoría estratégica en tecnologías frontend y optimización de proyectos.",
        },
      },
    },
    experience: {
      title: "Experiencia",
      experiences: {
        nous: {
          title: "Consultor Front-end Senior",
          points: [
            "Desarrollo y mantenimiento de aplicaciones web modernas utilizando React.js, TypeScript, Next.js y otras tecnologías de vanguardia.",
            "Prestación de consultoría técnica especializada para SBT Lab, contribuyendo a proyectos innovadores en el área de medios y tecnología.",
            "Colaboración con equipos multidisciplinarios para crear soluciones escalables y de alto rendimiento.",
            "Implementación de mejores prácticas de desarrollo, incluyendo código limpio, pruebas automatizadas y arquitectura de software.",
            "Mentoría y orientación técnica para desarrolladores junior y semi-senior del equipo.",
          ],
        },
        pegasus: {
          title: "Desarrollador Web/IoT",
          points: [
            "Desarrollo y mantenimiento de aplicaciones web utilizando HTML, CSS, JavaScript y otras tecnologías relacionadas.",
            "Desarrollo y mantenimiento del software del dinamómetro Pegasus Pro en lenguaje C junto al microcontrolador ESP-32 de Espressif.",
            "Implementando diseño responsivo y asegurando compatibilidad entre navegadores.",
          ],
        },
        iiitek: {
          title: "Ingeniero de Software/Desarrollador Full Stack",
          points: [
            "Desarrollo y mantenimiento de aplicaciones web usando React.js, Next.js y otras tecnologias relacionadas.",
            "Colaborar con equipos multifuncionales incluyendo diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
            "Gestión de equipos de desarrollo.",
            "Participar en revisiones de código y proporcionar retroalimentación construtiva a otros desarrolladores.",
          ],
        },
        sifat: {
          title: "Coordinador de Desarrollo",
          points: [
            "Desarrollo y mantenimiento de aplicaciones web usando React.js en el frontend y Java en el backend.",
            "Colaborar con equipos multifuncionales incluyendo diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
            "Gestión y coordinación de equipos de desarrollo, asegurando la entrega dentro de los plazos y según los estándares de calidad.",
            "Participar en revisiones de código y proporcionar retroalimentación construtiva a otros desarrolladores.",
            "Supervisión y optimización de soluciones de automatización comercial, incluyendo sistemas de POS, ERP y CRM.",
            "Identificación e implementación de mejoras en procesos y sistemas para aumentar la eficiencia y escalabilidad.",
            "Entrenamiento y mentoría de desarrolladores, promoviendo la adopción de mejores prácticas y el desarrollo continuo del equipo.",
          ],
        },
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Mi trabajo",
      items: {
        theVoiceBrasil2025: {
          description:
            "Sitio web oficial del programa The Voice Brasil 2025 para SBT, desarrollado con Next.js, TypeScript y TailwindCSS. Entrega de alto impacto para el estreno del programa en la emisora, con enfoque en rendimiento, experiencia del usuario e integración con redes sociales.",
        },
        sbtDoBem: {
          description:
            "Plataforma de responsabilidad social de SBT, desarrollada con React, Next.js y sistema de diseño propio. Portal dedicado a proyectos sociales, campañas benéficas y acciones de impacto social de la emisora.",
        },
        sbtUIKit: {
          description:
            "Sistema de diseño propietario de SBT desarrollado con React, TypeScript, Vite, Storybook y CSS Modules. Biblioteca de componentes reutilizables que garantiza consistencia visual y acelera el desarrollo en todos los portales de la emisora.",
        },
        sbtPremiado: {
          description:
            "Plataforma de premios y reconocimientos de SBT, desarrollada con Next.js e integración con APIs internas. Sistema para gestión de campañas promocionales, sorteos y programas de fidelidad de la emisora.",
        },
        sbtPortalsRelayout: {
          description:
            "Rediseño completo y modernización de todos los portales web de SBT (sbt.com.br, noticias, deportes, TV), implementando arquitectura escalable con Next.js, sistema de diseño unificado, optimización de rendimiento y experiencia del usuario mejorada.",
        },
        marketplace: {
          description:
            "Marketplace completo desarrollado con tRPC, TypeScript, Payload CMS, garantizando type-safety y rendimiento optimizado.",
        },
        sbtCaravanas: {
          description:
            "Portal oficial del programa Caravanas de SBT, desarrollado con tecnologías modernas para alto rendimiento y experiencia del usuario.",
        },
        gssWebsite: {
          description:
            "Sitio web institucional del Grupo Silvio Santos, enfocado en presentar la empresa y sus valores de manera moderna y responsiva.",
        },
        agritech: {
          description:
            "Plataforma de gestión de granjas y agricultura 4.0, integrando IoT, análisis de datos y automatización para optimización agrícola.",
        },
        iiitekWebsite: {
          description:
            "Sitio web institucional de IIItek Technology, presentando soluciones tecnológicas innovadoras con diseño moderno y responsivo.",
        },
        grupoA3: {
          description:
            "Portal institucional del Grupo A3, desarrollado con enfoque en rendimiento y experiencia del usuario, presentando los servicios de la empresa.",
        },
        waymenu: {
          description:
            "Menú digital para restaurantes, desarrollado con React.js, Material UI y otras tecnologías.",
        },
        bunBackend: {
          description:
            "Backend construido con la nueva tecnología Bun utilizando arquitectura limpia y Prisma.",
        },
        dynamometer: {
          description:
            "Software del dinamómetro inercial Pegasus Pro, desarrollado com HTML, CSS, JavaScript, lenguaje C y microcontrolador ESP32.",
        },
      },
    },
    contact: {
      subtitle: "Envía un mensaje",
      title: "Contacto:",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        namePlaceholder: "Ingresa tu nombre.",
        emailPlaceholder: "Ingresa tu email.",
        messagePlaceholder: "Deja tu mensaje.",
        sendButton: "Enviar",
        sendingButton: "Enviando...",
      },
      alerts: {
        success: "Gracias. Me pondré en contacto pronto.",
        error: "Ups, algo salió mal. Por favor intenta de nuevo.",
      },
      directContact: {
        title: "O contáctame directamente:",
        linkedin: "LinkedIn",
        whatsapp: "WhatsApp",
      },
    },
    backToTop: {
      title: "Volver arriba",
    },
    model3d: {
      fallbackMessage: "Lo sentimos, no se pudo cargar el modelo 3D en este dispositivo.",
    },
  },
};

export const useTranslations = () => {
  return { translations };
};
