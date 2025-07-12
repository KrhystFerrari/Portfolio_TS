import { Texture } from "three";

// Type aliases comuns
export type FrameloopType = "always" | "demand" | "never";

// Tipos para o componente Ball
export interface BallProps {
  imgUrl: string;
}

// Tipos para o componente BallCanvas
export interface BallCanvasProps {
  icon: string;
}

// Tipos comuns para Three.js que podem ser reutilizados
export interface Vector3Tuple {
  x: number;
  y: number;
  z: number;
}

export interface Position extends Array<number> {
  0: number;
  1: number;
  2: number;
}

export interface Rotation extends Array<number> {
  0: number;
  1: number;
  2: number;
}

// Tipos para geometrias
export interface GeometryArgs extends Array<number> {
  [index: number]: number;
}

// Tipos para materiais
export interface MaterialProps {
  color?: string;
  polygonOffset?: boolean;
  polygonOffsetFactor?: number;
  flatShading?: boolean;
}

// Tipos para Decal
export interface DecalProps {
  position: Position;
  rotation: Rotation;
  scale: number;
  map: Texture;
  flatShading?: boolean;
}

// Tipos para Float component
export interface FloatProps {
  speed: number;
  rotationIntensity: number;
  floatIntensity: number;
  children: React.ReactNode;
}

// Tipos para Canvas
export interface CanvasProps {
  frameloop?: FrameloopType;
  dpr?: number | [number, number];
  gl?: {
    preserveDrawingBuffer?: boolean;
    [key: string]: unknown;
  };
  children: React.ReactNode;
}

// Tipos para o componente Computers
export interface ComputersProps {
  isMobile: boolean;
}

// Tipos para luzes
export interface SpotLightProps {
  position: Position;
  angle: number;
  penumbra: number;
  intensity: number;
  castShadow?: boolean;
  "shadow-mapSize"?: number;
}

export interface HemisphereLightProps {
  intensity: number;
  groundColor: string;
}

export interface PointLightProps {
  intensity: number;
}

// Tipos para Primitive (objeto 3D importado)
export interface PrimitiveProps {
  object: unknown; // THREE.Object3D - using unknown for flexibility
  scale: number | Position;
  position: Position;
  rotation: Rotation;
}

// Tipos para OrbitControls
export interface OrbitControlsProps {
  enableZoom?: boolean;
  maxPolarAngle?: number;
  minPolarAngle?: number;
}

// Tipos para Camera
export interface CameraProps {
  position: Position;
  fov: number;
}

// Tipos estendidos para Canvas do componente Computers
export interface ComputersCanvasProps extends Omit<CanvasProps, "frameloop"> {
  frameloop?: FrameloopType;
  shadows?: boolean;
  camera?: CameraProps;
}

// Tipos para Camera estendida (Earth usa mais propriedades)
export interface ExtendedCameraProps {
  fov: number;
  near: number;
  far: number;
  position: Position;
}

// Tipos para OrbitControls estendido (Earth tem autoRotate)
export interface ExtendedOrbitControlsProps extends OrbitControlsProps {
  autoRotate?: boolean;
}

// Tipos para Primitive do Earth (com propriedades específicas)
export interface EarthPrimitiveProps {
  object: unknown;
  scale: number;
  "position-y": number;
  "rotation-y": number;
}

// Tipos estendidos para Canvas do componente Earth
export interface EarthCanvasProps {
  shadows?: boolean;
  frameloop?: FrameloopType;
  dpr?: number | [number, number];
  gl?: {
    preserveDrawingBuffer?: boolean;
    [key: string]: unknown;
  };
  camera?: ExtendedCameraProps;
}

// Tipos para o componente Stars
export interface StarsProps {
  [key: string]: unknown; // Para spread props (...props)
}

// Tipos para Points do Three.js
export interface PointsProps {
  positions: Float32Array;
  stride: number;
  frustumCulled?: boolean;
  children: React.ReactNode;
}

// Tipos para PointMaterial
export interface PointMaterialProps {
  transparent?: boolean;
  color?: string;
  size?: number;
  sizeAttenuation?: boolean;
  depthWrite?: boolean;
}

// Tipos para useFrame hook
export interface FrameState {
  clock: {
    elapsedTime: number;
    deltaTime: number;
  };
  camera: unknown;
  scene: unknown;
  gl: unknown;
  [key: string]: unknown;
}

export type UseFrameCallback = (state: FrameState, delta: number) => void;

// Tipo para Three.js Object com rotação
export interface ThreeObject {
  rotation: {
    x: number;
    y: number;
    z: number;
  };
}

// Tipos para Group
export interface GroupProps {
  rotation?: [number, number, number];
  children: React.ReactNode;
}

// Tipos para Camera básica (Stars)
export interface BasicCameraProps {
  position: [number, number, number];
}

// Tipos para Canvas do Stars
export interface StarsCanvasProps {
  camera?: BasicCameraProps;
  children: React.ReactNode;
}
