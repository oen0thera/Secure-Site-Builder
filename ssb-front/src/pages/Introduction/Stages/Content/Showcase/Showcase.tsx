import * as Three from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { CubicBezierCurve3, Vector3 } from "three";
import {
  OrbitControls,
  RoundedBox,
  Scroll,
  ScrollControls,
  ScrollControlsProps,
  ScrollControlsState,
  Text,
  useScroll,
  useVideoTexture,
} from "@react-three/drei";
import {
  createRef,
  Dispatch,
  forwardRef,
  FragmentProps,
  RefObject,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import styles from "./showcase.module.scss";
import {
  ShowcaseProps,
  ShowcaseUnitEnum,
} from "@/types/components/pages/introduction/Content/Showcase.type";
import { ImageSize, ImageSrc, ImageType } from "@/types/components/Image.type";
import Icon from "@/components/Icon/Icon";
import { IconColor, IconSize, IconSrc } from "@/types/components/Icon.type";
import Button from "@/components/Button/Button";
import { ButtonSize, ButtonType } from "@/types/components/Button.type";
import ShowcaseLeftContent from "@/pages/Introduction/Stages/Content/Showcase/ShowcaseUnit/ShowcaseLeftContent";
import ScrollDetect from "@/pages/Introduction/Stages/Content/Showcase/ScrollDetect/ScrollDetect";
import ShowcasePlane from "./ShowcasePlane/ShowcasePlane";
import ShowcaseBackground from "./ShowcaseBackground/ShowcaseBackground";
export default function Showcase({
  scroll,
  nextStage,
  prevStage,
}: ShowcaseProps) {
  const [screenOff, setScreenOff] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const [scrollIcon, setScrollIcon] = useState(true);
  const [scrollTo, setScrollTo] = useState<number | null>(0);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const [pointerHover, setPointerHover] = useState(false);

  const page = 4;
  const content = Array(page)
    .fill(undefined, 0, page)
    .map((item, i) => {
      let type;
      let content;
      switch (i) {
        case 0:
          type = ShowcaseUnitEnum.ABOUT;
          content = `SSB는 최신 보안 표준을 기반으로 한 웹사이트 빌딩 서비스를 제공합니다.

개인정보 보호, 데이터 암호화, 침입 탐지 및 예방 체계를 기본으로 하여, 클라이언트와 사용자의 신뢰를 쌓는 디지털 환경을 만듭니다.

보안은 선택이 아니라 필수이며, 다양한 위협상황에서 저희는 그 선두주자로써 활약하고자 합니다.

저희의 목표는 "모든 웹사이트는 안전해야 한다"는 신념 아래, 사용하기 쉽고 믿을 수 있는 웹 플랫폼을 구축하는 것이며, 항상 더 안전하고 정확한 서비스 제공을 위해 노력하고 있습니다.`;
          break;
        case 1:
          type = ShowcaseUnitEnum.WORK;
          content = `FinSafe 보험사 웹 포털 리뉴얼
🔐 HTTPS 적용 / OWASP 기준 준수 / 로그인 2FA 적용
📍 결과: 월간 로그인 보안 사고 0건 유지 중

EduSecure 온라인 교육 플랫폼\n
🎓 사용자 인증 및 역할 기반 권한 관리
🛡️ 콘텐츠 DRM 적용 및 비인가 다운로드 차단

HealthTrust 클리닉 예약 시스템
🏥 의료 정보 암호화 저장 / GDPR 대응 설계
📊 관리자 대시보드 보안 인증 프로세스 포함

eCommX 보안 쇼핑몰 구축
💳 결제 정보 분리 저장 / PCI-DSS 레벨1 대응
🔄 정기 보안 스캔 및 취약점 리포트 제공`;
          break;
        case 2:
          type = ShowcaseUnitEnum.IDEA;
          content = `[2025 보안 웹 개발 워크샵]
📅 일시: 2025년 7월 12일 (토) 
          오후 2시 ~ 6시
📍 장소: 서울 강남구 테헤란로 420, 5F

[NEWS]
2025년 4월: 보안 템플릿 마켓 출시!
클릭 몇 번으로도 강력한 보안 기반 템플릿을 사용하세요.

2025년 5월: AI 기반 침입 감지 로그 분석기 공개 베타 시작!`;
          break;
        default:
          type = ShowcaseUnitEnum.CONTACT;
          content = `📧 Email: support@securebuild.dev

📞 전화: 02-1234-5678

💬 문의 폼: https://securebuild.dev/contact

📍 주소: 서울시 성동구 성수일로 77, 8층

🔒 보안 협업 제휴 문의: biz@securebuild.dev`;
      }
      return (
        <ShowcaseLeftContent
          position={[10, 0, 20 + 40 * i]}
          page={i + 1}
          type={type}
          content={""}
          setHover={setPointerHover}
          setScreenOff={setScreenOff}
        />
      );
    });

  useEffect(() => {
    let scrollInterval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      setHasMounted(true);
      scrollInterval = setInterval(() => {
        setScrollIcon((prev) => {
          return !prev;
        });
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearInterval(scrollInterval);
    };
  }, []);

  useEffect(() => {
    console.log(scroll, scrollOffset);
    if (scroll === 0 && Math.abs(scrollOffset - 1) < 0.01) {
      setTimeout(() => {
        nextStage(true);
      }, 1000);
    } else if (scroll === 1 && scrollOffset < 0.01) {
      prevStage(true);
    }
  }, [scroll, scrollOffset]);

  const onScroll = (scroll: number) => {
    if (scroll > 0) {
      setScrollOffset(scroll);

      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  return (
    <div
      className={`${styles.screen} ${
        screenOff || Math.abs(scrollOffset - 1) < 0.01 ? styles.off : null
      }`}
      style={{ cursor: pointerHover ? "pointer" : "" }}
    >
      <section className={styles.canvas}>
        <div className={styles.ui}>
          {hasMounted && (
            <h3
              className={`${styles.scroll_ui} ${
                scrollState === false ? styles.on : styles.off
              }`}
            >
              Scroll down to traverse
            </h3>
          )}
        </div>
        {hasMounted && !scrollState && (
          <div
            className={`${styles.scroll} ${
              scrollIcon ? styles.on : styles.off
            }`}
          >
            <Icon
              src={IconSrc.SCROLL}
              size={IconSize.SMALL}
              color={IconColor.WHITE}
            />
          </div>
        )}
        <Canvas camera={{ position: [0, 0, -10] }}>
          <ShowcaseBackground />
          <ScrollControls pages={30}>
            <ScrollDetect
              onScroll={onScroll}
              scrollTo={scrollTo}
              setScroll={setScrollTo}
            />
            <Scroll html>
              <div></div>
            </Scroll>

            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />
            {content}
            <ShowcasePlane />
            <gridHelper args={[10, 10]} />
            <axesHelper args={[8]} />

            {/* <OrbitControls/> */}
          </ScrollControls>
        </Canvas>
      </section>
      <div className={styles.snb}>
        <h2>스크롤 항목</h2>
        <div className={styles.navigation}>
          <Button
            size={ButtonSize.EXTRA_LARGE}
            content={"항목1"}
            type={ButtonType.DARK}
            onClick={() => {
              setScrollTo(1);
            }}
          />
          <Button
            size={ButtonSize.EXTRA_LARGE}
            content={"항목2"}
            type={ButtonType.DARK}
            onClick={() => {
              setScrollTo(2);
            }}
          />
          <Button
            size={ButtonSize.EXTRA_LARGE}
            content={"항목3"}
            type={ButtonType.DARK}
            onClick={() => {
              setScrollTo(3);
            }}
          />
          <Button
            size={ButtonSize.EXTRA_LARGE}
            content={"항목4"}
            type={ButtonType.DARK}
            onClick={() => {
              setScrollTo(4);
            }}
          />
        </div>
      </div>
    </div>
  );
}
