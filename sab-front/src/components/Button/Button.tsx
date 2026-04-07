import { ButtonProps, ButtonType } from "@/types/components/Button.type";
import styles from "./button.module.scss";

export default function Button({
  size,
  content,
  type = ButtonType.DEFAULT,
  options,
  onClick,
}: ButtonProps) {
  return (
    <div
      className={`${styles.button} ${styles[size]} ${styles[type]} ${
        options && styles[options]
      }`}
      onClick={onClick}
    >
      {content}
    </div>
  );
}
