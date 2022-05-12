import { AssessmentTool } from "../assessmentTool/assessment-tool";
import { CourseReview } from "../courseReview/course-review";
import { PerformanceIndicator } from "../performanceIndicator/performance-indicator";
import { RAE } from "../rae/RAE";
import { SectionAssessmentTool } from "./section-assessment-tool";
import { SectionPerformanceIndicator } from "./section-performance-indicator";

export class SectionReview {

  constructor(public courseNumber: number, public sectionNumber: number, public semester: number,
    public sectionAssessmentTools: SectionAssessmentTool[]) {
    this.courseNumber = courseNumber
    this.sectionNumber = sectionNumber
    this.semester = semester
    this.sectionAssessmentTools = sectionAssessmentTools
  }
}
