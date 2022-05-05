export class Section {
    SectionId:number;
    number:number;
    professor:string;
    totalStudents:number;
    semester:number;
    course:Map<number,string>;

  constructor(SectionId: number, number: number, professor: string, totalStudents: number, semester: number, course: Map<number,string>) {
    this.SectionId = SectionId
    this.number = number
    this.professor = professor
    this.totalStudents = totalStudents
    this.semester = semester
    this.course = course
  }

}
