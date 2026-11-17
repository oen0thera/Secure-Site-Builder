import {
  ComponentConfigs,
  ComponentConfig,
  ComponentPositions,
  DEFAULT_COMPONENT_CONFIGS,
  DEFAULT_COMPONENT_POSITIONS,
} from "@/types/components/pages/custom/Custom.type";
import { create } from "zustand";

interface CustomState {
  selectedComponentPositions: ComponentPositions;
  setSelectedComponentPositions: (
    //객체 + 함수까지 받아서 상태 변경할 수 있도록 구현
    arg: ComponentPositions | ((prev: ComponentPositions) => ComponentPositions)
  ) => void;
  componentConfigs: ComponentConfigs;
  setComponentConfig: (
    type: keyof ComponentConfigs,
    config: ComponentConfig | null
  ) => void;
}

const useCustomStore = create<CustomState>((set) => ({
  selectedComponentPositions: { ...DEFAULT_COMPONENT_POSITIONS },
  setSelectedComponentPositions: (arg) =>
    set((state) => ({
      selectedComponentPositions:
        typeof arg === "function" ? arg(state.selectedComponentPositions) : arg,
    })),
  componentConfigs: { ...DEFAULT_COMPONENT_CONFIGS },
  setComponentConfig: (type, config) =>
    set((state) => ({
      componentConfigs: { ...state.componentConfigs, [type]: config },
    })),
}));

export default useCustomStore;
