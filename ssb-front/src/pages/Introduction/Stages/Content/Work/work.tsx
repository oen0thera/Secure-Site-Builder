import * as Three from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { CubicBezierCurve3,Vector3 } from "three";
import { OrbitControls, Scroll, ScrollControls, Text, useScroll } from "@react-three/drei";
import { RefObject, useEffect, useRef, useState } from "react";

import styles from './work.module.scss'
import { WorkProps } from "@/types/components/pages/introduction/Content/Work.type";







function LeftContent({ position }: BoxArgs) {
  const meshRef = useRef<Three.Mesh>(null!);
  const materialRef = useRef<Three.Material>(null!);
  const texture = useLoader(Three.TextureLoader,'/images/sample_image.png')
  const textRef = useRef<Three.Mesh>(null!);
  const subTextRef = useRef<Three.Mesh>(null!);
  const scroll = useScroll();
  console.log(position)
  
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
        textRef.current.position.z = position[2]*1.5 - (scroll.offset*scroll.pages)*8;
        subTextRef.current.position.z = position[2]*1.5 - (scroll.offset*scroll.pages)*8;
        
        //meshRef.current.position.x = position[0] - scroll.offset*scroll.pages*(-10);
        meshRef.current.position.z = position[2] - (scroll.offset*scroll.pages)*8;
        console.log(meshRef.current.position.z)
        //subTextRef.current.position.z = position[2] - (scroll.offset*scroll.pages)*35
        console.log(scroll.offset*scroll.pages)
        
        if(scroll.offset*scroll.pages>0 &&textMat.opacity<1){
          textMat.opacity+=0.05;
          subTextMat.opacity+=0.05;
        }
        else{
          textMat.opacity-=0.05;
          subTextMat.opacity-=0.05;
        }
    }
  });
  return (
    <>
    <mesh ref={meshRef} position={[position[0], position[1], position[2]]} rotation={[0,10,0]}>
      <boxGeometry args={[10, 15, 0.1]} />
      <meshStandardMaterial ref={materialRef} map={texture} color="white" opacity={0}/>
      
    </mesh>
    <Text ref={textRef} fontSize={5} position={[-30,10,20]} rotation={[0,8.9,0]}   material-opacity={0} material-depthWrite={true}>
      Why SSB?
    </Text>
    <Text ref={subTextRef} fontSize={3} position={[-30,1,20]} rotation={[0,8.9,0]}  material-opacity={0} material-depthWrite={true}>
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
  console.log(position)

  useFrame(() => {
    materialRef.current.transparent = true;
    
    if (meshRef.current) {
        meshRef.current.visible = true;
        
        if(materialRef.current.opacity<1) materialRef.current.opacity+=0.01;
        meshRef.current.position.z = position[2] - (scroll.offset*scroll.pages)*0.1
        
        
        
        
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
        <ScrollControls pages={10}>
            
            <Scroll html>
                <div style={{ height: '300vh' }}></div>
            </Scroll>
            
          <ambientLight intensity={2.5} />
          <pointLight position={[10, 10, 10]} />
          <LeftContent position={[10, 0, 20]} />
          <RightContent position={[-10, 0, 40]} />
          
          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />
          {/* <OrbitControls/> */}
          
        </ScrollControls>
        
      </Canvas>
      </section>
      
        
    </div>
  );
}
