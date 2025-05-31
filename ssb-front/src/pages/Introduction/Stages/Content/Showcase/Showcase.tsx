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

export default function Showcase({
  scroll,
  nextStage,
  prevStage,
}: ShowcaseProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const [scrollIcon, setScrollIcon] = useState(true);
  const [scrollTo, setScrollTo] = useState<number | null>(0);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const page = 4;
  const content = Array(page)
    .fill(undefined, 0, page)
    .map((item, i) => {
      let type;
      switch (i) {
        case 0:
          type = ShowcaseUnitEnum.ABOUT;
          break;
        case 1:
          type = ShowcaseUnitEnum.WORK;
          break;
        case 2:
          type = ShowcaseUnitEnum.IDEA;
          break;
        default:
          type = ShowcaseUnitEnum.CONTACT;
      }
      return (
        <ShowcaseLeftContent
          position={[10, 0, 20 + 40 * i]}
          page={i + 1}
          type={type}
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
        Math.abs(scrollOffset - 1) < 0.01 ? styles.off : null
      }`}
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
