import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  constructor(private http:HttpClient) { }
   
  saveRoomType(roomtypeDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/room-type', roomtypeDto);
  }

  getAllRoomTypeList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/room-type/');
  }

  deleteRoomType(roomtypeId): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/room-type/' + roomtypeId);
  }

  updateRoomType(roomtypeDto, roomtypeId): any {
    return this.http.put('http://yamistha.cloudjiffy.net/room-type/' + roomtypeId, roomtypeDto);
  }

  getRoomTypeById(roomtypeId): any {
    return this.http.get('http://yamistha.cloudjiffy.net/room-type/' + roomtypeId);
  }
}
