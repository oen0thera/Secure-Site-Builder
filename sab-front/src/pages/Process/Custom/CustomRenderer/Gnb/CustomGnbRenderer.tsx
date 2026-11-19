import styles from "./custom_gnb_renderer.module.scss";
import {
  customComponentType,
  CustomGnbRendererProps,
} from "@/types/components/pages/custom/Custom.type";

export default function CustomGnbRenderer({
  onGnbDrag,
  isSelected,
  handleDrop,
  selectedComponentPositions,
  handleCreatedDrag,
  onToggleSelect,
}: CustomGnbRendererProps) {
  function renderLeft() {
    if (selectedComponentPositions["gnb"] === "custom_gnb_left") {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_left"}
          className={`${styles.custom_gnb} ${styles.left} ${styles.selected} ${
            isSelected ? styles.highlight : ""
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.GNB,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.GNB,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.GNB)}
          draggable
        >
          GNB
        </div>
      );
    }
    if (
      onGnbDrag === true &&
      selectedComponentPositions["sidebar"] !== "custom_sidebar_left" &&
      selectedComponentPositions["footer"] !== "custom_footer_left"
    ) {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_left"}
          className={`${styles.custom_gnb} ${styles.left}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }
  function renderTop() {
    if (selectedComponentPositions["gnb"] === "custom_gnb_top") {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_top"}
          className={`${styles.custom_gnb} ${styles.top} ${styles.selected} ${
            isSelected ? styles.highlight : ""
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.GNB,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.GNB,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.GNB)}
          draggable
        >
          GNB
        </div>
      );
    }
    if (
      onGnbDrag &&
      selectedComponentPositions["sidebar"] !== "custom_sidebar_top" &&
      selectedComponentPositions["footer"] !== "custom_footer_top"
    ) {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_top"}
          className={`${styles.custom_gnb} ${styles.top}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  function renderRight() {
    if (selectedComponentPositions["gnb"] === "custom_gnb_right") {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_right"}
          className={`${styles.custom_gnb} ${styles.right} ${styles.selected} ${
            isSelected ? styles.highlight : ""
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.GNB,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.GNB,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.GNB)}
          draggable
        >
          GNB
        </div>
      );
    }
    if (
      onGnbDrag &&
      selectedComponentPositions["sidebar"] !== "custom_sidebar_right" &&
      selectedComponentPositions["footer"] !== "custom_footer_right"
    ) {
      return (
        <div
          id={"custom_gnb"}
          title={"custom_gnb_right"}
          className={`${styles.custom_gnb} ${styles.right}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  return (
    <>
      {renderLeft()}
      {renderTop()}
      {renderRight()}
    </>
  );
}
