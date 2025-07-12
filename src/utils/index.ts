import { Vector3, Camera } from "three";

export const calculateScreenPosition = (
  position: Vector3,
  camera: Camera,
  canvas: HTMLCanvasElement
) => {
  const vector = position.clone();
  vector.project(camera);

  vector.x = ((vector.x + 1) / 2) * canvas.clientWidth;
  vector.y = (-(vector.y - 1) / 2) * canvas.clientHeight;

  return vector;
};

export const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const mapRange = (
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
) => {
  return ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin;
};

export const degToRad = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

export const radToDeg = (radians: number) => {
  return (radians * 180) / Math.PI;
};

export const distance2D = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

export const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Função para detectar se é mobile
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Função para detectar se é tablet
export const isTablet = () => {
  return /iPad|Android/i.test(navigator.userAgent) && !isMobile();
};

// Função para obter as dimensões da tela
export const getScreenDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    aspect: window.innerWidth / window.innerHeight,
  };
};
