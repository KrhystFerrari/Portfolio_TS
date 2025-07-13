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
      subtitle: "Desenvolvedor Full Stack",
    },
    about: {
      intro: "Intro",
      title: "Sobre mim...",
      description:
        'Olá, me chamo Krhystofferson Ferrari, tenho 31 anos e sou Desenvolvedor Full Stack. Nascido em 1992 na cidade de São José do Rio Preto - SP, tive uma infância humilde, mas sempre com acesso a princípios e educação. Aos 11 anos, ganhei meu primeiro computador e, desde então, me apaixonei pela tecnologia, tornando-me o "menino que ajeitava os PCs" da vizinhança. Trabalho desde os 12 anos e já atuei em diversas áreas, desde auxiliar de funilaria até metalúrgico. Aos 18 anos, tive minha primeira experiência com programação, atuando como Operador de Dobradeira CNC especializado. Estudo programação desde 2015, com algumas pausas ao longo do caminho. Iniciei minha transição de carreira para tecnologia em 2017 e possuo experiência em TypeScript, JavaScript, React.js, Node.js e Next.js. Aprendo rápido e colaboro diretamente com os clientes para criar soluções eficientes, escaláveis e fáceis de usar, que resolvem problemas reais. Desde 2020, lidero equipes e atualmente sou Head de Tecnologia e Coordenador de Desenvolvimento. Vamos trabalhar juntos para dar vida às suas ideias!',
      services: {
        softwareEngineer: "Engenheiro de Software",
        softwareArchitect: "Arquiteto de Software",
        softwareDeveloper: "Desenvolvedor de Software",
        techLead: "Head de Tecnologia",
      },
    },
    experience: {
      title: "Experiência",
      experiences: {
        pegasus: {
          title: "Desenvolvedor Web/IoT",
          points: [
            "Desenvolvimento e manutenção de aplicações web utilizando HTML, CSS, JavaScript e outras tecnologias relacionadas.",
            "Desenvolvimento e manutenção do software do dinamômetro Pegasus Pro em linguagem C junto ao micro-controlador ESP-32 da Espressif.",
            "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
          ],
        },
        iiitek: {
          title: "Engenheiro de Software/Head de Tecnologia",
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
      subtitle: "Full Stack Developer",
    },
    about: {
      intro: "Introduction",
      title: "About me...",
      description:
        "Hello, my name is Krhystofferson Ferrari, I'm 31 years old and I'm a Full Stack Developer. Born in 1992 in the city of São José do Rio Preto - SP, Brazil, I had a humble childhood, but always with access to principles and education. At age 11, I got my first computer and since then, I fell in love with technology, becoming the 'kid who fixed PCs' in the neighborhood. I've been working since I was 12 and have worked in various areas, from bodywork assistant to metallurgist. At 18, I had my first experience with programming, working as a specialized CNC Bending Machine Operator. I've been studying programming since 2015, with some breaks along the way. I started my career transition to technology in 2017 and have experience in TypeScript, JavaScript, React.js, Node.js, and Next.js. I learn fast and collaborate directly with clients to create efficient, scalable, and user-friendly solutions that solve real problems. Since 2020, I've been leading teams and currently serve as Head of Technology and Development Coordinator. Let's work together to bring your ideas to life!",
      services: {
        softwareEngineer: "Software Engineer",
        softwareArchitect: "Software Architect",
        softwareDeveloper: "Software Developer",
        techLead: "Technology Lead",
      },
    },
    experience: {
      title: "Experience",
      experiences: {
        pegasus: {
          title: "Web/IoT Developer",
          points: [
            "Development and maintenance of web applications using HTML, CSS, JavaScript, and other related technologies.",
            "Development and maintenance of Pegasus Pro dynamometer software in C language with Espressif's ESP-32 microcontroller.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
          ],
        },
        iiitek: {
          title: "Software Engineer/Head of Technology",
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
      subtitle: "Desarrollador Full Stack",
    },
    about: {
      intro: "Introducción",
      title: "Acerca de mí...",
      description:
        "Hola, mi nombre es Krhystofferson Ferrari, tengo 31 años y soy Desarrollador Full Stack. Nacido en 1992 en la ciudad de São José do Rio Preto - SP, Brasil, tuve una infancia humilde, pero siempre con acceso a principios y educación. A los 11 años, obtuve mi primera computadora y desde entonces, me enamoré de la tecnología, convirtiéndome en el 'chico que arreglaba PCs' del barrio. He estado trabajando desde los 12 años y he trabajado en varias áreas, desde asistente de carrocería hasta metalúrgico. A los 18, tuve mi primera experiencia con programación, trabajando como Operador de Máquina Dobladora CNC especializado. He estado estudiando programación desde 2015, con algunos descansos en el camino. Comencé mi transición profesional a la tecnología en 2017 y tengo experiencia en TypeScript, JavaScript, React.js, Node.js y Next.js. Aprendo rápido y colaboro directamente con los clientes para crear soluciones eficientes, escalables y fáciles de usar que resuelven problemas reales. Desde 2020, he estado liderando equipos y actualmente me desempeño como Jefe de Tecnología y Coordinador de Desarrollo. ¡Trabajemos juntos para dar vida a tus ideas!",
      services: {
        softwareEngineer: "Ingeniero de Software",
        softwareArchitect: "Arquitecto de Software",
        softwareDeveloper: "Desarrollador de Software",
        techLead: "Líder de Tecnología",
      },
    },
    experience: {
      title: "Experiencia",
      experiences: {
        pegasus: {
          title: "Desarrollador Web/IoT",
          points: [
            "Desarrollo y mantenimiento de aplicaciones web utilizando HTML, CSS, JavaScript y otras tecnologías relacionadas.",
            "Desarrollo y mantenimiento del software del dinamómetro Pegasus Pro en lenguaje C junto al microcontrolador ESP-32 de Espressif.",
            "Implementando diseño responsivo y asegurando compatibilidad entre navegadores.",
          ],
        },
        iiitek: {
          title: "Ingeniero de Software/Jefe de Tecnología",
          points: [
            "Desarrollo y mantenimiento de aplicaciones web usando React.js, Next.js y otras tecnologías relacionadas.",
            "Colaborar con equipos multifuncionales incluyendo diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
            "Gestión de equipos de desarrollo.",
            "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
          ],
        },
        sifat: {
          title: "Coordinador de Desarrollo",
          points: [
            "Desarrollo y mantenimiento de aplicaciones web usando React.js en el frontend y Java en el backend.",
            "Colaborar con equipos multifuncionales incluyendo diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
            "Gestión y coordinación de equipos de desarrollo, asegurando la entrega dentro de los plazos y según los estándares de calidad.",
            "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
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
            "Software del dinamómetro inercial Pegasus Pro, desarrollado con HTML, CSS, JavaScript, lenguaje C y microcontrolador ESP32.",
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
