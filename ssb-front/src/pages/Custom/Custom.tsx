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

  const handleCustomDrag = ({ isDragging, type }: handleCustomDragParam) => {
    setOnGnbDrag(isDragging);
  };

  useEffect(() => {
    console.log(selectedComponentPositions);
  }, [selectedComponentPositions]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    let component = "";
    switch (event.currentTarget.id) {
      case "custom_gnb":
        console.log(event.currentTarget.id);
        switch (event.currentTarget.title) {
          case "custom_gnb_top":
            component = event.currentTarget.title;

            setSelectedComponentPositions((prev) => {
              return { ...prev, gnb: component };
            });
            break;
          default:
            console.log(event.currentTarget.title);
            setSelectedComponentPositions((prev) => {
              return { ...prev, gnb: null };
            });
        }

        break;
    }
    if (!event.currentTarget.title && onGnbDrag) {
      setSelectedComponentPositions((prev) => {
        return { ...prev, gnb: null };
      });
      setOnGnbDrag(false);
    }
  };

  return (
    <div className={styles.custom}>
      <section className={styles.custom_section}>
        <div className={styles.custom_components}>
          <h2>Customizer</h2>
          <Customizer handleCustomDrag={handleCustomDrag} />
        </div>
        <div
          className={styles.custom_canvas}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {onGnbDrag ? (
            <div
              id={"custom_gnb"}
              title={"custom_gnb_top"}
              className={styles.custom_gnb}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            ></div>
          ) : selectedComponentPositions["gnb"] === "custom_gnb_top" ? (
            <div
              id={"custom_gnb"}
              title={"custom_gnb_top"}
              className={`${styles.custom_gnb} ${styles.selected}`}
              onDragOver={(e) => e.preventDefault()}
              onDragStart={() => {
                console.log("dragStart");
                setOnGnbDrag(true);
              }}
              draggable
            >
              GNB
            </div>
          ) : (
            <div>{}</div>
          )}
        </div>
      </section>
    </div>
  );
}
