import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  constructor(private http: HttpClient) { }

  saveSubject(subjectDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/subject', subjectDto);
  }

  getAllSubjectList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/subject');
  }

  deleteSubject(subjectId): any {
    return this.http.delete('http://yamistha.cloudjiffy.net/subject/' + subjectId);
  }

  updateSubject(subjectDto, subjectId): any {
    return this.http.put('http://yamistha.cloudjiffy.net/subject/' + subjectId, subjectDto);
  }

  getSubjectById(subjectId): any {
    return this.http.get('http://yamistha.cloudjiffy.net/subject/' + subjectId);
  }

}
