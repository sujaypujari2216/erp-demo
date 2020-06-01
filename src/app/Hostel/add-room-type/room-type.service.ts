import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  url = `http://yamistha.cloudjiffy.net/room-type`;


  constructor(private http: HttpClient) { }

  save(roomType): any {
    return this.http.post(`http://yamistha.cloudjiffy.net/room-type`, roomType);
  }

  getList(): any {
    return this.http.get(`http://yamistha.cloudjiffy.net/room-type`);
  }

  delete(Id): any {

    console.log(`http://yamistha.cloudjiffy.net/room-type/`+ Id);
    return this.http.delete(`http://yamistha.cloudjiffy.net/room-type/` + Id);
  }

  update(roomType, Id): any {
    return this.http.put(`http://yamistha.cloudjiffy.net/room-type/` + Id, roomType);
  }

  getById(Id): any {
    return this.http.get(`http://yamistha.cloudjiffy.net/room-type/`+ Id);
  }



}