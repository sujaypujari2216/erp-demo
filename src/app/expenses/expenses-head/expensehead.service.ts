import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseheadService {
  constructor(private http: HttpClient) { }

  url = 'http://yamistha.cloudjiffy.net/api/expense-head/';


  save(expenseHeadDto): any {
    return this.http.post(this.url, expenseHeadDto);
  }

  getheadList(): any {
    return this.http.get(this.url);
  }

  deleteexpensehead(headId): any {
    return this.http.delete(this.url + headId);
  }

  updateexpensehead(expenseHeadDto, headId): any {
    return this.http.put(this.url + headId, expenseHeadDto);
  }

  getheadById(headId): any {
    return this.http.get(this.url + headId);
  }
}
