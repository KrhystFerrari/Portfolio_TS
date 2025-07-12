import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const CanvasLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  );
};

interface ThreeCanvasProps {
  children: React.ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
    near?: number;
    far?: number;
  };
  enableOrbitControls?: boolean;
  shadows?: boolean;
  className?: string;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  children,
  camera = {
    position: [20, 3, 5],
    fov: 25,
    near: 0.1,
    far: 200,
  },
  enableOrbitControls = true,
  shadows = true,
  className = "w-full h-screen",
}) => {
  return (
    <Canvas
      shadows={shadows}
      frameloop="demand"
      dpr={[1, 2]}
      camera={camera}
      gl={{ preserveDrawingBuffer: true }}
      className={className}
    >
      <Suspense fallback={<CanvasLoader />}>
        {children}
        {enableOrbitControls && (
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export { ThreeCanvas, CanvasLoader };
