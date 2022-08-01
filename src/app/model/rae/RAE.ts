import { AssessmentTool } from "../assessmentTool/assessment-tool";

export class RAE {

  constructor(public raeId: number, public description: string, public courseId: number, 
    public assessmentTools: AssessmentTool[], public cdioList: number[]) {
    this.raeId = raeId
    this.description = description
    this.courseId = courseId
    this.assessmentTools = assessmentTools
    this.cdioList = cdioList
  }

}
