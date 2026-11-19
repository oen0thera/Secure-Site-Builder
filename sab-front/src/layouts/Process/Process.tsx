import Custom from "@/pages/Process/Custom/Custom";
import Button from "@/components/Button/Button";
import { ReactElement, useState } from "react";
import { ButtonSize } from "@/types/components/Button.type";
import { customComponentType } from "@/types/components/pages/custom/Custom.type";
import useCustomStore from "@/store/useCustomStore";
import styles from "./process.module.scss";
import Detail from "@/pages/Process/Detail/Detail";

const PROCESS_LIST: (keyof typeof ProcessEnum)[] = ["CUSTOM", "DETAIL"];

enum ProcessEnum {
  CUSTOM = "custom",
  DETAIL = "detail",
}

export default function Process() {
  const { setSelectedComponentPositions } = useCustomStore();
  const [currProcess, setCurrProcess] =
    useState<keyof typeof ProcessEnum>("CUSTOM");
  const [selectedTypes, setSelectedTypes] = useState<customComponentType[]>([]);

  const toggleSelect = (type: customComponentType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const clearSelection = () => setSelectedTypes([]);

  const handleDeleteSelected = () => {
    if (selectedTypes.length === 0) return;
    setSelectedComponentPositions((prev) => {
      const next = { ...prev };
      selectedTypes.forEach((type) => {
        next[type] = null;
      });
      return next;
    });
    clearSelection();
  };

  const handlePrev = () => {
    const processIdx = PROCESS_LIST.indexOf(currProcess);
    const hasPrev = processIdx > 0;
    if (hasPrev) {
      setCurrProcess(PROCESS_LIST[processIdx - 1]);
    }
  };

  const handleNext = () => {
    const processIdx = PROCESS_LIST.indexOf(currProcess);
    const hasNext = processIdx < PROCESS_LIST.length - 1;
    if (hasNext) {
      setCurrProcess(PROCESS_LIST[processIdx + 1]);
    }
  };

  const renderProcessItem = (): ReactElement => {
    switch (ProcessEnum[currProcess]) {
      case ProcessEnum.CUSTOM:
        return (
          <Custom
            selectedTypes={selectedTypes}
            toggleSelect={toggleSelect}
          />
        );
      case ProcessEnum.DETAIL:
        return <Detail />;
      default:
        return <Custom
          selectedTypes={selectedTypes}
          toggleSelect={toggleSelect}
        />;
    }
  };

  return (
    <>
      <section className={styles.stage_section}>
        <div className={styles.stage_components}>
          {currProcess === "CUSTOM" && selectedTypes.length > 0 && (
            <div className={styles.selection_control} data-testid="selection-control">
              <span className={styles.selection_label}>
                {selectedTypes.length}개 선택됨
              </span>
              <button
                className={styles.selection_delete}
                type="button"
                onClick={handleDeleteSelected}
                data-testid="delete-selected"
              >
                삭제
              </button>
            </div>
          )}
          <Button
            size={ButtonSize.SMALL}
            content="이전"
            onClick={() => handlePrev()}
          />
          <Button
            size={ButtonSize.SMALL}
            content="다음"
            onClick={() => handleNext()}
          />
        </div>
      </section>
      {renderProcessItem()}
    </>
  );
}
