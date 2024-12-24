import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:3005/api/v1/accounts";

  constructor(private http:HttpClient) { }

  postAct(data:any){
    return this.http.post(this.url, data)
  }
}
