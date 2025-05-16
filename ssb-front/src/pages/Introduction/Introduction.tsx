import * as Three from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {ScrollControls, useScroll} from "@react-three/drei"
import { RefObject, useEffect, useRef } from "react";



function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function RotateBox() {
  const scroll = useScroll();
  const meshRef = useRef<Three.Mesh>(null!);
  
  useFrame(() => {
    if (meshRef.current) {
      console.log(scroll)
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[10, 10, 0.1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Introduction() {
  return (
    <div>
      <Canvas camera={{ position: [0, 0, -10] }} >
        <ScrollControls>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotateBox />
          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />
          </ScrollControls>
        </Canvas>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotateBox />
          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />
        
      </Canvas>
    </div>
  );
}
