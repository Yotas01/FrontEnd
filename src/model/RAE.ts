import { AssessmentTool } from "./AssessmentTool";

export class RAE{
    id: number;
    description: string;
    assessmentTools: AssessmentTool[]

    constructor(id: number, description: string, assessmentTools?:AssessmentTool[]){
        this.id = id;
        this.description = description;
        if(assessmentTools){
            this.assessmentTools = assessmentTools;
        }
        else{
            this.assessmentTools = []
        }
    }
}