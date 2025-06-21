import { useEffect, useState } from "react";
import styles from "./custom.module.scss";
import Customizer from "./Customizer/Customizer";
import { handleCustomDragParam } from "@/types/components/pages/custom/Custom.type";
export default function Custom() {
  const [selectedComponentPositions, setSelectedComponentPositions] = useState<{
    [key: string]: string | null;
  }>({
    gnb: null,
    content: null,
    sidebar: null,
    footer: null,
  });
  const [onGnbDrag, setOnGnbDrag] = useState(false);
  const [onContentDrag, setOnContentDrag] = useState(false);

  const handleCustomDrag = ({ isDragging, type }: handleCustomDragParam) => {
    console.log(isDragging, type);
    switch (type) {
      case "gnb":
        setOnGnbDrag(isDragging);
        break;
      case "content":
        console.log(isDragging);
        setOnContentDrag(isDragging);
        break;
    }
  };

  useEffect(() => {
    console.log(selectedComponentPositions, onGnbDrag, onContentDrag);
  }, [selectedComponentPositions]);

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {};

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    console.log(event.currentTarget);
    let component = "";
    switch (event.currentTarget.id) {
      case "custom_gnb":
        console.log(event.currentTarget.id);
        component = event.currentTarget.title;
        setSelectedComponentPositions((prev) => {
          return { ...prev, gnb: component };
        });

        break;
      case "custom_content":
        console.log(event.currentTarget.id);
        component = event.currentTarget.title;
        setSelectedComponentPositions((prev) => {
          return { ...prev, content: component };
        });

        break;
    }
    if (!event.currentTarget.title && onGnbDrag) {
      setSelectedComponentPositions((prev) => {
        return { ...prev, gnb: null };
      });
      setOnGnbDrag(false);
    }
    if (!event.currentTarget.title && onContentDrag) {
      setSelectedComponentPositions((prev) => {
        return { ...prev, content: null };
      });
      setOnContentDrag(false);
    }
  };

  return (
    <>
      {(onGnbDrag || onContentDrag) && (
        <div
          className={styles.preventGnbDrop}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          NO GNB
        </div>
      )}
      <div
        className={styles.custom}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <section className={styles.custom_section}>
          <div className={styles.custom_components}>
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
            {/* GNB 파트 */}

            {onGnbDrag ? (
              <div
                id={"custom_gnb"}
                title={"custom_gnb_left"}
                className={`${styles.custom_gnb} ${styles.left}`}
                onDragEnter={handleDragEnter}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={handleDrop}
              ></div>
            ) : selectedComponentPositions["gnb"] === "custom_gnb_left" ? (
              <div
                id={"custom_gnb"}
                title={"custom_gnb_left"}
                className={`${styles.custom_gnb} ${styles.left} ${styles.selected}`}
                onDragOver={(e) => e.preventDefault()}
                onDragStart={() => {
                  console.log("dragStart");
                  setOnGnbDrag(true);
                }}
                draggable
              >
                GNB
              </div>
            ) : null}
            {onGnbDrag ? (
              <div
                id={"custom_gnb"}
                title={"custom_gnb_top"}
                className={`${styles.custom_gnb} ${styles.top}`}
                onDragEnter={handleDragEnter}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              ></div>
            ) : selectedComponentPositions["gnb"] === "custom_gnb_top" ? (
              <div
                id={"custom_gnb"}
                title={"custom_gnb_top"}
                className={`${styles.custom_gnb} ${styles.top} ${styles.selected}`}
                onDragOver={(e) => e.preventDefault()}
                onDragStart={() => {
                  console.log("dragStart");
                  setOnGnbDrag(true);
                }}
                draggable
              >
                GNB
              </div>
            ) : null}
            {onGnbDrag ? (
              <div
                id={"custom_gnb"}
                title={"custom_gnb_right"}
                className={`${styles.custom_gnb} ${styles.right}`}
                onDragEnter={handleDragEnter}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={handleDrop}
              ></div>
            ) : selectedComponentPositions["gnb"] === "custom_gnb_right" ? (
              <div
                id={"custom_gnb"}
                title={"custom_gnb_right"}
                className={`${styles.custom_gnb} ${styles.right} ${styles.selected}`}
                onDragOver={(e) => e.preventDefault()}
                onDragStart={() => {
                  console.log("dragStart");
                  setOnGnbDrag(true);
                }}
                draggable
              >
                GNB
              </div>
            ) : null}

            {/* Content 파트 */}
            {onContentDrag ? (
              <div
                id={"custom_content"}
                title={"custom_content"}
                className={`${styles.custom_content}`}
                onDragEnter={handleDragEnter}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              ></div>
            ) : selectedComponentPositions["content"] === "custom_content" ? (
              <div
                id={"custom_content"}
                title={"custom_content"}
                className={`${styles.custom_content} ${styles.selected} ${
                  selectedComponentPositions["gnb"] === "custom_gnb_right"
                    ? styles.vertical_expand
                    : selectedComponentPositions["gnb"] === "custom_gnb_left"
                    ? styles.vertical_expand
                    : null
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDragStart={() => {
                  console.log("dragStart");
                  setOnContentDrag(true);
                }}
                draggable
              >
                Content
              </div>
            ) : (
              <div>{}</div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
