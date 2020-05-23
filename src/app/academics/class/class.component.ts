import { Component, OnInit } from "@angular/core";
import { DatatableService } from "src/app/shared/datatableservice/datatable.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/class`;

  classes = [];
  studentClass = "";
  studentSection = "";

  constructor(
    private http: HttpClient,
    private datatableservice: DatatableService
  ) {}

  ngOnInit(): void {
    this.http
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res["data"];
        var content = data["content"];

        this.classes = content.map((key) => ({ ...key }));
        this.datatableservice.initTable("Disable Reason");
      });
  }

  addClass() {
    alert("btn clicked:" + this.studentClass + "," + this.studentSection);
  }
}
