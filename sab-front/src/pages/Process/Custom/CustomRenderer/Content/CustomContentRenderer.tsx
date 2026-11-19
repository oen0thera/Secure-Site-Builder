import styles from "./custom_content_renderer.module.scss";
import {
  customComponentType,
  CustomContentRendererProps,
} from "@/types/components/pages/custom/Custom.type";

export default function CustomContentRenderer({
  onGnbDrag,
  onContentDrag,
  onSidebarDrag,
  isDraggingCreated,
  isSelected,
  handleDrop,
  selectedComponentPositions,
  handleCreatedDrag,
  onToggleSelect,
}: CustomContentRendererProps) {
  function renderContent() {
    if (selectedComponentPositions["content"] === "custom_content") {
      return (
        <div
          id={"custom_content"}
          title={"custom_content"}
          className={`${styles.custom_content} ${styles.selected} ${
            isSelected ? styles.highlight : ""
          } ${
            selectedComponentPositions["sidebar"] !== "custom_sidebar_bottom" &&
            selectedComponentPositions["sidebar"] !== "custom_sidebar_top"
              ? selectedComponentPositions["gnb"] === "custom_gnb_right"
                ? onGnbDrag || onSidebarDrag
                  ? styles.vertical_changable
                  : styles.vertical_expand
                : selectedComponentPositions["gnb"] === "custom_gnb_left"
                ? onGnbDrag || onSidebarDrag
                  ? styles.vertical_changable
                  : styles.vertical_expand
                : null
              : null
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.CONTENT,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.CONTENT,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.CONTENT)}
          onDrop={handleDrop}
          draggable
        >
          Content
        </div>
      );
    }

    if (onContentDrag === true && !isDraggingCreated) {
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
      {renderContent()}
    </>
  );
}
