import * as Three from "three";
import { Canvas, useFrame, useLoader,useThree } from "@react-three/fiber";
import { CubicBezierCurve3,Vector3 } from "three";
import { OrbitControls, Scroll, ScrollControls, ScrollControlsProps, ScrollControlsState, Text, useScroll } from "@react-three/drei";
import { createRef, Dispatch, forwardRef, FragmentProps, RefObject, SetStateAction, useEffect, useLayoutEffect, useRef, useState } from "react";

import styles from './work.module.scss'
import { WorkProps } from "@/types/components/pages/introduction/Content/Work.type";
import { ImageSize, ImageSrc, ImageType } from "@/types/components/Image.type";
import Icon from "@/components/Icon/Icon";
import { IconColor, IconSize, IconSrc } from "@/types/components/Icon.type";
import Button from "@/components/Button/Button";
import { ButtonSize, ButtonType } from "@/types/components/Button.type";






const LeftContent = ({position,page}:BoxArgs) =>{
  const meshRef = useRef<Three.Mesh>(null!);
  const materialRef = useRef<Three.Material>(null!);
  const texture = useLoader(Three.TextureLoader,'/images/sample_image.png')
  const textRef = useRef<Three.Mesh>(null!);
  const subTextRef = useRef<Three.Mesh>(null!);
  const scroll = useScroll();
  
  useFrame((state) => {
    materialRef.current.transparent = true;
    const textMat = textRef.current.material as Three.Material;
    const subTextMat = subTextRef.current.material as Three.Material;
    textMat.transparent=true;
    const camera = new Vector3(0,0,-10)
    const cameraPos = new Vector3(-state.pointer.x,state.pointer.y,0)
    const pointerPos = camera.lerp(cameraPos,0.01);
    state.camera.lookAt(pointerPos);
    
    if (meshRef.current) {
        let scrollPosition=0;
        meshRef.current.visible = true;
        textRef.current.visible = true;
        
        if(materialRef.current.opacity<1) materialRef.current.opacity+=0.01;
        const radius = 8;
        const baseX = position[0];
        const baseZ = position[2];

        const angle = -scroll.offset * Math.PI;

        //meshRef.current.position.x = baseX*1.5 - Math.cos(angle) * radius;
        meshRef.current.position.z = baseZ - Math.sin(angle) * radius - scroll.offset*scroll.pages * 5;
        //textRef.current.position.x = baseX*1.5 - Math.cos(angle) * radius -18;
        
        textRef.current.position.z = baseZ - Math.sin(angle) * radius - scroll.offset*scroll.pages * 5
        //subTextRef.current.position.x = baseX - Math.cos(angle) * radius -18;
        
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
    <Text ref={textRef} fontSize={2} position={[-10,4,20]} rotation={[0,8.9,0]}   material-opacity={0} material-depthWrite={true}>
      Why SSB?
    </Text>
    <Text ref={subTextRef} fontSize={1} position={[-10,1,20]} rotation={[0,8.9,0]}  material-opacity={0} material-depthWrite={true}>
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

const ScrollDetect=({onScroll,scrollTo,setScroll}:ScrollDetectProps)=>{
  const scroll = useScroll();
  if(scrollTo){
    console.log(scroll.el.scrollHeight/30*(30/4*(scrollTo-1)))
    scroll.el.scrollTo({top:scroll.el.scrollHeight/30*(30/4*(scrollTo-1*0.7)),behavior:'smooth'});
  }
  setScroll(null);
  
  onScroll(scroll.offset);
  return null;
}

type BoxArgs = {
  position: Array<number>;
  page: number;
};
type ScrollDetectProps={
  onScroll:(scroll:number)=>void;
  scrollTo?:number|null;
  setScroll:Dispatch<SetStateAction<number|null>>;
};

export default function Work({scroll,nextStage,prevStage}:WorkProps) {
    const [hasMounted, setHasMounted] = useState(false);
    const [scrollState,setScrollState] = useState(false);
    const [scrollIcon,setScrollIcon] = useState(true);
    const [scrollTo,setScrollTo] = useState<number|null>(0);
    const [scrollOffset, setScrollOffset] = useState<number>(0);
    const page = 4;
    const content = Array(page).fill(undefined,0,page).map((item,i)=>{return(<LeftContent position={[10, 0, 20+40*i]} page={i+1}/>)});
    

    useEffect(()=>{
      
      let scrollInterval: ReturnType<typeof setInterval>;
      const timeout = setTimeout(()=>{
        setHasMounted(true);
        scrollInterval = setInterval(()=>{
        setScrollIcon(prev=>{return !prev})
      },1000)
    },2000)
      

      return()=>{clearTimeout(timeout);
         clearInterval(scrollInterval)}
    },[])

    useEffect(()=>{
      console.log(scroll,scrollOffset)
      if(scroll===0 &&scrollOffset>=1){
         setTimeout(()=>{nextStage(true)},1000);
        }
      else if(scroll===1&&scrollOffset===0){
        prevStage(true);
      }
    },[scroll,scrollOffset])
    
    const onScroll=(scroll:number)=>{
      if(scroll>0){
        setScrollOffset(scroll);
        setScrollState(true);
      }
      else{
        setScrollState(false);
      }
    }
  
  return (
    <div className={`${styles.screen} ${scrollOffset>=1? styles.off:null}`}>
      <section className={styles.canvas}>
        <div className={styles.ui}>{hasMounted&&<h3 className={`${styles.scroll_ui} ${scrollState===false?styles.on:styles.off}`}>Scroll down to traverse</h3>}</div>
        {hasMounted&&!scrollState&&<div className={`${styles.scroll} ${scrollIcon?styles.on:styles.off}`}>
        <Icon src={IconSrc.SCROLL} size={IconSize.SMALL} color={IconColor.WHITE}/>
        
      </div>}
      <Canvas camera={{ position: [0, 0, -10] }}>
        <ScrollControls pages={30} >
            <ScrollDetect onScroll={onScroll} scrollTo={scrollTo} setScroll={setScrollTo}/>
            <Scroll html>
                <div></div>
            </Scroll>
            
          <ambientLight intensity={2.5} />
          <pointLight position={[10, 10, 10]} />
          {content}
          
          
          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />
          {/* <OrbitControls/> */}
          
        </ScrollControls>
        
      </Canvas>
      
      </section>
      <div className={styles.snb}>
        <h2>스크롤 항목</h2>
        <div className={styles.navigation}>
          <Button size={ButtonSize.EXTRA_LARGE} content={"항목1"} type={ButtonType.DARK} onClick={()=>{setScrollTo(1);}}/>
          <Button size={ButtonSize.EXTRA_LARGE} content={"항목2"} type={ButtonType.DARK} onClick={()=>{setScrollTo(2)}}/>
          <Button size={ButtonSize.EXTRA_LARGE} content={"항목3"} type={ButtonType.DARK} onClick={()=>{setScrollTo(3)}}/>
          <Button size={ButtonSize.EXTRA_LARGE} content={"항목4"} type={ButtonType.DARK} onClick={()=>{setScrollTo(4)}}/>

        </div>
      </div>
      
        
    </div>
  );
}
