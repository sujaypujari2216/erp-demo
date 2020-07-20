import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectgroupService {

  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/subject group/`;

  save(subjectGroupDto): any {
    return this.http.post(this.url, subjectGroupDto);
  }

  getsgList(): any {
    return this.http.get(this.url);
  }

  deletesg(subjectgroupId): any {
    return this.http.delete(this.url + subjectgroupId);
  }

  updatesg(subjectGroupDto, subjectgroupId): any {
    return this.http.put(this.url + subjectgroupId, subjectGroupDto);
  }

  getsgById(subjectgroupId): any {
    return this.http.get(this.url + subjectgroupId);
  }
}