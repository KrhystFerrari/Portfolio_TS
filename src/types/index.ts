// Tipos para componentes gerais do portfolio

// Tipos para ServiceCard
export interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

// Tipos para services do constants
export interface Service {
  title: string;
  icon: string;
}

// Tipos para Tilt options
export interface TiltOptions {
  max: number;
  scale: number;
  speed: number;
}

// Tipos para motion variants (framer-motion)
export interface MotionVariants {
  [key: string]: {
    [key: string]: unknown;
  };
}

// Tipos para animações de fade
export type FadeDirection = "left" | "right" | "up" | "down" | "";
export type AnimationType = "spring" | "tween" | "inertia" | "";

// Tipos para Section Wrapper HOC
export interface SectionWrapperProps {
  children: React.ReactNode;
}

export type SectionWrapperComponent<T = Record<string, unknown>> = React.ComponentType<T>;

// Tipos para estilos
export interface StylesType {
  sectionSubText: string;
  sectionHeadText: string;
  [key: string]: string;
}

// Tipos para constants/index.ts
export interface NavLink {
  id: string;
  title: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

// Tipos para ExperienceCard
export interface ExperienceCardProps {
  experience: Experience;
}

export interface ProjectTag {
  name: string;
  color: string;
}

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
}

// Tipos para motion animations
import type { Variants } from "framer-motion";

export interface MotionTransition {
  type?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  staggerChildren?: number;
  delayChildren?: number;
}

export interface MotionVariant {
  x?: number | string;
  y?: number | string;
  opacity?: number;
  scale?: number;
  transition?: MotionTransition;
}

// Use Framer Motion's built-in Variants type for compatibility
export type AnimationVariants = Variants;

// Tipos para funções de animação - usando Variants diretamente
export type AnimationFunction = (
  direction?: FadeDirection,
  type?: AnimationType,
  delay?: number,
  duration?: number
) => Variants;

export type TextVariantFunction = (delay?: number) => Variants;
export type ZoomInFunction = (delay?: number, duration?: number) => Variants;
export type SlideInFunction = (
  direction?: FadeDirection,
  type?: AnimationType,
  delay?: number,
  duration?: number
) => Variants;
export type StaggerContainerFunction = (
  staggerChildren?: number,
  delayChildren?: number
) => Variants;

// Tipos para componente Contact
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type ContactFormEvent = React.FormEvent<HTMLFormElement>;
export type ContactInputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export interface EmailJSResponse {
  status: number;
  text: string;
}
