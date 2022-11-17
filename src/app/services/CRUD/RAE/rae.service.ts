import { Description } from './../../../model/rae/description/Description';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RAE } from 'src/app/model/rae/RAE';

@Injectable({
  providedIn: 'root'
})
export class RAEService {

  private baseURL: string = environment.baseUrl+"/admin/course/"
  private baseURLCDIO: string = environment.baseUrl+"/admin/cdio/"

  constructor(private http: HttpClient) { }

  getRAEFromCourse(courseNumber:number, raeId: number): Observable<HttpResponse<RAE>>{
    return this.http.get<RAE>(this.baseURL+`${courseNumber}/rae/${raeId}`,{ observe: 'response'})
  }

  getRAESFromCourse(courseNumber:number): Observable<HttpResponse<RAE[]>>{
    return this.http.get<RAE[]>(this.baseURL+`${courseNumber}/rae`,{ observe: 'response'})
  }

  createRAE(courseNumber:number,rae:RAE): Observable<HttpResponse<RAE>>{
    let d:Description = new Description(rae.description)
    return this.http.post<RAE>(this.baseURL+courseNumber+"/rae",d,{observe: 'response'})
  }

  addCDIOToRAE(cdio:number,raeId:number): Observable<HttpResponse<RAE>>{
    return this.http.post<RAE>(this.baseURLCDIO+cdio+"/rae/"+raeId,"",{observe:'response'})
  }

  deleteRAE(courseNumber:number,raeId:number): Observable<HttpResponse<RAE>>{
    return this.http.delete<RAE>(this.baseURL+courseNumber+"/rae/"+raeId,{observe:'response'})
  }

}
