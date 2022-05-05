import { PerformanceIndicator } from "src/model/PerformanceIndicator";
import { RAE } from "../rae/RAE";

export class AssessmentTool {
    AssessmentToolId:number;
    description:string;
    value:number;
    rae:RAE;
    performanceIndicators:PerformanceIndicator[];

    constructor(AssessmentToolId:number,description:string,value:number,rae:RAE,performanceIndicators:PerformanceIndicator[]){
        this.AssessmentToolId = AssessmentToolId;
        this.description = description,
        this.value = value;
        this.rae = rae;
        this.performanceIndicators = performanceIndicators;
    }
}
