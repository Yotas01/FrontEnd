export class PerformanceIndicator {
    PerformanceIndicatorId:number;
    description:string;
    percentage:number;
    assessmentTool:number;

  constructor(PerformanceIndicatorId: number, description: string, percentage: number, assessmentTool: number) {
    this.PerformanceIndicatorId = PerformanceIndicatorId
    this.description = description
    this.percentage = percentage
    this.assessmentTool = assessmentTool
  }

}
