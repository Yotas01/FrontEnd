export class Section {

  constructor(public sectionId: number, public number: number, public professor: string,
    public totalStudents: number, public semester: number, public course: Map<number,string>) {
  }

}
