import { CdioReport } from "../cdioReport/cdio-report";
import { OutcomeReport } from "../OutcomeReport/outcome-report";

export class OutcomeReportDTO {
    constructor(public outcomeReport: OutcomeReport, public cdioReports: CdioReport[]){
        this.outcomeReport = outcomeReport;
        this.cdioReports = cdioReports;
    }
}
