import {
  DETAIL_INPUTS_DICT,
  DetailSubsideItem,
} from "@/types/components/pages/details/detail.type";
import styles from "./subside_input_image.module.scss";
import Icon from "@/components/Icon/Icon";
import { IconColor, IconSize, IconSrc } from "@/types/components/Icon.type";
import { ChangeEvent, useRef, useState } from "react";

export default function SubsideInputImage({
  item,
}: {
  item: DetailSubsideItem;
}) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const { label, value } = item;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = e.currentTarget.files;
    if (fileList && fileList[0]) {
      const file = fileList[0];
      const imgUrl = URL.createObjectURL(file);
      setImageUrl(imgUrl);
    }
  };
  return (
    <div className={styles.input_wrapper}>
      <h1>{DETAIL_INPUTS_DICT[label]}</h1>
      <div
        className={styles.image}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        ) : (
          <Icon
            size={IconSize.SMALL}
            src={IconSrc.IMAGE}
            color={IconColor.DEFAULT}
          />
        )}
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          defaultValue={value ? value : ""}
          onChange={(e) => {
            handleImageInput(e);
          }}
        />
      </div>
    </div>
  );
}
