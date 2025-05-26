import { ButtonProps, ButtonSize, ButtonType } from "@/types/components/Button.type";
import styles from './button.module.scss'

export default function Button({ size,content,type=ButtonType.DEFAULT,onClick }: ButtonProps) {
  return <div className={`${styles.button} ${size===ButtonSize.SMALL?styles.sm:size===ButtonSize.LARGE?styles.lg:styles.xl} ${styles[type]}`} onClick={onClick}>{content}</div>;
}
