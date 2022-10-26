import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { Section } from 'src/app/model/section/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private baseURL: string = Constants.baseUrl+"/admin/course";

  constructor(private http: HttpClient) { }

  getSection(courseNumber: number, sectionNumber: number): Observable<HttpResponse<Section>>{
    return this.http
    .get<Section>(`${this.baseURL}/${courseNumber}/section/${sectionNumber}`, {observe: 'response'});
  }

  getAllCourseSections(courseNumber: number, semester: number): Observable<HttpResponse<Section[]>>{
    return this.http
    .get<Section[]>(`${this.baseURL}/${courseNumber}/sections/semester/${semester}`, {observe: 'response'});
  }

  createSection(courseNumber:number,section:Section): Observable<HttpResponse<Section>>{
    return this.http.post<Section>(this.baseURL+"/"+courseNumber+"/section",section,{observe:'response'})
  }

  deleteSection(courseNumber:number,sectionId:number): Observable<HttpResponse<Section>>{
    return this.http.delete<Section>(this.baseURL+"/"+courseNumber+"/section/"+sectionId, {observe: 'response'})
  }

  updateSection(courseNumber:number,section:Section): Observable<HttpResponse<Section>>{
    return this.http.put<Section>(this.baseURL+"/"+courseNumber+"/section/"+section.number,section,{ observe: 'response'});
  }
}
