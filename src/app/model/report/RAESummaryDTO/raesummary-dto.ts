export class RAESummaryDTO {
    constructor(public raeId: number, public raeDescription: string, public assessmentTools: string[], public exemplary: number, 
        public competent: number, public below: number){
            this.raeId = raeId;
            this.raeDescription = raeDescription;
            this.assessmentTools = assessmentTools;
            this.exemplary = exemplary;
            this.competent = competent;
            this.below = below;
    }
}
