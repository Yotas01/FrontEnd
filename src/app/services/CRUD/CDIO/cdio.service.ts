import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { CDIO } from 'src/app/model/CDIO/cdio';

@Injectable({
  providedIn: 'root'
})
export class CDIOService {

  baseURL = Constants.baseUrl + "/admin/cdio";

  constructor(private http: HttpClient) { }

  get(cdioNumber: number) : Observable<HttpResponse<CDIO>>{
    return this.http.get<CDIO>(this.baseURL+"/"+cdioNumber, { observe: 'response'});
  }

  getAll() : Observable<HttpResponse<CDIO[]>>{
    return this.http.get<CDIO[]>(this.baseURL, { observe: 'response'});
  }
}
