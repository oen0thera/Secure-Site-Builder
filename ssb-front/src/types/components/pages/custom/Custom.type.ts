export type customizerProps = {
  handleCustomDrag: (handleCustomDragParam: handleCustomDragParam) => void;
};

export type handleCustomDragParam = {
  isDragging: boolean;
  type?: customComponentType;
};

export enum customComponentType {
  GNB = "gnb",
  CONTENT = "content",
}
