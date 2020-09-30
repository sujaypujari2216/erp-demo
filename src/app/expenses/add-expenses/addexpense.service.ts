import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddexpenseService {
  constructor(private http: HttpClient) { }

  url = 'http://yamistha.cloudjiffy.net/api/expense/';


  save(expenseDto): any {
    return this.http.post(this.url, expenseDto);
  }

  getexpenseList(): any {
    return this.http.get(this.url);
  }

  deleteexpense(expenseId): any {
    return this.http.delete(this.url + expenseId);
  }

  updateexpense(expenseDto, expenseId): any {
    return this.http.put(this.url + expenseId, expenseDto);
  }

  getByexpenseId(expenseId): any {
    return this.http.get(this.url + expenseId);
  }
}
