import { AssessmentTool } from "src/model/AssessmentTool";

export class RAE {
    RAEId:number;
    description:string;
    courseId:number;
    assessmentTools:AssessmentTool[];
    cdioList:number[];

  constructor(RAEId: number, description: string, courseId: number, assessmentTools: AssessmentTool[], cdioList: number[]) {
    this.RAEId = RAEId
    this.description = description
    this.courseId = courseId
    this.assessmentTools = assessmentTools
    this.cdioList = cdioList
  }

}
