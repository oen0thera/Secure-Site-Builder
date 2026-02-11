import Custom from "@/pages/Process/Custom/Custom";
import Button from "@/components/Button/Button";
import { ReactElement, useState } from "react";
import { ButtonSize } from "@/types/components/Button.type";
import styles from "./process.module.scss";
import Detail from "@/pages/Process/Detail/Detail";

const PROCESS_LIST: (keyof typeof ProcessEnum)[] = ["CUSTOM", "DETAIL"];

enum ProcessEnum {
  CUSTOM = "custom",
  DETAIL = "detail",
}

const ProcessItem: Record<ProcessEnum, ReactElement> = {
  custom: <Custom />,
  detail: <Detail />,
};

export default function Process() {
  const [currProcess, setCurrProcess] =
    useState<keyof typeof ProcessEnum>("CUSTOM");

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

  return (
    <>
      <section className={styles.stage_section}>
        <div className={styles.stage_components}>
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
      {ProcessItem[ProcessEnum[currProcess]]}
    </>
  );
}
