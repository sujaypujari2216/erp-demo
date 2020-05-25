import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HostelService {

  constructor(private http:HttpClient) { }
   
  saveHostel(HostelDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/hostel', HostelDto);
  }

  getAllHostelList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/hostel/');
  }

  deleteHostel(hostelId): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/hostel/' + hostelId);
  }

  updateHostel(hostelDto, hostelId): any {
    return this.http.put('http://yamistha.cloudjiffy.net/hostel/' + hostelId, hostelDto);
  }

  getHostelById(hostelId): any {
    return this.http.get('http://yamistha.cloudjiffy.net/hostel/' + hostelId);
  }
}
