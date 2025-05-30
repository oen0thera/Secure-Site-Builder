import { StageProps, StageType } from "@/types/components/pages/introduction/Stages.type";
import Home from "./Content/Home/Home";
import { useEffect, useState } from "react";
import Showcase from "./Content/Showcase/Showcase";

export default function Stages({stageList,currIndex, setCurrIndex}:StageProps){

    
    const [currStage,setCurrStage] = useState<StageType>(stageList[currIndex]);

    const [wheelState,setWheelState] = useState(1);
        useEffect(()=>{
            const wheelEventHandler= (e:WheelEvent) =>{
            console.log(e.deltaY)
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
    useEffect(()=>{
        setCurrStage(stageList[currIndex]);
    },[currIndex])

    const nextStage=(next:boolean)=>{
        if(next){
            setCurrIndex(currIndex+1);
        }
    }
    const prevStage=(prev:boolean)=>{
        if(prev&&currIndex-1>=0){
            setCurrIndex(currIndex-1);
        }
    }
    const stageContentList:Record<StageType,React.ReactElement> = {home:<Home scroll={wheelState} nextStage={nextStage}/>,showcase:<Showcase scroll={wheelState} nextStage={nextStage} prevStage={prevStage}/>};

    return stageContentList[currStage];
}