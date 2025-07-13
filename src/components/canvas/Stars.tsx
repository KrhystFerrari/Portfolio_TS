import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-expect-error - maath library doesn't have TypeScript definitions
import * as random from "maath/random/dist/maath-random.esm";

import Model3DFallback from "../Model3DFallback";
import CanvasErrorBoundary from "../CanvasErrorBoundary";
import { useIsMobile } from "../../hooks";
import type { StarsProps } from "./types";

const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((_, delta) => {
    if (ref.current) {
      // @ts-expect-error - Three.js object access
      ref.current.rotation.x -= delta / 10;
      // @ts-expect-error - Three.js object access
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  const isMobile = useIsMobile(768);

  // Usar fallback em dispositivos móveis
  if (isMobile) {
    return <Model3DFallback type="stars" className="w-full h-auto absolute inset-0 z-[-1]" />;
  }

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <CanvasErrorBoundary fallbackType="stars" className="w-full h-auto absolute inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default StarsCanvas;
