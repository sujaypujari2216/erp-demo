import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeestypeService {
  constructor(private http: HttpClient) { }

  url = 'http://yamistha.cloudjiffy.net/api/fee-type/';


  save(feeTypeDto): any {
    return this.http.post(this.url, feeTypeDto);
  }

  gettypeList(): any {
    return this.http.get(this.url);
  }

  deletetype(typeId): any {
    return this.http.delete(this.url + typeId);
  }

  updatetype(feeTypeDto, typeId): any {
    return this.http.put(this.url + typeId, feeTypeDto);
  }

  gettypeById(typeId): any {
    return this.http.get(this.url + typeId);
  }
}
