export class PerformanceIndicator {

  constructor(public performanceIndicatorId: number, public description: string, public percentage: number,
    public assessmentTool: number) {
    this.performanceIndicatorId = performanceIndicatorId
    this.description = description
    this.percentage = percentage
    this.assessmentTool = assessmentTool
  }
}
