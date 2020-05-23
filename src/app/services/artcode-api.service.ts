import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hostel } from '../shared/classes/hostel.model';


@Injectable({
  providedIn: 'root'
})
export class ArtcodeAPIService {
 hostelURL="http://yamistha.cloudjiffy.net/hostel";

 httpOptions={
   headers:new HttpHeaders({
     'Content-Type':'application/json'
   })
 }

  constructor(private httpclient:HttpClient) { }
  
  getSubjects(): Observable<any>{
    return this.httpclient.get("http://yamistha.cloudjiffy.net/subject");

  }

  addHostel(hostel):Observable<Hostel>{
    return this.httpclient.post<Hostel>(this.hostelURL,JSON.stringify(hostel),this.httpOptions);
  }
}
