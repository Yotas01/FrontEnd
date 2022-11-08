import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Constants } from './../../../common/Constants';
import { Injectable } from '@angular/core';
import { PerformanceIndicator } from 'src/app/model/performanceIndicator/performance-indicator';

@Injectable({
  providedIn: 'root'
})
export class PerformanceIndicatorService {

  baseURL = Constants.baseUrl + "/admin/course"

  constructor(private http:HttpClient) { }

  updatePI(pi:PerformanceIndicator,courseNumber:number,raeId:number): Observable<HttpResponse<PerformanceIndicator>>{
    return this.http.put<PerformanceIndicator>(this.baseURL+"/"+courseNumber+"/rae/"+raeId+"/assessmentTool/"+pi.assessmentTool+"/performanceIndicator/"+pi.performanceIndicatorId,pi,{observe:'response'})
  }
}
