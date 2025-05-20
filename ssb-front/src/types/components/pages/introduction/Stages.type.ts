export type StageProps = {
    stageList :StageList;
    currIndex:number;

}
export type StageList = Array<StageType>;

export enum StageType{
    HOME='home',
    WORK='work',
    ABOUTUS='aboutus',
    IDEAS='ideas',
    CONTACT='contact'
}