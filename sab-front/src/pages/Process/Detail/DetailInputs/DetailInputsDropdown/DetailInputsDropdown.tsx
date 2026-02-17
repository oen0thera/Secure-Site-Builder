import Icon from "@/components/Icon/Icon";
import { IconSize, IconSrc, IconColor } from "@/types/components/Icon.type";
import styles from "./detail_inputs_dropdown.module.scss";
import { useState } from "react";

interface DetailInputsDropdownProps {
  label: string;
  value: string | string[];
}

export default function DetailInputsDropdown({
  label,
  value,
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
              {label}
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
                {value.map((e) => {
                  return <div className={styles.dropdown_inner_value}>{e}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.dropdown_container}>
          <div className={styles.dropdown_label}>{label}</div>
          {/* <div className={styles.dropdown_divider}></div> */}
        </div>
      )}
    </>
  );
}
