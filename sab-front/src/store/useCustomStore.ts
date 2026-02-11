import { ComponentPositions } from "@/types/components/pages/custom/Custom.type";
import { create } from "zustand";

interface CustomState {
  selectedComponentPositions: ComponentPositions;
  setSelectedComponentPositions: (
    //객체 + 함수까지 받아서 상태 변경할 수 있도록 구현
    arg: ComponentPositions | ((prev: ComponentPositions) => ComponentPositions)
  ) => void;
}

const useCustomStore = create<CustomState>((set) => ({
  selectedComponentPositions: {
    gnb: null,
    content: null,
    sidebar: null,
    footer: null,
  },
  setSelectedComponentPositions: (arg) =>
    set((state) => ({
      selectedComponentPositions:
        typeof arg === "function" ? arg(state.selectedComponentPositions) : arg,
    })),
}));

export default useCustomStore;
