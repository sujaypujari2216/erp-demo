import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  save(hostelroomDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/hostel-room/', hostelroomDto);
  }

  getList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/hostel-room/');
  }

  delete(hostelroomId): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/hostel-room/' + hostelroomId);
  }

  update(hostelroomDto, hostelroomId): any {
    return this.http.put('http://yamistha.cloudjiffy.net/hostel-room/' + hostelroomId, hostelroomDto);
  }
  getById(hostelroomId): any {
    return this.http.get('http://yamistha.cloudjiffy.net/hostel-room/' + hostelroomId);
  }
}