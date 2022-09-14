import { CDIOSummaryForCourse } from "../CDIOSummaryForCourse/cdiosummary-for-course";
import { RAESummaryDTO } from "../RAESummaryDTO/raesummary-dto";

export class CourseReportDTO {
    constructor(public raeSummaries: RAESummaryDTO[], public cdioSummary: CDIOSummaryForCourse[]){
        this.raeSummaries = raeSummaries;
        this.cdioSummary = cdioSummary;
    }
}
