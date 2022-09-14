export class CDIOSummaryForCourse {
    constructor(public cdioNumber: number, public courseId: number, public exemplary: number, 
        public competent: number, public below: number){
            this.cdioNumber = cdioNumber;
            this.courseId = courseId;
            this.exemplary = exemplary;
            this.competent = competent;
            this.below = below;
        }
}
