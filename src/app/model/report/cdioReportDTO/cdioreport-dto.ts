import { CDIOSummary } from "../cdioSummary/cdio-summary";
import { CDIOSummaryForCourse } from "../CDIOSummaryForCourse/cdiosummary-for-course";

export class CDIOReportDTO {
    constructor(public cdioSummary: CDIOSummary, public cdioSummaryForCourseList: CDIOSummaryForCourse[]){}
}
