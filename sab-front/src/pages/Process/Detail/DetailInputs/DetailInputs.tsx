import {
  DetailInputData,
  DetailPosition,
  DetailType,
} from "@/types/components/pages/details/detail.type";
import styles from "./detail_inputs.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconColor, IconSize, IconSrc } from "@/types/components/Icon.type";
import { useState } from "react";

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

  const renderInputs = () => {
    switch (type) {
      case "gnb":
        return (
          <div className={styles.input_wrapper}>
            {position}
            {inputs &&
              Object.entries(inputs).map((item) => {
                if (typeof item[1] === "object") {
                  console.log(item[0], item[1]);
                }
                return (
                  <>
                    {/* 드롭다운 구현 필요 */}
                    {typeof item[1] === "object" && item[1].length > 0 ? (
                      <div className={styles.input_container}>
                        <div className={styles.input_label}>
                          <div>{item[0]}</div>
                          <Icon
                            size={IconSize.EXTRA_SMALL}
                            src={IconSrc.CHEVRON}
                            color={IconColor.WHITE}
                            options={{ inverted: true, pivoted: true }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className={styles.input_container}>
                        <div className={styles.input_label}>{item[0]}</div>
                        {/* <div className={styles.input_divider}></div> */}
                      </div>
                    )}
                  </>
                );
              })}
          </div>
        );
    }
  };
  return (
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
  );
}
