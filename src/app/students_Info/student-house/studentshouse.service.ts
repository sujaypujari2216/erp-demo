import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentshouseService {
  url = 'http://yamistha.cloudjiffy.net/school-house/';

  constructor(private http: HttpClient) { }

  saveHouse(schoolHous): any {
    return this.http.post(this.url, schoolHous);
  }

  getHouseList(): any {
    return this.http.get(this.url);
  }

  deleteHouse(houseId): any {
    return this.http.delete(this.url + houseId);
  }

  updateHouse(schoolHous, houseId): any {
    return this.http.put(this.url + houseId, schoolHous);
  }

  getHouseById(houseId): any {
    return this.http.get(this.url + houseId);
  }
}
