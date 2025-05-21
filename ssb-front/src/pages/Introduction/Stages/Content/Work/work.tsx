import * as Three from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { CubicBezierCurve3,Vector3 } from "three";
import { OrbitControls, Scroll, ScrollControls, Text, useScroll } from "@react-three/drei";
import { RefObject, useEffect, useRef, useState } from "react";

import styles from './work.module.scss'
import { WorkProps } from "@/types/components/pages/introduction/Content/Work.type";







function LeftContent({ position, page }: BoxArgs) {
  const meshRef = useRef<Three.Mesh>(null!);
  const materialRef = useRef<Three.Material>(null!);
  const texture = useLoader(Three.TextureLoader,'/images/sample_image.png')
  const textRef = useRef<Three.Mesh>(null!);
  const subTextRef = useRef<Three.Mesh>(null!);
  const scroll = useScroll();
  
  useFrame(() => {
    materialRef.current.transparent = true;
    const textMat = textRef.current.material as Three.Material;
    const subTextMat = subTextRef.current.material as Three.Material;
    textMat.transparent=true;
    
    
    if (meshRef.current) {
        let scrollPosition=0;
        meshRef.current.visible = true;
        textRef.current.visible = true;
        
        if(materialRef.current.opacity<1) materialRef.current.opacity+=0.01;
        const radius = 8;
        const baseX = position[0];
        const baseZ = position[2];

        const angle = -scroll.offset * Math.PI;

        meshRef.current.position.x = baseX*2 - Math.cos(angle) * radius;
        meshRef.current.position.z = baseZ - Math.sin(angle) * radius - scroll.offset*scroll.pages * 5;
        textRef.current.position.x = baseX*2 - Math.cos(angle) * radius -20;
        
        textRef.current.position.z = baseZ - Math.sin(angle) * radius - scroll.offset*scroll.pages * 5;
        subTextRef.current.position.x = baseX*2 - Math.cos(angle) * radius -20;
        
        subTextRef.current.position.z = baseZ - Math.sin(angle) * radius - scroll.offset*scroll.pages * 5;
        
    
        const stageOffset = scroll.offset * 4; // 페이지 4단계 정규화
        const fadeRange = 0.9; // 얼마나 일찍/늦게 보이게 할지
        const fadeSpeed = 0.1;

        const distance = Math.abs(stageOffset - page);
        const shouldShow = distance < fadeRange;

        const targetOpacity = shouldShow ? 1 : 0;

        textMat.opacity += (targetOpacity - textMat.opacity) * fadeSpeed;
        subTextMat.opacity += (targetOpacity - subTextMat.opacity) * fadeSpeed;
       
    } 
  });
  return (
    <>
    <mesh ref={meshRef} position={[position[0], position[1], position[2]]} rotation={[0,10,0]}>
      <boxGeometry args={[10, 15, 0.1]} />
      <meshStandardMaterial ref={materialRef} map={texture} color="white" opacity={0}/>
      
    </mesh>
    <Text ref={textRef} fontSize={5} position={[-10,10,20]} rotation={[0,8.9,0]}   material-opacity={0} material-depthWrite={true}>
      Why SSB?
    </Text>
    <Text ref={subTextRef} fontSize={3} position={[-10,1,20]} rotation={[0,8.9,0]}  material-opacity={0} material-depthWrite={true}>
      {`We know what we do\nAs you do what you want`}
    </Text>
    </>
  );
}
function RightContent({ position }: BoxArgs) {
  const meshRef = useRef<Three.Mesh>(null!);
  
  
  const materialRef = useRef<Three.Material>(null!);
  const texture = useLoader(Three.TextureLoader,'/images/sample_image.png')
  
  const scroll = useScroll();

  useFrame(() => {
    materialRef.current.transparent = true;
    
    if (meshRef.current) {
        meshRef.current.visible = true;
        
        if(materialRef.current.opacity<1) materialRef.current.opacity+=0.01;
        meshRef.current.position.z = position[2] - (scroll.offset*scroll.pages)*8;
        
        
        
        
    }
  });
  return (<>
    <mesh ref={meshRef} position={[position[0], position[1], position[2]]} rotation={[0,-10,0]}>
      <boxGeometry args={[10, 15, 0.1]} />
      <meshStandardMaterial ref={materialRef} map={texture} color="white" opacity={0}/>
    </mesh>
    
    
    </>
  );
}

type BoxArgs = {
  position: Array<number>;
  page: number;
};

export default function Work({scroll,nextStage}:WorkProps) {
    useEffect(()=>{
        if(scroll===1){
            nextStage(false);
        }
        else{
            setTimeout(()=>{nextStage(true)},2000);
        }
    },[scroll])
  
  return (
    <div className={styles.screen}>
      <div className={styles.title}>
        Your First Service
      </div>
      
      <section className={styles.canvas}>
      <Canvas camera={{ position: [0, 0, -10] }}>
        <ScrollControls pages={30}>
            
            <Scroll html>
                <div style={{ height: '300vh' }}></div>
            </Scroll>
            
          <ambientLight intensity={2.5} />
          <pointLight position={[10, 10, 10]} />
          <LeftContent position={[10, 0, 20]} page={1}/>
          <LeftContent position={[10, 0, 60]} page={2}/>
          <LeftContent position={[10, 0, 100]} page={3}/>
          <LeftContent position={[10, 0, 140]} page={4}/>
          
          
          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />
          {/* <OrbitControls/> */}
          
        </ScrollControls>
        
      </Canvas>
      </section>
      
        
    </div>
  );
}
