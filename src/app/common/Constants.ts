import { AssessmentTool } from "../model/assessmentTool/assessment-tool";
import { CourseReview } from "../model/courseReview/course-review";
import { PerformanceIndicator } from "../model/performanceIndicator/performance-indicator";
import { RAE } from "../model/rae/RAE";
import { Section } from "../model/section/section";
import { SectionAssessmentTool } from "../model/sectionReview/section-assessment-tool";
import { SectionPerformanceIndicator } from "../model/sectionReview/section-performance-indicator";
import { SectionReview } from "../model/sectionReview/section-review";

export class Constants{
    public static baseUrl:string = "http://localhost:8080";
    public static sectionBase = new Section(1,1,"",1,1,new Map);
    public static courseReviewBase = new CourseReview(1,1,"",this.sectionBase,[],[]);
}