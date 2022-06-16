import { CdioReport } from "../cdioReport/cdio-report";
import { CourseReport } from "../courseReport/course-report";

export class CDIOReportDTO {
    constructor(public cdioReport: CdioReport, public courseReports: CourseReport[]){
        this.cdioReport = cdioReport;
        this.courseReports = courseReports;
    }
}
