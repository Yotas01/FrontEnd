export class PerformanceIndicator{
    description: string;
    percentage: number;
    exemplary: number;
    competent: number;
    below: number;

    constructor(description: string, percentage: number, exemplary = 0, competent = 0, below = 0){
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