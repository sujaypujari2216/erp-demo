import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class StudcategoryService {
  url = `http://yamistha.cloudjiffy.net/category/`;

  constructor(private http: HttpClient) { }

  save(categoryDto): any {
    return this.http.post(this.url, categoryDto);
  }

  getcategoryList(): any {
    return this.http.get(this.url);
  }

  delete(Id): any {
    return this.http.delete(this.url + Id);
  }

  update(categoryDto, Id): any {
    return this.http.put(this.url + Id, categoryDto);
  }

  getById(Id): any {
    return this.http.get(this.url + Id);
  }
}
