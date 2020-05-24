import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ReferenceService {
  url = `http://yamistha.cloudjiffy.net/reference`;

  constructor(private http: HttpClient) {}
}
