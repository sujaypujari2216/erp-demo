import { Component, OnInit } from "@angular/core";
import { DatatableService } from "src/app/shared/datatableservice/datatable.service";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl } from "@angular/forms";
import {} from "@angular/forms";

@Component({
  selector: "app-add-hostel",
  templateUrl: "./add-hostel.component.html",
  styleUrls: ["./add-hostel.component.css"],
})
export class AddHostelComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/hostel`;
  hostels = [];
  hostelForm = new FormGroup({
    hostelName: new FormControl(""),
    type: new FormControl(""),
    intake: new FormControl(""),
    address: new FormControl(""),
    description: new FormControl(""),
  });

  constructor(
    private http: HttpClient,
    private datatableservice: DatatableService
  ) {}

  ngOnInit(): void {}
  formSubmit() {
    console.log(this.hostelForm.value);
    //making POST req. to API
    // this.http
    //   .post(this.url, this.hostelForm.value, {
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded; charset=utf-8",
    //     },
    //   })
    //   .subscribe(
    //     (res) => {
    //       console.log(res);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );

    this.http
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res["data"];
        var content = data["content"];

        this.hostels = content.map((key) => ({ ...key }));
        this.datatableservice.initTable("Hoatel List");
      });
  }
}
