export class CourseReport {
    constructor(public courseId: number, public semester: number, public exemplary: number,
            public competent: number, public below: number){
        this.courseId = courseId;
        this.semester = semester;
        this.exemplary = exemplary;
        this.competent = competent;
        this.below = below;
    }
}
