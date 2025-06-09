import Image from "@/components/Image/Image";
import styles from "./about.module.scss";
import { ImageSize, ImageSrc, ImageType } from "@/types/components/Image.type";
import { useEffect, useRef } from "react";

export default function About() {
  const bannerRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={styles.about}>
      <h3 className={styles.title}>저희에 대해서 알려드릴게요</h3>
      {/* <section className={styles.section}>
        <video src={"/videos/test_banner.mp4"} loop autoPlay muted></video>
      </section> */}

      <section className={styles.section}>
        <div
          className={styles.aboutus}
        >{`저희 서비스는 기업의 퍼스널 브랜딩 어쩌구\n새로운 시대의 장을 여는 저쩌구\n이를 통해 디지털 시대의 선구자가 되겠읍니다`}</div>
      </section>
      <section className={styles.section}>
        <div className={styles.company}>
          <div className={styles.company_image}>
            <Image size={ImageSize.LARGE} type={ImageType.LOGO} />
          </div>
          <div className={styles.company_content}>
            <ul className={styles.company_content_list}>
              <li className={styles.company_content_title}>프로젝트 소개</li>
              <li className={styles.company_content_subtitle}>
                웹사이트 서비스(Website-Service)
              </li>
              <li className={styles.company_content_detail}>
                {`  저희 서비스는 웹사이트 서비스에 어떤 기능을 주력으로 하고있습니다. 
혁신 기술을 어떤 기술 기반 B2B로 제공하며 다년간의 IT 서비스 경험을 바탕으로 웹사이트 컴포넌트
모듈화에서 시작해 보안적 측면을 고려한 실시간 모니터링등 기술적 측면 뿐 아니라 사용자들의 만족을 위한 감각적인 디자인을
고려한 UI 및 커스터마이징 서비스를 제공하고 있으며, AI를 활용하여 새로운 보안적 위협에 대한 
실시간 위협 대응 서비스 또한 구현 예정 중에 있습니다. `}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.tech}>
          <ul className={styles.tech_content_list}>
            <li className={styles.tech_content_title}>기술 스택</li>
            <li className={styles.tech_content_subtitle}>
              <div>{"Frontend "}</div>
              <ul>
                <li> </li>
                <li>Framework : React</li>
                <li>Language : TypeScript</li>
                <li>WebGL : React-Three-Fiber/Drei</li>
                <li>State : Zustand</li>
              </ul>
            </li>
            <li className={styles.tech_content_subtitle}>
              <div>{"Backend "}</div>
              <ul>
                <li> </li>
                <li>Framework : Spring</li>
                <li>Language : Java</li>
                <li>Database : Oracle</li>
                <li>Release : AWS</li>
              </ul>
            </li>
            <li className={styles.tech_content_subtitle}>
              <div>{"Security "}</div>
              <ul>
                <li> </li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
              </ul>
            </li>
            <li className={styles.tech_content_subtitle}>
              <div>{"AI "}</div>
              <ul>
                <li> </li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
                <li>ON CONSTRUCTION</li>
              </ul>
            </li>
          </ul>
          <div className={styles.tech_image}>
            <Image
              size={ImageSize.LARGE}
              src={ImageSrc.TECH}
              type={ImageType.TECH}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
