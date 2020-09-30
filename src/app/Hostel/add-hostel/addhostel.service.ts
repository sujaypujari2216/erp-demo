import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'

})
export class AddhostelService {
  url = 'http://yamistha.cloudjiffy.net/api/hostel';

  constructor(private http: HttpClient) { }

  save(hostelDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/api/hostel', hostelDto);
  }

  gethostelList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/api/hostel');
  }

  delete(Id): any {

    console.log('http://yamistha.cloudjiffy.net/api/hostel/' + Id);
    return this.http.delete('http://yamistha.cloudjiffy.net/api/hostel/' + Id);
  }

  update(hostelDto, Id): any {
    return this.http.put('http://yamistha.cloudjiffy.net/api/hostel/' + Id, hostelDto);
  }

  getById(Id): any {
    return this.http.get('http://yamistha.cloudjiffy.net/api/hostel/' + Id);
  }
}