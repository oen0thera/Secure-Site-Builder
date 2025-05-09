import { ButtonProps, ButtonSize } from "@/types/components/Button.type";
import styles from './button.module.scss'

export default function Button({ size,content }: ButtonProps) {
  return <div className={`${styles.button} ${size===ButtonSize.SMALL?styles.sm:styles.lg}`}>{content}</div>;
}
