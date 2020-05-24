import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  saveClass(classDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/class', classDto);
  }

  getAllClassList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/class');
  }

}
