import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdditemService {
  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/item/`;


  save(itemDto): any {
    return this.http.post(this.url, itemDto);
  }

  getitemList(): any {
    return this.http.get(this.url);
  }

  deleteitem(itemId): any {
    return this.http.delete(this.url + itemId);
  }

  updateitem(itemDto, itemId): any {
    return this.http.put(this.url + itemId, itemDto);
  }

  getitemById(itemId): any {
    return this.http.get(this.url + itemId);
  }
}
