import styles from "./custom_sidebar_renderer.module.scss";
import {
  customComponentType,
  CustomSidebarRendererProps,
} from "@/types/components/pages/custom/Custom.type";

export default function CustomSidebarRenderer({
  onGnbDrag,
  onSidebarDrag,
  isSelected,
  handleDrop,
  selectedComponentPositions,
  handleCreatedDrag,
  onToggleSelect,
}: CustomSidebarRendererProps) {
  function renderSidebarLeft() {
    if (selectedComponentPositions["sidebar"] === "custom_sidebar_left") {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_left"}
          className={`${styles.custom_sidebar} ${styles.left} ${
            styles.selected
          } ${isSelected ? styles.highlight : ""} ${
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
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.SIDEBAR,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.SIDEBAR,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.SIDEBAR)}
          onDrop={handleDrop}
          draggable
        >
          Sidebar
        </div>
      );
    }

    if (
      onSidebarDrag === true &&
      selectedComponentPositions["gnb"] !== "custom_gnb_left" &&
      selectedComponentPositions["footer"] !== "custom_footer_left"
    ) {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_left"}
          className={`${styles.custom_sidebar} ${styles.left}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  function renderSidebarRight() {
    if (selectedComponentPositions["sidebar"] === "custom_sidebar_right") {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_right"}
          className={`${styles.custom_sidebar} ${styles.right} ${
            styles.selected
          } ${isSelected ? styles.highlight : ""} ${
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
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.SIDEBAR,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.SIDEBAR,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.SIDEBAR)}
          onDrop={handleDrop}
          draggable
        >
          Sidebar
        </div>
      );
    }

    if (
      onSidebarDrag === true &&
      selectedComponentPositions["gnb"] !== "custom_gnb_right" &&
      selectedComponentPositions["footer"] !== "custom_footer_right"
    ) {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_right"}
          className={`${styles.custom_sidebar} ${styles.right}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }
  function renderSidebarTop() {
    if (selectedComponentPositions["sidebar"] === "custom_sidebar_top") {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_top"}
          className={`${styles.custom_sidebar} ${styles.top} ${styles.selected} ${
            isSelected ? styles.highlight : ""
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.SIDEBAR,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.SIDEBAR,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.SIDEBAR)}
          onDrop={handleDrop}
          draggable
        >
          Sidebar
        </div>
      );
    }

    if (
      onSidebarDrag === true &&
      selectedComponentPositions["gnb"] !== "custom_gnb_top" &&
      selectedComponentPositions["footer"] !== "custom_footer_top"
    ) {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_top"}
          className={`${styles.custom_sidebar} ${styles.top}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  function renderSidebarBottom() {
    if (selectedComponentPositions["sidebar"] === "custom_sidebar_bottom") {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_bottom"}
          className={`${styles.custom_sidebar} ${styles.bottom} ${styles.selected} ${
            isSelected ? styles.highlight : ""
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={() => {
            handleCreatedDrag({
              isDragging: true,
              type: customComponentType.SIDEBAR,
            });
          }}
          onDragEnd={() => {
            handleCreatedDrag({
              isDragging: false,
              type: customComponentType.SIDEBAR,
            });
          }}
          onClick={() => onToggleSelect(customComponentType.SIDEBAR)}
          onDrop={handleDrop}
          draggable
        >
          Sidebar
        </div>
      );
    }

    if (
      onSidebarDrag === true &&
      selectedComponentPositions["gnb"] !== "custom_gnb_bottom" &&
      selectedComponentPositions["footer"] !== "custom_footer_bottom"
    ) {
      return (
        <div
          id={"custom_sidebar"}
          title={"custom_sidebar_bottom"}
          className={`${styles.custom_sidebar} ${styles.bottom}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        ></div>
      );
    }

    return null;
  }

  return (
    <>
      {renderSidebarLeft()}
      {renderSidebarRight()}
      {renderSidebarTop()}
      {renderSidebarBottom()}
    </>
  );
}
