export class Section {

  constructor(public SectionId: number, public number: number, public professor: string,
    public totalStudents: number, public semester: number, public course: Map<number,string>) {
    this.SectionId = SectionId
    this.number = number
    this.professor = professor
    this.totalStudents = totalStudents
    this.semester = semester
    this.course = course
  }

}
