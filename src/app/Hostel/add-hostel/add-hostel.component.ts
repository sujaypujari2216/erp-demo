/* import { Component, OnInit } from "@angular/core";
import { DatatableService } from "src/app/shared/datatableservice/datatable.service";
import { HttpClient } from "@angular/common/http";
import { HostelService } from "../hostel.service";
import { FormsModule } from "@angular/forms";
=======
import { Component, OnInit } from "@angular/core";
import { DatatableService } from "src/app/shared/datatableservice/datatable.service";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl } from "@angular/forms";
import {} from "@angular/forms";
>>>>>>> 4bce3c824172926d7027b2ab2a26b567ad69777e
=======
import { Component, OnInit } from "@angular/core";
import { DatatableService } from "src/app/shared/datatableservice/datatable.service";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl } from "@angular/forms";
import {} from "@angular/forms";
>>>>>>> 4bce3c824172926d7027b2ab2a26b567ad69777e

@Component({
  selector: "app-add-hostel",
  templateUrl: "./add-hostel.component.html",
  styleUrls: ["./add-hostel.component.css"],
})
export class AddHostelComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
  //hostelName: string = "";
  url = `http://yamistha.cloudjiffy.net/hostel`;
  //hostelService: any;

  hostels = [];
  hostelService: any;
  //hostelService: any;

  constructor(
    private http: HttpClient,
    private datatableservice: DatatableService,
    private dataService: HostelService
  ) {}

  ngOnInit(): void {
    /* this.http
=======
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
>>>>>>> 4bce3c824172926d7027b2ab2a26b567ad69777e
=======
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
>>>>>>> 4bce3c824172926d7027b2ab2a26b567ad69777e
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res["data"];
        var content = data["content"];

        this.hostels = content.map((key) => ({ ...key }));
<<<<<<< HEAD
<<<<<<< HEAD
        //this line for what?
        //this.initTable("Hostel List");
      }); 
    this.hostelService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.hostels = data;
    });
=======
        this.datatableservice.initTable("Hoatel List");
      });
>>>>>>> 4bce3c824172926d7027b2ab2a26b567ad69777e
=======
        this.datatableservice.initTable("Hoatel List");
      });
>>>>>>> 4bce3c824172926d7027b2ab2a26b567ad69777e
  }
}
 */
