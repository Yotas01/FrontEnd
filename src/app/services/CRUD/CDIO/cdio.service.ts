import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CDIO } from 'src/app/model/CDIO/cdio';

@Injectable({
  providedIn: 'root'
})
export class CDIOService {

  baseURL = environment.baseUrl + "/admin/cdio";

  constructor(private http: HttpClient) { }

  get(cdioNumber: number) : Observable<HttpResponse<CDIO>>{
    return this.http.get<CDIO>(this.baseURL+"/"+cdioNumber, { observe: 'response'});
  }

  getAll() : Observable<HttpResponse<CDIO[]>>{
    return this.http.get<CDIO[]>(this.baseURL, { observe: 'response'});
  }

  createCDIO(cdio: CDIO): Observable<HttpResponse<CDIO>>{
    return this.http.post<CDIO>(this.baseURL,cdio, { observe: 'response'});
  }

  deleteCDIO(cdioNumber: number): Observable<HttpResponse<CDIO>>{
    return this.http.delete<CDIO>(this.baseURL+"/"+cdioNumber, { observe: 'response'});
  }

  updateCDIO(cdio: CDIO, cdioNumber: number): Observable<HttpResponse<CDIO>>{
    return this.http.put<CDIO>(this.baseURL+"/"+cdioNumber, cdio, { observe: 'response'});
  }
}
