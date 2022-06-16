export class CdioReport {
    constructor(public cdioNumber: number, public semester: number, public exemplary: number,
        public competent: number, public below: number){
    this.cdioNumber = cdioNumber;
    this.semester = semester;
    this.exemplary = exemplary;
    this.competent = competent;
    this.below = below;
    }
}
