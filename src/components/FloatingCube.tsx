import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface FloatingCubeProps {
  position?: [number, number, number];
  color?: string;
}

const FloatingCube: React.FC<FloatingCubeProps> = ({ position = [0, 0, 0], color = "#915EFF" }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotação contínua
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      // Movimento flutuante
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default FloatingCube;
