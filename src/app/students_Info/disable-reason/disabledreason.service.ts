import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisabledreasonService {

  constructor(private http: HttpClient) { }
  url = `http://yamistha.cloudjiffy.net/disable-reason`;

  save(disableReason): any {
    return this.http.post(this.url, disableReason);
  }

  getreasonList(): any {
    return this.http.get(this.url);
  }

  deletereason(reasonId): any {
    return this.http.delete(this.url + reasonId);
  }

  updatereason(disableReason, reasonId): any {
    return this.http.put(this.url + reasonId, disableReason);
  }

  getreasonById(reasonId): any {
    return this.http.get(this.url + reasonId);
  }
}