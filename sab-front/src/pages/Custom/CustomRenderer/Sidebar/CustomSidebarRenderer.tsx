import styles from "./custom_content_renderer.module.scss";
import {
  customComponentType,
  CustomSidebarRendererProps,
} from "@/types/components/pages/custom/Custom.type";

export default function CustomSidebarRenderer({
  onGnbDrag,
  onContentDrag,
  onSidebarDrag,
  handleDrop,
  selectedComponentPositions,
  handleCreatedDrag,
}: CustomSidebarRendererProps) {
  function renderContent() {
    if (selectedComponentPositions["sidebar"] === "custom_sidebar") {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar"}
          className={`${styles.custom_sidebar} ${styles.selected} ${
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
