import { StageProps, StageType } from "@/types/components/pages/introduction/Stages.type";
import Home from "./Content/Home/home";
import { useEffect, useState } from "react";
import Work from "./Content/Work/work";

export default function Stages({stageList,currIndex}:StageProps){
    
    const [currStage,setCurrStage] = useState<StageType>(stageList[currIndex]);

    const [wheelState,setWheelState] = useState(1);
        useEffect(()=>{
            const wheelEventHandler= (e:WheelEvent) =>{
            if(e.deltaY>0){
                setWheelState(0);
            }
                else {setWheelState(1);}
            }

            window.addEventListener('wheel',wheelEventHandler);
    },[]);
    useEffect(()=>{
        console.log(currStage);
    },[currStage])

    const nextStage=(next:boolean)=>{
        if(next){
            setCurrStage(stageList[currIndex+1]);
        }
    }
    const stageContentList:Record<StageType,React.ReactElement> = {home:<Home scroll={wheelState} nextStage={nextStage}/>,work:<Work scroll={wheelState} nextStage={nextStage}/>,aboutus:<div></div>,ideas:<div></div>,contact:<div></div>};
    return stageContentList[currStage];
}