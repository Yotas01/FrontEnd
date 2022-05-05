export class SectionPerformanceIndicator {
    id:number;
    sectionAssessmentToolId:number;
    performanceIndicatorId:number;
    exemplary:number;
    competent:number;
    below:number;
    draft:boolean;


  constructor(id: number, sectionAssessmentToolId: number, performanceIndicatorId: number, exemplary: number, competent: number, 
    below: number, 
    draft: boolean
) {
    this.id = id
    this.sectionAssessmentToolId = sectionAssessmentToolId
    this.performanceIndicatorId = performanceIndicatorId
    this.exemplary = exemplary
    this.competent = competent
    this.below = below
    this.draft = draft
  }

}
