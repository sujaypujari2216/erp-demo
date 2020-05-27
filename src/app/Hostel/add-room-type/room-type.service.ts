import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  url = `http://yamistha.cloudjiffy.net/room-type`;


  constructor(private http: HttpClient) { }

  save(roomType): any {
    return this.http.post(this.url, roomType);
  }

  getList(): any {
    return this.http.get(this.url);
  }

  delete(Id): any {

    console.log(this.url + Id);
    return this.http.delete(this.url + Id);
  }

  update(roomType, Id): any {
    return this.http.put(this.url + Id, roomType);
  }

  getById(Id): any {
    return this.http.get(this.url + Id);
  }
}
