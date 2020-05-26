import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {
  url = `http://yamistha.cloudjiffy.net/room-type`;


  constructor(private http: HttpClient) { }

}
