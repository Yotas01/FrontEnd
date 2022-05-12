import { SectionAssessmentTool } from "./section-assessment-tool";

export class SectionReview {

  constructor(public courseNumber: number, public sectionNumber: number, public semester: number,
    public sectionAssessmentTools: SectionAssessmentTool[]) {
    this.courseNumber = courseNumber
    this.sectionNumber = sectionNumber
    this.semester = semester
    this.sectionAssessmentTools = sectionAssessmentTools
  }
}
