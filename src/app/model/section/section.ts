export class Section {

  constructor(public SectionId: number, public number: number, public professor: string,
    public totalStudents: number, public semester: number, public course: Map<number,string>) {
  }

}
