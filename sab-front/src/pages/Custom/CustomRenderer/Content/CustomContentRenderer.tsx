import styles from "./custom_content_renderer.module.scss";
import {
  customComponentType,
  CustomContentRendererProps,
} from "@/types/components/pages/custom/Custom.type";

export default function CustomContentRenderer({
  onGnbDrag,
  onContentDrag,
  handleDrop,
  selectedComponentPositions,
  handleCreatedDrag,
}: CustomContentRendererProps) {
  function renderContent() {
    if (selectedComponentPositions["content"] === "custom_content") {
      return (
        <div
          id={"custom_content"}
          title={"custom_content"}
          className={`${styles.custom_content} ${styles.selected} ${
            selectedComponentPositions["gnb"] === "custom_gnb_right"
              ? onGnbDrag
                ? styles.vertical_changable
                : styles.vertical_expand
              : selectedComponentPositions["gnb"] === "custom_gnb_left"
              ? onGnbDrag
                ? styles.vertical_changable
                : styles.vertical_expand
              : null
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            console.log("dragStart");
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.CONTENT,
            });
          }}
          onDrop={handleDrop}
          draggable
        >
          Content
        </div>
      );
    }

    if (onContentDrag === true) {
      return (
        <div
          id={"custom_content"}
          title={"custom_content"}
          className={`${styles.custom_content}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }
  return (
    <>
      {/* Content 파트 */}
      {renderContent()}
    </>
  );
}
