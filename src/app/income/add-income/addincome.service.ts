import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddincomeService {
  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/income/`;


  save(incomeDto): any {
    return this.http.post(this.url, incomeDto);
  }

  getincomeList(): any {
    return this.http.get(this.url);
  }

  deleteincome(incomeId): any {
    return this.http.delete(this.url + incomeId);
  }

  updateincome(incomeDto, incomeId): any {
    return this.http.put(this.url + incomeId, incomeDto);
  }

  getincomeById(incomeId): any {
    return this.http.get(this.url + incomeId);
  }
}
