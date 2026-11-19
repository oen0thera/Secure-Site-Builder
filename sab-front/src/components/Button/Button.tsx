import { ButtonProps, ButtonType, FontColor } from "@/types/components/Button.type";
import styles from "./button.module.scss";

export default function Button({
  size,
  content,
  fontColor = FontColor.BLACK,
  type = ButtonType.DEFAULT,
  options,
  onClick,
  dataTestId,
}: ButtonProps) {
  return (
    <div
      className={`${styles.button} ${styles[size]} ${styles[type]} ${styles[fontColor]} ${
        options && styles[options]
      }`}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {content}
    </div>
  );
}
