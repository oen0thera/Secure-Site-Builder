import {
  DETAIL_SUBSIDE_DEFAULT,
  DETAIL_SUBSIDE_LOGO,
  DetailInputData,
  DetailPosition,
  DetailSubsideItem,
  DetailType,
} from "@/types/components/pages/details/detail.type";
import styles from "./detail_inputs.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconColor, IconSize, IconSrc } from "@/types/components/Icon.type";
import { useEffect, useState } from "react";
import DetailInputsDropdown from "@/pages/Process/Detail/DetailInputs/DetailInputsDropdown/DetailInputsDropdown";
import DetailInputsSubside from "@/pages/Process/Detail/DetailInputs/DetailInputsSubside/DetailInputsSubside";

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
  const [isLogoHover, setIsLogoHover] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string>();
  const [selectedLabelElements, setSelectedLabelElements] = useState<
    DetailSubsideItem[]
  >(DETAIL_SUBSIDE_DEFAULT);
  const handleSelected = (label: string) => {
    if (selectedLabel !== label) setSelectedLabel(label);
    else setSelectedLabel(undefined);
  };
  useEffect(() => {
    // Subside 요소 설정
    switch (selectedLabel) {
      case "logo":
        setSelectedLabelElements(DETAIL_SUBSIDE_LOGO);
        break;
      default:
        alert("디폴트값");
    }
  }, [selectedLabel]);

  const renderInputs = () => {
    switch (type) {
      case "gnb":
        return (
          <div className={styles.input_wrapper}>
            {position}
            {inputs &&
              Object.entries(inputs).map((item, i) => {
                return (
                  <DetailInputsDropdown
                    key={i}
                    selectedLabel={selectedLabel}
                    handleSelected={handleSelected}
                    label={item[0]}
                    value={item[1]}
                  />
                );
              })}
          </div>
        );
    }
  };
  return (
    <div className={styles.detail_inputs_container}>
      <div className={styles.detail_inputs}>
        <section className={styles.detail_inputs_header}>
          <div
            className={styles.detail_inputs_logo_wrapper}
            onMouseOver={() => {
              setIsLogoHover(true);
            }}
            onMouseLeave={() => {
              setIsLogoHover(false);
            }}
          >
            <div className={styles.detail_inputs_logo}>
              <Icon size={IconSize.SMALL} src={IconSrc.IMAGE} />
            </div>
            {
              <div
                className={`${styles.detail_inputs_add_button} ${
                  isLogoHover && styles.popup
                }`}
              >
                <Icon
                  size={IconSize.EXTRA_SMALL_SMALL}
                  src={IconSrc.EDIT}
                  color={IconColor.WHITE}
                />
              </div>
            }
          </div>
          <div className={styles.detail_inputs_site_name}>
            {"사이트명"}
            <Icon
              size={IconSize.EXTRA_SMALL}
              src={IconSrc.EDIT}
              color={IconColor.WHITE}
            />
          </div>
        </section>
        <section className={styles.detail_inputs_content}>
          {renderInputs()}
        </section>
      </div>
      <DetailInputsSubside
        isExpanded={!!selectedLabel}
        selectedLabelElements={{ elements: selectedLabelElements }}
      />
    </div>
  );
}
