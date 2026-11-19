import { useState } from "react";
import styles from "./custom.module.scss";
import Customizer from "./Customizer/Customizer";
import {
  customComponentType,
  CustomSelectionProps,
  handleCustomDragParam,
} from "@/types/components/pages/custom/Custom.type";
import CustomGnbRenderer from "@/pages/Process/Custom/CustomRenderer/Gnb/CustomGnbRenderer";
import CustomContentRenderer from "@/pages/Process/Custom/CustomRenderer/Content/CustomContentRenderer";
import CustomSidebarRenderer from "@/pages/Process/Custom/CustomRenderer/Sidebar/CustomSidebarRenderer";
import CustomFooterRenderer from "@/pages/Process/Custom/CustomRenderer/Footer/CustomFooterRenderer";
import useCustomStore from "@/store/useCustomStore";

export default function Custom({
  selectedTypes,
  toggleSelect,
}: CustomSelectionProps) {
  const { selectedComponentPositions, setSelectedComponentPositions } =
    useCustomStore();
  const [isDraggingCreated, setIsDraggingCreated] = useState(false);
  const [onGnbDrag, setOnGnbDrag] = useState(false);
  const [onContentDrag, setOnContentDrag] = useState(false);
  const [onSidebarDrag, setOnSidebarDrag] = useState(false);
  const [onFooterDrag, setOnFooterDrag] = useState(false);

  const handleCustomDrag = ({ isDragging, type }: handleCustomDragParam) => {
    switch (type) {
      case customComponentType.GNB:
        setOnGnbDrag(isDragging);
        break;
      case customComponentType.CONTENT:
        setOnContentDrag(isDragging);
        break;
      case customComponentType.SIDEBAR:
        setOnSidebarDrag(isDragging);
        break;
      case customComponentType.FOOTER:
        setOnFooterDrag(isDragging);
        break;
    }
  };
  const handleCreatedDrag = ({ isDragging, type }: handleCustomDragParam) => {
    setIsDraggingCreated(isDragging);
    switch (type) {
      case customComponentType.GNB:
        setOnGnbDrag(isDragging);
        break;
      case customComponentType.CONTENT:
        setOnContentDrag(isDragging);
        break;
      case customComponentType.SIDEBAR:
        setOnSidebarDrag(isDragging);
        break;
      case customComponentType.FOOTER:
        setOnFooterDrag(isDragging);
        break;
    }
  };

  const validateDuplicateDrop = (component: string) => {
    const splitComponent = component.split("_");
    const position = splitComponent[splitComponent.length - 1];
    const validation = Object.values(selectedComponentPositions).every(
      (selectedComponent) => {
        if (selectedComponent?.includes(position)) {
          return false;
        }
        return true;
      }
    );
    return validation;
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const component = event.currentTarget.title;
    if (validateDuplicateDrop(component) === false) {
      alert(
        "이미 배치된 위치입니다. 기존 요소를 삭제하시거나 다른 위치를 선택해주세요."
      );
      setOnGnbDrag(false);
      setOnContentDrag(false);
      setOnSidebarDrag(false);
      setOnFooterDrag(false);
      return;
    }

    switch (event.currentTarget.id) {
      case "custom_gnb":
        setSelectedComponentPositions((prev) => {
          return { ...prev, gnb: component };
        });
        break;
      case "custom_content":
        setSelectedComponentPositions((prev) => {
          return { ...prev, content: component };
        });
        break;
      case "custom_sidebar":
        setSelectedComponentPositions((prev) => {
          return { ...prev, sidebar: component };
        });
        break;
      case "custom_footer":
        setSelectedComponentPositions((prev) => {
          return { ...prev, footer: component };
        });
        break;
    }

    setOnGnbDrag(false);
    setOnContentDrag(false);
    setOnSidebarDrag(false);
    setOnFooterDrag(false);
  };

  return (
    <>
      <div className={styles.custom}>
        <section className={styles.custom_section}>
          <div className={styles.custom_components} data-testid="custom-palette">
            <h2>Customizer</h2>
            <Customizer handleCustomDrag={handleCustomDrag} />
          </div>
          <div
            className={`${styles.custom_canvas} ${
              selectedComponentPositions["gnb"] === "custom_gnb_top"
                ? styles.column
                : styles.row
            }`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <CustomGnbRenderer
              onGnbDrag={onGnbDrag}
              isDraggingCreated={isDraggingCreated}
              isSelected={selectedTypes.includes(customComponentType.GNB)}
              handleDrop={handleDrop}
              handleCreatedDrag={handleCreatedDrag}
              selectedComponentPositions={selectedComponentPositions}
              onToggleSelect={toggleSelect}
            />
            <CustomContentRenderer
              onGnbDrag={onGnbDrag}
              onContentDrag={onContentDrag}
              onSidebarDrag={onSidebarDrag}
              isDraggingCreated={isDraggingCreated}
              isSelected={selectedTypes.includes(customComponentType.CONTENT)}
              handleDrop={handleDrop}
              handleCreatedDrag={handleCreatedDrag}
              selectedComponentPositions={selectedComponentPositions}
              onToggleSelect={toggleSelect}
            />
            <CustomSidebarRenderer
              onGnbDrag={onGnbDrag}
              onContentDrag={onContentDrag}
              onSidebarDrag={onSidebarDrag}
              isDraggingCreated={isDraggingCreated}
              isSelected={selectedTypes.includes(customComponentType.SIDEBAR)}
              handleDrop={handleDrop}
              handleCreatedDrag={handleCreatedDrag}
              selectedComponentPositions={selectedComponentPositions}
              onToggleSelect={toggleSelect}
            />
            <CustomFooterRenderer
              onFooterDrag={onFooterDrag}
              isDraggingCreated={isDraggingCreated}
              isSelected={selectedTypes.includes(customComponentType.FOOTER)}
              handleDrop={handleDrop}
              handleCreatedDrag={handleCreatedDrag}
              selectedComponentPositions={selectedComponentPositions}
              onToggleSelect={toggleSelect}
            />
          </div>
        </section>
      </div>
    </>
  );
}
