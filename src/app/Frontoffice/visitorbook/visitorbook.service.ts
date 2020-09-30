import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VisitorbookService {
  url = `http://yamistha.cloudjiffy.net/api/visitors-book/`;

  constructor(private http: HttpClient) { }

  save(Dto): any {
    return this.http.post(this.url, Dto);
  }

  getvisitorList(): any {
    return this.http.get(this.url);
  }

  deletevb(VbId): any {
    return this.http.delete(this.url + VbId);
  }

  updatevb(Dto, VbId): any {
    return this.http.put(this.url + VbId, Dto);
  }

  getByVbId(VbId): any {
    return this.http.get(this.url + VbId);
  }
}
