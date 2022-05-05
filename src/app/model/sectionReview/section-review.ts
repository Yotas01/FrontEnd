import { SectionAssessmentTool } from "./section-assessment-tool";

export class SectionReview {
    courseNumber:number;
    sectionNumber:number;
    semester:number;
    sectionAssessmentTools:SectionAssessmentTool[];

  constructor(courseNumber: number, sectionNumber: number, semester: number, sectionAssessmentTools: SectionAssessmentTool[]) {
    this.courseNumber = courseNumber
    this.sectionNumber = sectionNumber
    this.semester = semester
    this.sectionAssessmentTools = sectionAssessmentTools
  }

}
