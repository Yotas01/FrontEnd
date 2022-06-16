export class SectionReport {
    constructor(public sectionId: number, public assessmentToolId: number, public semester: number, public totalStudents: number,
            public exemplary: number, public competent: number, public below: number){
        this.sectionId = sectionId;
        this.assessmentToolId = assessmentToolId;
        this.semester = semester;
        this.totalStudents = totalStudents;
        this.exemplary = exemplary;
        this.competent = competent;
        this.below = below;
    }
}