import useCustomStore from "@/store/useCustomStore";
import styles from "./detail.module.scss";
import DetailGNB from "@/pages/Process/Detail/DetailComponents/DetailGNB/DetailGNB";
import { useState } from "react";
import DetailContent from "@/pages/Process/Detail/DetailComponents/DetailContent/DetailContent";
import DetailInputs from "@/pages/Process/Detail/DetailInputs/DetailInputs";
import {
  DETAIL_GNB_INPUTS,
  DETAIL_POSITION,
  DETAIL_TYPE,
  DetailInputData,
  DetailPosition,
  DetailType,
} from "@/types/components/pages/details/detail.type";

export default function Detail() {
  const [selectedComponent, setSelectedComponent] = useState<string>("");
  const [detailType, setDetailType] = useState<DetailType>();
  const [detailPositions, setDetailPositions] = useState<DetailPosition>();
  const [detailInputs, setDetailInputs] = useState<DetailInputData>();
  const { selectedComponentPositions } = useCustomStore();

  const isRow =
    selectedComponentPositions.gnb?.includes("left") ||
    selectedComponentPositions.gnb?.includes("right");

  const handleSelected = (item: string) => {
    setSelectedComponent(item);
    const selectedComponentElements = item.split("_");
    const validatedType = Object.values(DETAIL_TYPE).find(
      (t) => t === selectedComponentElements[1]
    );
    const validatedPosition =
      selectedComponentElements[2] &&
      Object.values(DETAIL_POSITION).find(
        (p) => p === selectedComponentElements[2]
      );
    // ex) custom_gnb_top -> ['custom', 'gnb', 'top']
    // type : selectedComponentElements[1], position : selectedComponentElements[2]
    if (validatedType) {
      //타입 설정
      setDetailType(validatedType);
    }
    if (validatedPosition) {
      //위치 설정
      setDetailPositions(validatedPosition);
    }
    switch (validatedType) {
      case "gnb":
        setDetailInputs(DETAIL_GNB_INPUTS);
        break;
    }
  };

  return (
    <>
      <div className={styles.preview_wrapper}>
        {selectedComponent && (
          <DetailInputs
            type={detailType}
            position={detailPositions}
            inputs={detailInputs}
          />
        )}
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
