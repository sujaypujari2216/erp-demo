import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionbankService {
  constructor(private http: HttpClient) { }

  url = 'http://yamistha.cloudjiffy.net/question/';


  save(questionDto): any {
    return this.http.post(this.url, questionDto);
  }

  getquestionList(): any {
    return this.http.get(this.url);
  }

  deleteque(queId): any {
    return this.http.delete(this.url + queId);
  }

  updateque(questionDto, queId): any {
    return this.http.put(this.url + queId, questionDto);
  }

  getqueById(queId): any {
    return this.http.get(this.url + queId);
  }
}
