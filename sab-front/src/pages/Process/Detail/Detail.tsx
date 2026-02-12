import useCustomStore from "@/store/useCustomStore";
import styles from "./detail.module.scss";
import DetailGNB from "@/pages/Process/Detail/DetailComponents/DetailGNB/DetailGNB";
import { useState } from "react";
import DetailContent from "@/pages/Process/Detail/DetailComponents/DetailContent/DetailContent";

export default function Detail() {
  const [selectedComponent, setSelectedComponent] = useState<string>("");
  const { selectedComponentPositions } = useCustomStore();

  const isRow =
    selectedComponentPositions.gnb?.includes("left") ||
    selectedComponentPositions.gnb?.includes("right");

  const handleSelected = (item: string) => {
    setSelectedComponent(item);
  };

  return (
    <>
      <div className={styles.preview_wrapper}>
        {selectedComponent && <div className={styles.detail_inputs}></div>}
        <div
          className={`${styles.preview} ${isRow ? styles.row : styles.column}`}
        >
          <section
            id="preview_gnb"
            className={`${styles.preview_gnb} ${
              selectedComponent === "preview_gnb" && styles.selected
            }`}
            onClick={(e) => handleSelected(e.currentTarget.id)}
          >
            {isRow ? <DetailGNB /> : <DetailGNB />}
          </section>
          <section
            id="preview_content"
            className={`${styles.preview_content} ${
              selectedComponent === "preview_content" && styles.selected
            }`}
            onClick={(e) => handleSelected(e.currentTarget.id)}
          >
            {isRow ? <DetailContent /> : <DetailContent />}
          </section>
        </div>
      </div>
    </>
  );
}
