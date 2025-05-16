import { ButtonProps, ButtonSize, ButtonType } from "@/types/components/Button.type";
import styles from './button.module.scss'

export default function Button({ size,content,type=ButtonType.DEFAULT }: ButtonProps) {
  return <div className={`${styles.button} ${size===ButtonSize.SMALL?styles.sm:styles.lg} ${type===ButtonType.GOOGLE?styles.google:type==ButtonType.KAKAO?styles.kakao:type===ButtonType.NAVER?styles.naver:styles.default}`}>{content}</div>;
}
