import { CDIOSummary } from "../cdioSummary/cdio-summary";
import { OutcomeSummary } from "../OutcomeSummary/outcome-summary";

export class OutcomeReportDTO {
    constructor(public outcomeSummary: OutcomeSummary, public cdioSummaries: CDIOSummary[]){}
}
