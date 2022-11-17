import { BodyCreateAssessmentTool } from './../../../model/assessmentTool/BodyCreateAssessmentTool/BodyCreateAssessmentTool';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssessmentTool } from 'src/app/model/assessmentTool/assessment-tool';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentToolService {

  baseURL = environment.baseUrl + "/admin/course/"

  constructor(private http: HttpClient) { }

  createAssessmentTool(courseNumber:number,raeId:number,desc:string,val:number): Observable<HttpResponse<AssessmentTool>>{
    let bCA:BodyCreateAssessmentTool = new BodyCreateAssessmentTool(desc,val)
    return this.http.post<AssessmentTool>(this.baseURL+courseNumber+"/rae/"+raeId+"/assessmentTool",bCA,{observe:'response'})
  }

  deleteAssessmentTool(courseNumber:number,raeId:number,assessId:number): Observable<HttpResponse<AssessmentTool>>{
    return this.http.delete<AssessmentTool>(this.baseURL+courseNumber+"/rae/"+raeId+"/assessmentTool/"+assessId,{observe:'response'})
  }

  updateAssessmentTool(courseNumber:number,raeId:number,assessId:number,desc:string,val:number): Observable<HttpResponse<AssessmentTool>>{
    let update:BodyCreateAssessmentTool = new BodyCreateAssessmentTool(desc,val)
    return this.http.put<AssessmentTool>(this.baseURL+courseNumber+"/rae/"+raeId+"/assessmentTool/"+assessId,update,{observe:'response'})
  }
}
