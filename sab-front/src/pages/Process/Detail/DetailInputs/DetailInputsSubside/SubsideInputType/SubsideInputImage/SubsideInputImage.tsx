import {
  DETAIL_INPUTS_DICT,
  DetailSubsideItem,
} from "@/types/components/pages/details/detail.type";
import styles from "./subside_input_image.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconColor, IconSize, IconSrc } from "@/types/components/Icon.type";
import { useRef } from "react";

export default function SubsideInputImage({
  item,
}: {
  item: DetailSubsideItem;
}) {
  const { label, value } = item;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.input_wrapper}>
      <h1>{DETAIL_INPUTS_DICT[label]}</h1>
      <div
        className={styles.image}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <Icon
          size={IconSize.SMALL}
          src={IconSrc.IMAGE}
          color={IconColor.DEFAULT}
        />
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          value={value ? value : ""}
        />
      </div>
    </div>
  );
}
