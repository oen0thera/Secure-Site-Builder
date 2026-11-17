import { ReactElement } from "react";

export type ButtonProps = {
  size: ButtonSize;
  content: string | ReactElement;
  type?: ButtonType;
  options?: ButtonOption;
  onClick: () => void;
};
export enum ButtonSize {
  EXTRA_SMALL = "xs",
  SMALL = "sm",
  LARGE = "lg",
  EXTRA_LARGE = "xl",
}
export enum ButtonType {
  GOOGLE = "google",
  KAKAO = "kakao",
  NAVER = "naver",
  DARK = "dark",
  DEFAULT = "default",
}
export enum ButtonOption {
  STRETCH = "stretch",
}
