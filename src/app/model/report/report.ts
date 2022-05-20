export class Report {
    constructor(public semester: number, public exemplary: number, public competent: number, public below: number,
        public courseId?: number, public cdioNumber?: number, public outcomeId?: number){
            this.semester = semester;
            this.exemplary = exemplary;
            this.competent = competent;
            this.below = below;
            if(courseId)
                this.courseId = courseId;
            if(cdioNumber)
                this.cdioNumber = cdioNumber;
            if(outcomeId)
                this.outcomeId = outcomeId;
    }
}
