export type ButtonProps = {
  size: ButtonSize;
  content: String;
  type?:ButtonType;
};
export enum ButtonSize {
  SMALL = "sm",
  LARGE = "lg",
}
export enum ButtonType {
  GOOGLE = 'google',
  KAKAO = 'kakao',
  NAVER = 'naver',
  DEFAULT ='default'
}