import { SectionPerformanceIndicator } from "./section-performance-indicator";

export class SectionAssessmentTool {
    id:number;
    courseNumber:number;
    sectionNumber:number;
    raeId:number;
    assessmentToolId:number;
    totalStudents:number;
    semester:number;
    draft:boolean;
    sectionPerformanceIndicators:SectionPerformanceIndicator[];

  constructor(
    id: number, 
    courseNumber: number, 
    sectionNumber: number, 
    raeId: number, 
    assessmentToolId: number, 
    totalStudents: number, 
    semester: number, 
    draft: boolean, 
    sectionPerformanceIndicators: SectionPerformanceIndicator[]
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
