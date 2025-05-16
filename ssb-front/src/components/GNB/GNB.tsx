import Image from "@/components/Image/Image";
import styles from "./gnb.module.scss";
import { ImageSize, ImageSrc, ImageType } from "@/types/components/Image.type";
import Button from "../Button/Button";
import { ButtonSize } from "@/types/components/Button.type";
export default function GNB() {
  return (
    <div className={styles.gnb}>
      <a href={'/'}><Image size={ImageSize.SMALL} src={ImageSrc.LOGO} type={ImageType.LOGO} /></a>
      
      <div className={styles.gnb_bar}>
        <ul className={styles.nav_bar}>
          <li><a href={'/intro'}>소개</a></li>
          <li>템플릿</li>
          <li>요금</li>
          <li>고객지원</li>
        </ul>
        <ul className={styles.login_bar}>
          <li><a href={'/login'}>로그인</a></li>
          <li>회원가입</li>
          <li>
            <Button size={ButtonSize.SMALL} content={"무료로 시작하기"}/>
          </li>
        </ul>
      </div>
    </div>
  );
}
