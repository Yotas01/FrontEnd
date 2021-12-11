import { PerformanceIndicator } from "./PerformanceIndicator";

export class AssessmentTool {
    rae: number;
    id:number;
    description: string;
    value: number;
    totalStudents: number;
    performanceIndicators: PerformanceIndicator[];
    constructor(rae:number, id: number, description: string, value: number, totalStudents: number, performanceIndicators?: PerformanceIndicator[]) {
        this.rae = rae;
        this.id = id;
        this.description = description;
        this.value = value;
        this.totalStudents = totalStudents;
        if (performanceIndicators) {
            this.performanceIndicators = performanceIndicators;
        }
        else {
            this.performanceIndicators = [];
        }
    }
    toString(option:number): string{
        if(option == 1){
            return "AssessmentTool: " + this.description + " V: " + this.value + " Total: " + this.totalStudents + " PI: " + this.performanceIndicators;
        }
        else if(option = 2){
            return "AssessmentTool: " + this.description + " V: " + this.value + " Total: " + this.totalStudents;
        }
        return "";
    }
}