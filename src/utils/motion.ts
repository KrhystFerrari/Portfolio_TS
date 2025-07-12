import type {
  TextVariantFunction,
  AnimationFunction,
  ZoomInFunction,
  SlideInFunction,
  StaggerContainerFunction,
} from "../types";

export const textVariant: TextVariantFunction = (delay = 0) => {
  return {
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
        delay: delay,
      },
    },
  };
};

export const fadeIn: AnimationFunction = (
  direction = "",
  type = "spring",
  delay = 0,
  duration = 0.75
) => {
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

  // Use a default animation type if empty string is passed
  const animationType = type === "" ? "spring" : type;

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
        type: animationType,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn: ZoomInFunction = (delay = 0, duration = 0.75) => {
  return {
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
      },
    },
  };
};

export const slideIn: SlideInFunction = (
  direction = "",
  type = "spring",
  delay = 0,
  duration = 0.75
) => {
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

  // Use a default animation type if empty string is passed
  const animationType = type === "" ? "spring" : type;

  return {
    hidden: {
      x: getX(),
      y: getY(),
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: animationType,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer: StaggerContainerFunction = (
  staggerChildren = 0,
  delayChildren = 0
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};
