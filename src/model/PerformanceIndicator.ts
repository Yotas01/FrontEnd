export class PerformanceIndicator{
    rae: number;
    assessmentTool: number;
    description: string;
    percentage: number;
    exemplary: number;
    competent: number;
    below: number;

    constructor(rae:number, assessmentTool:number, description: string, percentage: number, exemplary = 0, competent = 0, below = 0){
        this.rae = rae;
        this.assessmentTool = assessmentTool;
        this.description = description;
        this.percentage = percentage;
        this.exemplary = exemplary;
        this.competent = competent;
        this.below = below;
    }

    toString(): string{
        return "Desc: " + this.description + " P: " + this.percentage + "% E: " + this.exemplary + " C: " + this.competent + " B: " + this.below;
    }
}