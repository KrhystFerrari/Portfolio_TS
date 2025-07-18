import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../CanvasLoader";
import Model3DFallback from "../Model3DFallback";
import CanvasErrorBoundary from "../CanvasErrorBoundary";
import { useIsMobile } from "../../hooks";
import type { ComputersProps } from "./types";

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Luz ambiente mais clara */}
      <hemisphereLight intensity={1.5} groundColor="#ffffff" />
      {/* SpotLight mais intensa e mais "branca" */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.28}
        penumbra={1}
        intensity={7}
        color="#ffffff"
        castShadow
        shadow-mapSize={2048}
      />
      {/* PointLight mais intensa */}
      <pointLight intensity={8} color="#ffffff" position={[0, 10, 0]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.33 : 0.75}
        position={isMobile ? [0, -1.5, -0.55] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const isDeviceMobile = useIsMobile(900);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Usar fallback em dispositivos móveis
  if (isDeviceMobile) {
    return <Model3DFallback type="hero" className="absolute inset-0" />;
  }

  return (
    <CanvasErrorBoundary fallbackType="hero" className="absolute inset-0">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default ComputersCanvas;
