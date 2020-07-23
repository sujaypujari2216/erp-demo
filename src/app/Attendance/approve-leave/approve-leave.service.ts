import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApproveLeaveService {
  url = 'http://yamistha.cloudjiffy.net/student apply leave';

  constructor(private http: HttpClient) { }

  save(studentApplyleaveDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/student apply leave', studentApplyleaveDto);
  }

  getList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/student apply leave');
  }

  delete(Id): any {

    console.log('http://yamistha.cloudjiffy.net/student apply leave/' + Id);
    return this.http.delete('http://yamistha.cloudjiffy.net/student apply leave/' + Id);
  }

  update(studentApplyleaveDto, Id): any {
    return this.http.put('http://yamistha.cloudjiffy.net/student apply leave/' + Id, studentApplyleaveDto);
  }

  getById(Id): any {
    return this.http.get('http://yamistha.cloudjiffy.net/student apply leave/' + Id);
  }

}
