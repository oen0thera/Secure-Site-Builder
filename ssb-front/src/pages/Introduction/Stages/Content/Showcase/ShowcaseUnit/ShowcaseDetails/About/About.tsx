import Image from "@/components/Image/Image";
import styles from "./about.module.scss";
import { ImageSize, ImageType } from "@/types/components/Image.type";

export default function About() {
  return (
    <div className={styles.about}>
      <h3 className={styles.title}>저희에 대해서 알려드릴게요</h3>
      <section className={styles.section}>
        <div
          className={styles.aboutus}
        >{`저희는 기업의 퍼스널 브랜딩 어쩌구\n새로운 시대의 장을 여는 저쩌구\n이를 통해 디지털 시대의 선구자가 되겠읍니다`}</div>
      </section>
      <section className={styles.company}>
        <div className={styles.company_image}>
          <Image size={ImageSize.LARGE} type={ImageType.LOGO} />
        </div>
        <div className={styles.company_content}>
          <ul className={styles.company_content_list}>
            <li className={styles.company_content_title}>기업 소개</li>
            <li className={styles.company_content_subtitle}>
              웹사이트 서비스(Website-Service)
            </li>
            <li className={styles.company_content_detail}>
              {`  저희 기업은 서울시 서초구에 위치한 기업으로 웹사이트 서비스에 어떤 기능을 주력으로 하고있습니다. 
혁신 기술을 어떤 기술 기반 B2B로 제공하며 다년간의 IT 서비스 경험을 바탕으로 웹사이트 컴포넌트
모듈화에서 시작해 보안적 측면을 고려한 실시간 모니터링, AI를 활용하여 새로운 보안적 위협에 대한 
실시간 위협 대응 서비스와 같은 기술적 측면 뿐 아니라 사용자들의 만족을 위한 감각적인 디자인을
고려한 UI 및 커스터마이징 서비스도 구현하고 있습니다.`}
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.no}></div>
      </section>
    </div>
  );
}
