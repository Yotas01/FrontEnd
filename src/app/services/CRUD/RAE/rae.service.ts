import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { RAE } from 'src/app/model/rae/RAE';

@Injectable({
  providedIn: 'root'
})
export class RAEService {

  private baseURL: string = Constants.baseUrl+"/admin/course/"

  constructor(private http: HttpClient) { }

  getRAEFromCourse(courseNumber:number, raeId: number): Observable<HttpResponse<RAE>>{
    return this.http.get<RAE>(this.baseURL+`${courseNumber}/rae/${raeId}`,{ observe: 'response'})
  }

  getRAESFromCourse(courseNumber:number): Observable<HttpResponse<RAE[]>>{
    return this.http.get<RAE[]>(this.baseURL+`${courseNumber}/rae`,{ observe: 'response'})
  }
}
