import { DetailSubsideElements } from "@/types/components/pages/details/detail.type";
import styles from "./detail_inputs_subside.module.scss";

interface DetailInputsSubsideProps {
  isExpanded: boolean;
  selectedLabelElements: DetailSubsideElements;
}

export default function DetailInputsSubside({
  isExpanded,
  selectedLabelElements,
}: DetailInputsSubsideProps) {
  return (
    <>
      {
        <div className={styles.detail_inputs_subside_wrapper}>
          <div
            className={`${styles.detail_inputs_subside} ${
              isExpanded && styles.expanded
            }`}
          >
            {selectedLabelElements.map((item, i) => {
              return <div key={i}>{item}</div>;
            })}
          </div>
        </div>
      }
    </>
  );
}
