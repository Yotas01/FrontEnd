import { PerformanceIndicator } from "../performanceIndicator/performance-indicator";
import { RAE } from "../rae/RAE";

export class AssessmentTool {
    constructor(public assessmentToolId:number, public description:string, public value:number,
        public rae:RAE, public performanceIndicators:PerformanceIndicator[]){
        this.assessmentToolId = assessmentToolId;
        this.description = description,
        this.value = value;
        this.rae = rae;
        this.performanceIndicators = performanceIndicators;
    }
}
