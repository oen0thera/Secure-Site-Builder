
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

function RotateBox({ position, startPoint, resetPoint }: BoxArgs) {
  const scroll = useScroll();
  const meshRef = useRef<Three.Mesh>(null!);
  const materialRef = useRef<Three.Material>(null!);

  useFrame(() => {
    console.log(materialRef.current.opacity);
    materialRef.current.opacity = 1 - scroll.offset;
    materialRef.current.transparent = true;
    if (meshRef.current) {
      if (scroll && scroll?.offset !== 0) {
        console.log(scroll.offset);
        //meshRef.current.rotation.x = scroll.offset;
        meshRef.current.rotation.y = scroll.offset;
      } else {
        meshRef.current.visible = true;
        console.log(
          meshRef.current.position.x,
          resetPoint,
          meshRef.current.position.x > resetPoint
        );
        if (meshRef.current.position.x > resetPoint) {
          meshRef.current.position.x = startPoint;
        }
        meshRef.current.position.x += 0.1;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[position[0], position[1], position[2]]}>
      <boxGeometry args={[10, 50, 0.1]} />
      <meshStandardMaterial ref={materialRef} color="white" />
    </mesh>
  );
}

type BoxArgs = {
  position: Array<number>;
  resetPoint: number;
  startPoint: number;
};

export default function Introduction() {
  return (
    <div>
      <Canvas camera={{ position: [0, 0, -10] }}>
        <ScrollControls>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotateBox position={[-75, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[-60, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[-45, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[-30, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[-15, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[0, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[15, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[30, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[45, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[60, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[75, 0, 0]} startPoint={-75} resetPoint={75} />
          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />
        </ScrollControls>
      </Canvas>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ScrollControls>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotateBox position={[-75, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[-60, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[-45, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[-30, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[-15, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[0, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[15, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[30, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[45, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[60, 0, 0]} startPoint={-75} resetPoint={75} />
          <RotateBox position={[75, 0, 0]} startPoint={-75} resetPoint={75} />
          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />
        </ScrollControls>
      </Canvas>
    </div>

  );
}
