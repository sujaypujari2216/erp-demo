import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomeheadService {
  constructor(private http: HttpClient) { }

  url = 'http://yamistha.cloudjiffy.net/api/income-head/';


  save(incomeHeadDto): any {
    return this.http.post(this.url, incomeHeadDto);
  }

  getincomeheadList(): any {
    return this.http.get(this.url);
  }

  deleteincomehead(incomeheadId): any {
    return this.http.delete(this.url + incomeheadId);
  }

  updateincomehead(incomeHeadDto, incomeheadId): any {
    return this.http.put(this.url + incomeheadId, incomeHeadDto);
  }

  getincomeheadById(incomeheadId): any {
    return this.http.get(this.url + incomeheadId);
  }
}
