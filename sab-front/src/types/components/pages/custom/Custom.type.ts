import React from "react";

export type CustomizerProps = {
  handleCustomDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export const GNB_POSITIONS = {
  TOP: "custom_gnb_top",
  LEFT: "custom_gnb_left",
  RIGHT: "custom_gnb_right",
  BOTTOM: "custom_gnb_bottom",
} as const;

export const CONTENT_POSITIONS = {
  MAIN: "custom_content",
} as const;

export const SIDEBAR_POSITIONS = {
  TOP: "custom_sidebar_top",
  LEFT: "custom_sidebar_left",
  RIGHT: "custom_sidebar_right",
  BOTTOM: "custom_sidebar_bottom",
} as const;

export const FOOTER_POSITIONS = {
  TOP: "custom_footer_top",
  LEFT: "custom_footer_left",
  RIGHT: "custom_footer_right",
  BOTTOM: "custom_footer_bottom",
} as const;

export type ComponentPositions = {
  gnb: string | null;
  content: string | null;
  sidebar: string | null;
  footer: string | null;
};

export const DEFAULT_COMPONENT_POSITIONS: ComponentPositions = {
  gnb: null,
  content: CONTENT_POSITIONS.MAIN,
  sidebar: null,
  footer: null,
};

export type ComponentConfig = {
  title?: string;
  items?: string[];
};

export type ComponentConfigs = {
  gnb: ComponentConfig | null;
  content: ComponentConfig | null;
  sidebar: ComponentConfig | null;
  footer: ComponentConfig | null;
};

export const DEFAULT_COMPONENT_CONFIGS: ComponentConfigs = {
  gnb: null,
  content: null,
  sidebar: null,
  footer: null,
};

export type CustomGnbRendererProps = {
  onGnbDrag: boolean;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  selectedComponentPositions: ComponentPositions;
  handleCreatedDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type CustomContentRendererProps = {
  onGnbDrag: boolean;
  onContentDrag: boolean;
  onSidebarDrag: boolean;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  selectedComponentPositions: ComponentPositions;
  handleCreatedDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type CustomSidebarRendererProps = {
  onGnbDrag: boolean;
  onContentDrag: boolean;
  onSidebarDrag: boolean;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  selectedComponentPositions: ComponentPositions;
  handleCreatedDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type CustomFooterRendererProps = {
  onFooterDrag: boolean;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  selectedComponentPositions: ComponentPositions;
  handleCreatedDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type handleCustomDragParam = {
  isDragging: boolean;
  type?: customComponentType;
};

export enum customComponentType {
  GNB = "gnb",
  CONTENT = "content",
  SIDEBAR = "sidebar",
  FOOTER = "footer",
}
