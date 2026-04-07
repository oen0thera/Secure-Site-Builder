import { DETAIL_INPUTS_DICT } from "@/types/components/pages/details/detail.type";
import Icon from "@/components/Icon/Icon";
import { IconSize, IconSrc, IconColor } from "@/types/components/Icon.type";
import styles from "./detail_inputs_dropdown.module.scss";
import { useState } from "react";
import DropdownInnerValue from "@/pages/Process/Detail/DetailInputs/DetailInputsDropdown/DropdownInner/DropdownInnerValue";

interface DetailInputsDropdownProps {
  label: string;
  value: string | string[];
  selectedLabel?: string;
  handleSelected: (label: string) => void;
}

export default function DetailInputsDropdown({
  label,
  value,
  selectedLabel,
  handleSelected,
}: DetailInputsDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* 드롭다운 구현 필요 */}
      {typeof value === "object" && value.length > 0 ? (
        <div
          className={styles.dropdown_container}
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        >
          <div className={styles.dropdown_content}>
            <div className={styles.dropdown_label}>
              {DETAIL_INPUTS_DICT[label]}
              <div className={styles.dropdown_icon_container}>
                <div
                  className={`${styles.dropdown_icon} ${styles.clickable}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    // 요소 추가 함수
                  }}
                >
                  <Icon
                    size={IconSize.EXTRA_SMALL}
                    src={IconSrc.ADD}
                    color={IconColor.WHITE}
                  />
                </div>

                <Icon
                  size={IconSize.EXTRA_SMALL}
                  src={IconSrc.CHEVRON}
                  color={IconColor.WHITE}
                  options={
                    isExpanded
                      ? { pivoted: true }
                      : { inverted: true, pivoted: true }
                  }
                />
              </div>
            </div>

            <div
              className={`${styles.dropdown_value} ${
                isExpanded && styles.expand
              }`}
              onClick={(e) => {
                e.stopPropagation();
                // 요소 수정
              }}
            >
              <div className={styles.dropdown_inner}>
                {value.map((e, i) => {
                  return (
                    <DropdownInnerValue
                      key={i}
                      label={e}
                      selectedLabel={selectedLabel}
                      setIsSelected={handleSelected}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.dropdown_container} ${
            selectedLabel === label && styles.selected
          }`}
          onClick={() => {
            handleSelected(label);
          }}
        >
          <div className={styles.dropdown_label}>
            {DETAIL_INPUTS_DICT[label]}
          </div>
          {/* <div className={styles.dropdown_divider}></div> */}
        </div>
      )}
    </>
  );
}
