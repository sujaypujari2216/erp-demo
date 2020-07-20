import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
  url = `http://yamistha.cloudjiffy.net/vehicle/`;

  save(vehicleDto): any {
    return this.http.post(this.url, vehicleDto);
  }

  getvehList(): any {
    return this.http.get(this.url);
  }

  deleteveh(vehId): any {
    return this.http.delete(this.url + vehId);
  }

  updateveh(vehicleDto, vehId): any {
    return this.http.put(this.url + vehId, vehicleDto);
  }

  getvehById(vehId): any {
    return this.http.get(this.url + vehId);
  }
}