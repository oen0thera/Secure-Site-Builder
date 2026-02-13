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

export const DETAIL_GNB_INPUTS = {
  logo: "",
  linkSection: [] as string[],
  userSection: [] as string[],
} as const;

export type DetailType = (typeof DETAIL_TYPE)[keyof typeof DETAIL_TYPE];
export type DetailPosition =
  (typeof DETAIL_POSITION)[keyof typeof DETAIL_POSITION];

export type DetailGNBInput = typeof DETAIL_GNB_INPUTS;

export type DetailInputData = DetailGNBInput;
