export interface Translations {
  // Navigation
  nav: {
    about: string;
    projects: string;
    contact: string;
  };

  // Hero section
  hero: {
    subtitle: string;
  };

  // About section
  about: {
    intro: string;
    title: string;
    description: string;
    services: {
      softwareEngineer: string;
      softwareArchitect: string;
      softwareDeveloper: string;
      techLead: string;
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
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      subtitle: "Desenvolvedor Front-end",
    },
    about: {
      intro: "Intro",
      title: "Sobre mim...",
      description:
        'Olá! Sou Krhystofferson Ferrari, tenho 33 anos e atuo como Desenvolvedor Front-end e Engenheiro de Software.\nNascido em 1992, em São José do Rio Preto - SP, cresci em um lar simples, mas cercado de princípios e incentivo à educação. Ganhei meu primeiro computador aos 11 anos e, desde então, nunca mais larguei a tecnologia — virei o famoso "menino que conserta os PCs" da vizinhança.\n\nAos 14 anos, tive meu primeiro contato com programação ao criar automações para jogos usando a linguagem Lua. Desde cedo, percebi o poder de transformar ideias em soluções através do código.\n\nSou autodidata e tenho experiência sólida em TypeScript, JavaScript, React.js, Node.js e Next.js. Gosto de estar próximo dos clientes para entender necessidades reais e criar soluções eficientes, escaláveis e fáceis de usar.\nJá liderei equipes, trabalhei com sistemas embarcados (IoT) e também atuei como desenvolvedor fullstack, sempre buscando uma visão completa das soluções que construo. Hoje, atuo como Desenvolvedor Front-end Sênior e Engenheiro de Software na Noûs, prestando consultoria para o SBT Lab.\n\nVamos conversar? Transformar ideias em projetos reais é meu trabalho!',
      services: {
        softwareEngineer: "Engenheiro de Software",
        softwareArchitect: "Desenvolvedor Front-end",
        softwareDeveloper: "Desenvolvedor IoT",
        techLead: "Desenvolvedor Full Stack",
      },
    },
    experience: {
      title: "Experiência",
      experiences: {
        nous: {
          title: "Desenvolvedor Front-end Sênior",
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
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      subtitle: "Front-end Developer",
    },
    about: {
      intro: "Introduction",
      title: "About me...",
      description:
        "Hello! I'm Krhystofferson Ferrari, I'm 33 years old and I work as a Front-end Developer and Software Engineer.\nBorn in 1992, in São José do Rio Preto - SP, I grew up in a simple home, but surrounded by principles and encouragement for education. I got my first computer at age 11 and since then, I never let go of technology — I became the famous \"boy who fixes PCs\" in the neighborhood.\n\nAt age 14, I had my first contact with programming by creating automations for games using the Lua language. Early on, I realized the power of transforming ideas into solutions through code.\n\nI'm self-taught and have solid experience in TypeScript, JavaScript, React.js, Node.js, and Next.js. I like to be close to clients to understand real needs and create efficient, scalable, and user-friendly solutions.\nI've already led teams, worked with embedded systems (IoT) and also worked as a fullstack developer, always seeking a complete view of the solutions I build. Today, I work as a Senior Front-end Developer and Software Engineer at Noûs, providing consulting for SBT Lab.\n\nLet's talk? Transforming ideas into real projects is my job!",
      services: {
        softwareEngineer: "Software Engineer",
        softwareArchitect: "Front-end Developer",
        softwareDeveloper: "IoT Developer",
        techLead: "Full Stack Developer",
      },
    },
    experience: {
      title: "Experience",
      experiences: {
        nous: {
          title: "Senior Front-end Developer",
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
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      subtitle: "Desarrollador Front-end",
    },
    about: {
      intro: "Introducción",
      title: "Acerca de mí...",
      description:
        '¡Hola! Soy Krhystofferson Ferrari, tengo 33 años y trabajo como Desarrollador Front-end e Ingeniero de Software.\nNacido en 1992, en São José do Rio Preto - SP, crecí en un hogar simple, pero rodeado de principios y estímulo a la educación. Conseguí mi primera computadora a los 11 años y desde entonces, nunca dejé la tecnología — me convertí en el famoso "niño que arregla las PCs" del vecindario.\n\nA los 14 años, tuve mi primer contacto con la programación al crear automatizaciones para juegos usando el lenguaje Lua. Desde temprano, me di cuenta del poder de transformar ideas en soluciones a través del código.\n\nSoy autodidacta y tengo experiencia sólida en TypeScript, JavaScript, React.js, Node.js y Next.js. Me gusta estar cerca de los clientes para entender las necesidades reales y crear soluciones eficientes, escalables y fáciles de usar.\nYa he liderado equipos, trabajé con sistemas embebidos (IoT) y también actué como desarrollador fullstack, siempre buscando una visión completa de las soluciones que construyo. Hoy, trabajo como Desarrollador Front-end Senior e Ingeniero de Software en Noûs, prestando consultoría para SBT Lab.\n\n¿Conversamos? ¡Transformar ideas en proyectos reales es mi trabajo!',
      services: {
        softwareEngineer: "Ingeniero de Software",
        softwareArchitect: "Desarrollador Front-end",
        softwareDeveloper: "Desarrollador IoT",
        techLead: "Desarrollador Full Stack",
      },
    },
    experience: {
      title: "Experiencia",
      experiences: {
        nous: {
          title: "Desarrollador Front-end Senior",
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
