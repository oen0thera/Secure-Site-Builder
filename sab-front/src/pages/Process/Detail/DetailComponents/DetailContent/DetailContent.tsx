import styles from "./detail_content.module.scss";

interface DetailContentProps {
  position?: string;
  height?: number;
}

export default function DetailContent({
  position = "top",
  height = 100,
}: DetailContentProps) {
  return (
    <div
      className={`${styles.content} ${
        position === "top" ? styles.top : styles.side
      }`}
    ></div>
  );
}
