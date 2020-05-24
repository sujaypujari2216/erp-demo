import { Component, OnInit } from "@angular/core";
import { DatatableService } from "src/app/shared/datatableservice/datatable.service";
import { HttpClient } from "@angular/common/http";
import { ClassService } from "./class.service";
@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/class`;

  classes = [];
  classDto = {
    "classses": '',
    "id": 0,
    "isActive": "yes",
    "section": [
      {
        "id": 0,
        "isActive": "yes",
        "section": ""
      }
    ]
  }

  constructor(
    private http: HttpClient,
    private datatableservice: DatatableService,
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    // this.http
    //   .get(this.url)
    //   .toPromise()
    //   .then((res) => {
    //     var data = res["data"];
    //     var content = data["content"];

    //     console.log(data);
    //     console.log(content);

    //     this.classes = content.map((key) => ({ ...key }));
    //     this.datatableservice.initTable("Disable Reason");
    //   });

    this.classService.getAllClassList().subscribe((res: any) => {
      console.log("resp received gor getAllClassList=");
      console.log(res);
      var data = res["data"];
      var content = data["content"];
      this.classes = content.map((key) => ({ ...key }));
      this.datatableservice.initTable("class");


      
    }, (err) => {
      console.error(err);
      console.log("there is error");
    });
  }

  addClass() {

    console.log(this.classDto);

    this.classService.saveClass(this.classDto).subscribe((data: any) => {
      console.log("resp received addClass=");
      console.log(data);
    }, (err) => {
      console.error(err);
      console.log("there is error");
    });

  }
}
