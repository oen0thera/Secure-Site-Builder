import * as Three from "three";
import {
  RoundedBox,
  Text,
  useScroll,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  ShowcaseUnitArgs,
  ShowcaseUnitEnum,
} from "@/types/components/pages/introduction/Content/Showcase.type";

const ShowcaseLeftContent = ({
  position,
  page,
  type,
  content,
  setHover,
}: ShowcaseUnitArgs) => {
  const [bloom, setBloom] = useState(false);
  const meshRef = useRef<Three.Mesh>(null!);
  const materialRef = useRef<Three.Material>(null!);
  //const texture = useLoader(Three.TextureLoader,'/images/sample_image.png')
  let videoSrc;
  switch (type) {
    case ShowcaseUnitEnum.ABOUT:
      videoSrc = "/videos/showcase_1.mp4";
      break;
    default:
      videoSrc = "/videos/showcase_4.mp4";
  }
  const texture = useVideoTexture(videoSrc, {
    loop: true,
    start: false,
    muted: true,
    crossOrigin: "anonymous",
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<Three.Mesh>(null!);
  const subTextRef = useRef<Three.Mesh>(null!);
  const scroll = useScroll();
  let titlePositionY;
  switch (type) {
    case ShowcaseUnitEnum.ABOUT:
      titlePositionY = 12;
      break;
    case ShowcaseUnitEnum.WORK:
      titlePositionY = 13;
      break;
    default:
      titlePositionY = 11;
  }

  texture.wrapS = Three.ClampToEdgeWrapping;
  texture.wrapT = Three.ClampToEdgeWrapping;
  texture.center.set(0.5, 0.5);
  texture.offset.set(0, 0);
  texture.repeat.set(1, 1);
  texture.rotation = 0;

  const handlePointerOver = () => {
    videoRef.current?.play();
    setHover(true);
    setBloom(true);
  };

  const handlePointerOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setHover(false);
    setBloom(false);
  };

  if (texture.image && !videoRef.current) {
    //videoRef에 texture 내 video 태그 지정
    videoRef.current = texture.image as HTMLVideoElement;
  }

  useFrame((state) => {
    materialRef.current.transparent = true;
    const textMat = textRef.current.material as Three.Material;
    const subTextMat = subTextRef.current.material as Three.Material;
    textMat.transparent = true;
    const camera = new Three.Vector3(0, 0, -10);
    const cameraPos = new Three.Vector3(-state.pointer.x, state.pointer.y, 0);
    const pointerPos = camera.lerp(cameraPos, 0.01);
    state.camera.lookAt(pointerPos);

    if (meshRef.current) {
      let scrollPosition = 0;
      meshRef.current.visible = true;
      textRef.current.visible = true;

      if (materialRef.current.opacity < 1) materialRef.current.opacity += 0.01;
      const radius = 8;
      const baseX = position[0];
      const baseZ = position[2];

      const angle = -scroll.offset * Math.PI;

      //meshRef.current.position.x = baseX*1.5 - Math.cos(angle) * radius;
      meshRef.current.position.z =
        baseZ - Math.sin(angle) * radius - scroll.offset * scroll.pages * 5;
      //textRef.current.position.x = baseX*1.5 - Math.cos(angle) * radius -18;

      textRef.current.position.z =
        baseZ - Math.sin(angle) * radius - scroll.offset * scroll.pages * 5;
      //subTextRef.current.position.x = baseX - Math.cos(angle) * radius -18;

      subTextRef.current.position.z =
        baseZ - Math.sin(angle) * radius - scroll.offset * scroll.pages * 5;

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
      <mesh
        ref={meshRef}
        position={[position[0], position[1], position[2]]}
        rotation={[0, 10, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <RoundedBox args={[10, 15, 0.1]} radius={0.5}>
          <meshStandardMaterial color="#000000" />
        </RoundedBox>
        <meshStandardMaterial
          ref={materialRef}
          map={texture}
          emissive={bloom ? "white" : ""}
          emissiveIntensity={bloom ? 10 : 0}
          color="black"
          opacity={0}
        />
        <mesh position={[0, 0, 0.501]}>
          {" "}
          {/* 박스 바로 위에 올림 */}
          <planeGeometry args={[9, 14]} />
          <meshStandardMaterial map={texture} transparent />
        </mesh>
      </mesh>
      <Text
        ref={textRef}
        fontSize={2}
        position={[-10, titlePositionY, 20]}
        rotation={[0, 8.9, 0]}
        material-opacity={0}
        material-depthWrite={true}
      >
        {type.toLocaleUpperCase()}
      </Text>
      <Text
        ref={subTextRef}
        maxWidth={20}
        fontSize={1}
        position={[-10, 1, 20]}
        rotation={[0, 8.9, 0]}
        material-opacity={0}
        material-depthWrite={true}
      >
        {content}
      </Text>
    </>
  );
};

export default ShowcaseLeftContent;
