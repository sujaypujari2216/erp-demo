import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  url = `http://yamistha.cloudjiffy.net/department/`;

  save(department): any {
    return this.http.post(this.url, department);
  }

  getdeptList(): any {
    return this.http.get(this.url);
  }

  deletedept(departmentId): any {
    return this.http.delete(this.url + departmentId);
  }

  updatedept(department, departmentId): any {
    return this.http.put(this.url + departmentId, department);
  }

  getdepartmentById(departmentId): any {
    return this.http.get(this.url + departmentId);
  }
}