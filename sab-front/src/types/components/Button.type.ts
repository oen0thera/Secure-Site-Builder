import { ReactElement } from "react";

export type ButtonProps = {
  size: ButtonSize;
  content: string | ReactElement;
  fontColor?: FontColor;
  type?: ButtonType;
  options?: ButtonOption;
  onClick: () => void;
  dataTestId?: string;
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
  RED = "red",
  GREY = "grey",
  PRIMARY = "primary",
  DEFAULT = "default",
  GHOST = "ghost",
}
export enum FontColor {
  BLACK = "font-black",
  WHITE = "font-white",
  RED = "font-red",
}
export enum ButtonOption {
  STRETCH = "stretch",
}
