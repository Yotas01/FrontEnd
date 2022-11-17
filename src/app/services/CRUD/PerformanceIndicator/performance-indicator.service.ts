import { BodyCreatePerformanceIndicator } from './../../../model/performanceIndicator/BodyCreatePerformanceIndicator/BodyCreatePerformanceIndicator';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { PerformanceIndicator } from 'src/app/model/performanceIndicator/performance-indicator';

@Injectable({
  providedIn: 'root'
})
export class PerformanceIndicatorService {

  baseURL = environment.baseUrl + "/admin/course"

  constructor(private http:HttpClient) { }

  createPI(courseNumber:number,raeId:number,assess:number,desc:string,per:number): Observable<HttpResponse<PerformanceIndicator>>{
    let create:BodyCreatePerformanceIndicator = new BodyCreatePerformanceIndicator(desc,per)
    return this.http.post<PerformanceIndicator>(this.baseURL+"/"+courseNumber+"/rae/"+raeId+"/assessmentTool/"+assess+"/performanceIndicator",create,{observe:'response'})
  }

  deletePI(courseNumber:number,raeId:number,assess:number,pi:number): Observable<HttpResponse<PerformanceIndicator>>{
    return this.http.delete<PerformanceIndicator>(this.baseURL+"/"+courseNumber+"/rae/"+raeId+"/assessmentTool/"+assess+"/performanceIndicator/"+pi,{observe:'response'})
  }

  updatePI(courseNumber:number,raeId:number,assess:number,pi:number,desc:string,per:number): Observable<HttpResponse<PerformanceIndicator>>{
    let update:BodyCreatePerformanceIndicator = new BodyCreatePerformanceIndicator(desc,per)
    return this.http.put<PerformanceIndicator>(this.baseURL+"/"+courseNumber+"/rae/"+raeId+"/assessmentTool/"+assess+"/performanceIndicator/"+pi,update,{observe:'response'})
  }
}
