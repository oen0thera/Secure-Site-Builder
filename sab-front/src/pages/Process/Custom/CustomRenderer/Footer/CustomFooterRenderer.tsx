import styles from "./custom_footer_renderer.module.scss";
import {
  customComponentType,
  CustomFooterRendererProps,
} from "@/types/components/pages/custom/Custom.type";

export default function CustomFooterRenderer({
  onFooterDrag,
  isSelected,
  handleDrop,
  selectedComponentPositions,
  handleCreatedDrag,
  onToggleSelect,
}: CustomFooterRendererProps) {
  function renderLeft() {
    if (selectedComponentPositions["footer"] === "custom_footer_left") {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_left"}
          className={`${styles.custom_footer} ${styles.left} ${styles.selected} ${
            isSelected ? styles.highlight : ""
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.FOOTER,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.FOOTER,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.FOOTER)}
          draggable
        >
          FOOTER
        </div>
      );
    }
    if (
      onFooterDrag === true &&
      selectedComponentPositions["gnb"] !== "custom_gnb_left" &&
      selectedComponentPositions["sidebar"] !== "custom_sidebar_left"
    ) {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_left"}
          className={`${styles.custom_footer} ${styles.left}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }
  function renderBottom() {
    if (selectedComponentPositions["footer"] === "custom_footer_bottom") {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_bottom"}
          className={`${styles.custom_footer} ${styles.bottom} ${styles.selected} ${
            isSelected ? styles.highlight : ""
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.FOOTER,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.FOOTER,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.FOOTER)}
          draggable
        >
          FOOTER
        </div>
      );
    }
    if (
      onFooterDrag &&
      selectedComponentPositions["gnb"] !== "custom_gnb_bottom" &&
      selectedComponentPositions["sidebar"] !== "custom_sidebar_bottom"
    ) {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_bottom"}
          className={`${styles.custom_footer} ${styles.bottom}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  function renderRight() {
    if (selectedComponentPositions["footer"] === "custom_footer_right") {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_right"}
          className={`${styles.custom_footer} ${styles.right} ${styles.selected} ${
            isSelected ? styles.highlight : ""
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.FOOTER,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.FOOTER,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.FOOTER)}
          draggable
        >
          FOOTER
        </div>
      );
    }
    if (
      onFooterDrag &&
      selectedComponentPositions["gnb"] !== "custom_gnb_right" &&
      selectedComponentPositions["sidebar"] !== "custom_sidebar_right"
    ) {
      return (
        <div
          id={"custom_footer"}
          title={"custom_footer_right"}
          className={`${styles.custom_footer} ${styles.right}`}
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
      {renderBottom()}
      {renderRight()}
    </>
  );
}
