import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../CanvasLoader";
import Model3DFallback from "../Model3DFallback";
import CanvasErrorBoundary from "../CanvasErrorBoundary";
import { useIsMobile } from "../../hooks";

const Earth: React.FC = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas: React.FC = () => {
  const isMobile = useIsMobile(768);

  // Usar fallback em mobile
  if (isMobile) {
    return <Model3DFallback type="earth" className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" />;
  }

  return (
    <CanvasErrorBoundary
      fallbackType="earth"
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
    >
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default EarthCanvas;
