import { StageType } from "@/types/components/pages/introduction/Stages.type";
import Stages from "./Stages/Stages";


export default function Introduction() {
  return (<div><Stages stageList={[StageType.HOME,StageType.WORK]} currIndex={0}/></div>
  );
}
