import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudcertificateService {
  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/certificate/`;


  save(certificateDto): any {
    return this.http.post(this.url, certificateDto);
  }

  getcertificateList(): any {
    return this.http.get(this.url);
  }

  deletecer(cerId): any {
    return this.http.delete(this.url + cerId);
  }

  updatecer(certificateDto, cerId): any {
    return this.http.put(this.url + cerId, certificateDto);
  }

  getBycerId(cerId): any {
    return this.http.get(this.url + cerId);
  }
}
