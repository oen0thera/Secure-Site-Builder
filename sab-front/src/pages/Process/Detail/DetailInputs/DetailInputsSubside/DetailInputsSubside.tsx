import {
  DetailSubsideElements,
  DetailSubsideItem,
} from "@/types/components/pages/details/detail.type";
import styles from "./detail_inputs_subside.module.scss";
import SubsideInputImage from "@/pages/Process/Detail/DetailInputs/DetailInputsSubside/SubsideInputType/SubsideInputImage/SubsideInputImage";

interface DetailInputsSubsideProps {
  isExpanded: boolean;
  selectedLabelElements: DetailSubsideElements;
}

export default function DetailInputsSubside({
  isExpanded,
  selectedLabelElements,
}: DetailInputsSubsideProps) {
  const renderInputs = (item: DetailSubsideItem) => {
    switch (item.type) {
      case "image":
        return <SubsideInputImage item={item} />;
      case "text":
        return (
          <div>
            <div>텍스트</div>
            <input type="text"></input>
          </div>
        );
    }
  };
  return (
    <>
      {
        <div className={styles.detail_inputs_subside_wrapper}>
          <div
            className={`${styles.detail_inputs_subside} ${
              isExpanded && styles.expanded
            }`}
          >
            {selectedLabelElements.elements.map((item, i) => {
              return <div key={i}>{renderInputs(item)}</div>;
            })}
          </div>
        </div>
      }
    </>
  );
}
