import * as Three from "three";
import { Canvas, useFrame } from "@react-three/fiber";

import { ScrollControls, useScroll } from "@react-three/drei";
import { RefObject, useEffect, useRef } from "react";

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function RotateBox({ args }: BoxArgs) {
  const scroll = useScroll();
  const meshRef = useRef<Three.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      if (scroll && scroll?.offset !== 0) {
        console.log(scroll.offset);
        meshRef.current.rotation.x = scroll.offset;
        meshRef.current.rotation.y = scroll.offset;
      } else {
        meshRef.current.position.x += 0.01;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[args[0], args[1], args[2]]}>
      <boxGeometry args={[10, 50, 0.1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

type BoxArgs = { args: Array<number> };

export default function Introduction() {
  return (
    <div>
      <Canvas camera={{ position: [0, 0, -10] }}>
        <ScrollControls>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotateBox args={[-30, 0, 0]} />
          <RotateBox args={[-15, 0, 0]} />
          <RotateBox args={[0, 0, 0]} />
          <RotateBox args={[15, 0, 0]} />
          <RotateBox args={[30, 0, 0]} />
          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />
        </ScrollControls>
      </Canvas>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotateBox args={[10, 10, 0.1]} />
        <gridHelper args={[10, 10]} />
        <axesHelper args={[8]} />
      </Canvas>
    </div>
  );
}
