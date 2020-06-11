import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PostalreceiveService {
  url = `http://yamistha.cloudjiffy.net/dispatch-receive`;


  constructor(private http: HttpClient) { }

  save(dispatchReceiveDto): any {
    return this.http.post(this.url, dispatchReceiveDto);
  }

  getAllList(): any {
    return this.http.get(this.url);
  }

  deleterec(Id): any {

    return this.http.delete(this.url + Id);
  }

  update(dispatchReceiveDto, Id): any {
    return this.http.put(this.url + Id, dispatchReceiveDto);
  }

  getById(Id): any {
    return this.http.get(this.url + Id);
  }
}
