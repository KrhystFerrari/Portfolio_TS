export const COLORS = {
  primary: "#050816",
  secondary: "#aaa6c3",
  tertiary: "#151030",
  black: {
    100: "#100d25",
    200: "#090325",
  },
  white: {
    100: "#f3f3f3",
  },
};

export const BREAKPOINTS = {
  xs: "450px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const ANIMATIONS = {
  fadeIn: (direction: string, type: string, delay: number, duration: number) => {
    const getX = () => {
      if (direction === "left") return 100;
      if (direction === "right") return -100;
      return 0;
    };

    const getY = () => {
      if (direction === "up") return 100;
      if (direction === "down") return -100;
      return 0;
    };

    return {
      hidden: {
        x: getX(),
        y: getY(),
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type === "spring" ? "spring" : "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        } as const,
      },
    } as const;
  },

  slideIn: (direction: string, type: string, delay: number, duration: number) => {
    const getX = () => {
      if (direction === "left") return "-100%";
      if (direction === "right") return "100%";
      return 0;
    };

    const getY = () => {
      if (direction === "up") return "100%";
      if (direction === "down") return "100%";
      return 0;
    };

    return {
      hidden: {
        x: getX(),
        y: getY(),
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type === "spring" ? "spring" : "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        } as const,
      },
    } as const;
  },

  staggerContainer: (staggerChildren?: number, delayChildren?: number) =>
    ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren || 0.1,
          delayChildren: delayChildren || 0,
        },
      },
    }) as const,

  textVariant: (delay?: number) =>
    ({
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay || 0,
        } as const,
      },
    }) as const,

  zoomIn: (delay: number, duration: number) =>
    ({
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        } as const,
      },
    }) as const,
};

export const CAMERA_SETTINGS = {
  position: [20, 3, 5] as [number, number, number],
  fov: 25,
  near: 0.1,
  far: 200,
};

export const TILT_OPTIONS = {
  max: 45,
  scale: 1,
  speed: 450,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const SECTIONS = {
  HERO: "hero",
  ABOUT: "about",
  WORK: "work",
  EXPERIENCE: "experience",
  TECH: "tech",
  PROJECTS: "projects",
  TESTIMONIALS: "testimonials",
  CONTACT: "contact",
} as const;

export const NAVIGATION_LINKS = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  twitter: "https://twitter.com/",
  email: "mailto:",
};
