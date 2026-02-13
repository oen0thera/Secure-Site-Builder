import {
  DetailInputData,
  DetailPosition,
  DetailType,
} from "@/types/components/pages/details/detail.type";
import styles from "./detail_inputs.module.scss";

interface DetailInputsProps {
  type?: DetailType;
  position?: DetailPosition;
  inputs?: DetailInputData;
}

export default function DetailInputs({
  type,
  position,
  inputs,
}: DetailInputsProps) {
  const renderInputs = () => {
    switch (type) {
      case "gnb":
        return (
          <div>
            {position}
            {inputs &&
              Object.entries(inputs).map((item) => {
                return (
                  <div className={styles.input_container}>
                    <div className={styles.input_label}>{item[0]}</div>
                    <input type="text" />
                  </div>
                );
              })}
          </div>
        );
    }
  };
  return <div className={styles.detail_inputs}>{renderInputs()}</div>;
}
