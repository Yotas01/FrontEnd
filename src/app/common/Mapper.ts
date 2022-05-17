import { AssessmentTool } from "../model/assessmentTool/assessment-tool";
import { CourseReview } from "../model/courseReview/course-review";
import { PerformanceIndicator } from "../model/performanceIndicator/performance-indicator";
import { RAE } from "../model/rae/RAE";
import { SectionAssessmentTool } from "../model/sectionReview/section-assessment-tool";
import { SectionPerformanceIndicator } from "../model/sectionReview/section-performance-indicator";
import { SectionReview } from "../model/sectionReview/section-review";

export class Mapper{
    public static createFromCourseReview(courseReview: CourseReview) : SectionReview{
        var sectionReview = new SectionReview(0,0,0,[]);
        sectionReview.courseNumber = courseReview.number;
        sectionReview.sectionNumber = courseReview.section.number;
        sectionReview.semester = courseReview.section.semester;
        let sectionAssessmentTools : SectionAssessmentTool[] = [];
    
        for(var i = 0; i < courseReview.raes.length; i++){
          var rae: RAE = courseReview.raes[i];
          for(var j = 0; j < rae.assessmentTools.length; j++){
            var at: AssessmentTool = rae.assessmentTools[j];
            var sectionPIs: SectionPerformanceIndicator[] = [];
            for(var k = 0; k < at.performanceIndicators.length; k++){
              var pi: PerformanceIndicator = at.performanceIndicators[k];
              sectionPIs.push(new SectionPerformanceIndicator(pi.performanceIndicatorId,0,0,0,true,undefined,undefined));
            }
            sectionAssessmentTools
            .push(new SectionAssessmentTool(sectionReview.courseNumber,sectionReview.sectionNumber,rae.raeid,at.assessmentToolId,0,sectionReview.semester,true,sectionPIs,undefined));
          }
        }
        sectionReview.sectionAssessmentTools = sectionAssessmentTools;
        return sectionReview;
      }
}