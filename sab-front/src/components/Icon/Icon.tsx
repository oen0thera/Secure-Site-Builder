import { IconColor, IconProps, IconSize } from "@/types/components/Icon.type";
import styles from "./icon.module.scss";
export default function Icon({
  size,
  src,
  color = IconColor.DEFAULT,
  options,
}: IconProps) {
  let iconSize;
  switch (size) {
    case IconSize.EXTRA_SMALL_SMALL:
      iconSize = 12;
      break;
    case IconSize.EXTRA_SMALL:
      iconSize = 20;
      break;
    case IconSize.SMALL:
      iconSize = 50;
      break;
    default:
      iconSize = 100;
  }

  const getOptions = () => {
    let transforms = [];
    if (options?.inverted) transforms.push("rotate(-180deg)");
    if (options?.pivoted) transforms.push("rotate(-90deg)");

    return transforms.length > 0 ? { transform: transforms.join(" ") } : {};
  };
  return (
    <div className={styles.icon}>
      <img
        className={styles[color]}
        src={`/icons/${src}`}
        width={iconSize}
        style={getOptions()}
      />
    </div>
  );
}
