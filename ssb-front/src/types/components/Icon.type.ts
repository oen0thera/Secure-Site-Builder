export type IconProps = {
  size: IconSize;
  src: IconSrc;
  color: IconColor;
  options?: IconOptions;
};
export enum IconSize {
  SMALL = "sm",
}
export enum IconSrc {
  SCROLL = "mouse-scroll.svg",
  CHEVRON = "chevron.png",
}
export enum IconColor {
  WHITE = "white",
}
export type IconOptions = {
  inverted?: boolean;
};
