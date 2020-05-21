import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.css"],
})
export class SubjectsComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/subject`;

  items = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res["data"];
        var content = data["content"];

        this.items = content.map((key) => ({ ...key }));
      });
  }
}
