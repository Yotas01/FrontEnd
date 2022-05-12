export class SectionPerformanceIndicator {

  constructor(public performanceIndicatorId: number,
      public exemplary: number, public competent: number, public below: number, public draft: boolean,
      public id?: number, public sectionAssessmentToolId?: number) {
    this.id = id
    this.sectionAssessmentToolId = sectionAssessmentToolId
    this.performanceIndicatorId = performanceIndicatorId
    this.exemplary = exemplary
    this.competent = competent
    this.below = below
    this.draft = draft
  }

}
