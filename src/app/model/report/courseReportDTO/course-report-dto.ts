import { CourseReport } from "../courseReport/course-report";
import { SectionReport } from "../sectionReport/section-report";

export class CourseReportDTO {
    constructor(public courseReport: CourseReport, public sectionsReport: SectionReport[]){
        this.courseReport = courseReport;
        this.sectionsReport = sectionsReport;
    }
}
