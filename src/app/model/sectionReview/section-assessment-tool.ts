import { SectionPerformanceIndicator } from "./section-performance-indicator";

export class SectionAssessmentTool {

  constructor(
    public courseNumber: number, 
    public sectionNumber: number, 
    public raeId: number, 
    public assessmentToolId: number, 
    public totalStudents: number, 
    public semester: number, 
    public draft: boolean, 
    public sectionPerformanceIndicators: SectionPerformanceIndicator[],
    public id?: number
) {
    this.id = id
    this.courseNumber = courseNumber
    this.sectionNumber = sectionNumber
    this.raeId = raeId
    this.assessmentToolId = assessmentToolId
    this.totalStudents = totalStudents
    this.semester = semester
    this.draft = draft
    this.sectionPerformanceIndicators = sectionPerformanceIndicators
  }

}
