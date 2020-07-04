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


  getHostelRoomList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/hostel-room/');

  }

  deleteHostelRoom(hostelroomId): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/hostel-room/' + hostelroomId);
  }

  updateHostelRoom(hostelroomDto, hostelroomId): any {
    return this.http.put('http://yamistha.cloudjiffy.net/hostel-room/' + hostelroomId, hostelroomDto);
  }
  getHostelRoomById(hostelroomId): any {
    return this.http.get('http://yamistha.cloudjiffy.net/hostel-room/' + hostelroomId);
  }
}