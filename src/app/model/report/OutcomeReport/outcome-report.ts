export class OutcomeReport {
    constructor(public outcomeId: number, public semester: number, public exemplary: number,
        public competent: number, public below: number){
    this.outcomeId = outcomeId;
    this.semester = semester;
    this.exemplary = exemplary;
    this.competent = competent;
    this.below = below;
}
}
