export const DETAIL_TYPE = {
  GNB: "gnb",
  CONTENT: "content",
  SIDEBAR: "sidebar",
  FOOTER: "footer",
} as const;

export const DETAIL_POSITION = {
  TOP: "top",
  LEFT: "left",
  RIGHT: "right",
  BOTTOM: "bottom",
};

export const DETAIL_INPUTS_DICT: Record<string, string> = {
  logo: "로고",
  linkSection: "링크",
  userSection: "회원",
};

export const DETAIL_GNB_INPUTS = {
  logo: "",
  linkSection: ["소개", "요금", "고객지원"] as string[],
  userSection: ["로그인", "회원가입"] as string[],
} as const;

/* Detail 타입 */
export type DetailType = (typeof DETAIL_TYPE)[keyof typeof DETAIL_TYPE];
export type DetailPosition =
  (typeof DETAIL_POSITION)[keyof typeof DETAIL_POSITION];

export type DetailGNBInput = typeof DETAIL_GNB_INPUTS;

export type DetailInputData = DetailGNBInput;

/* Subside 타입 */
export type DetailSubsideElements = string[];
