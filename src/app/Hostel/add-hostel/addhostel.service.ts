import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AddhostelService {
  url = `http://yamistha.cloudjiffy.net/hostel`;

  constructor(private http: HttpClient) { }

  save(hostelDto): any {
    return this.http.post(this.url, hostelDto);
  }

  getList(): any {
    return this.http.get(this.url);
  }

  delete(Id): any {

    console.log(this.url + Id);
    return this.http.delete(this.url + Id);
  }

  update(hostelDto, Id): any {
    return this.http.put(this.url + Id, hostelDto);
  }

  getById(Id): any {
    return this.http.get(this.url + Id);
  }
}
