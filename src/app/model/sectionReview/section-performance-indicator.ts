export class SectionPerformanceIndicator {

  constructor(public id: number, public sectionAssessmentToolId: number, public performanceIndicatorId: number,
      public exemplary: number, public competent: number, public below: number, public draft: boolean) {
    this.id = id
    this.sectionAssessmentToolId = sectionAssessmentToolId
    this.performanceIndicatorId = performanceIndicatorId
    this.exemplary = exemplary
    this.competent = competent
    this.below = below
    this.draft = draft
  }

}
