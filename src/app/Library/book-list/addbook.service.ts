import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddbookService {
  url = `http://yamistha.cloudjiffy.net/api/book/`;

  constructor(private http: HttpClient) { }

  save(Dto): any {
    return this.http.post(this.url, Dto);
  }

  getbookList(): any {
    return this.http.get(this.url);
  }

  deletebook(bookId): any {
    return this.http.delete(this.url + bookId);
  }

  updatebook(Dto, bookId): any {
    return this.http.put(this.url + bookId, Dto);
  }

  getbookById(bookId): any {
    return this.http.get(this.url + bookId);
  }
}
