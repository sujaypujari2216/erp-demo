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

  getClassList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/class');
  }

  deleteClass(classId): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/class/' + classId);
  }

  updateClass(classDto, classId): any {
    return this.http.put('http://yamistha.cloudjiffy.net/class/' + classId, classDto);
  }

  getClassById(classId): any {
    return this.http.get('http://yamistha.cloudjiffy.net/class/' + classId);
  }

}
