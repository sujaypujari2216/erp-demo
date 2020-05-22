/* import { Component, OnInit } from "@angular/core";
import { DatatableService } from "src/app/shared/datatableservice/datatable.service";
import { HttpClient } from "@angular/common/http";
import { HostelService } from "../hostel.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-add-hostel",
  templateUrl: "./add-hostel.component.html",
  styleUrls: ["./add-hostel.component.css"],
})
export class AddHostelComponent implements OnInit {
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
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res["data"];
        var content = data["content"];

        this.hostels = content.map((key) => ({ ...key }));
        //this line for what?
        //this.initTable("Hostel List");
      }); 
    this.hostelService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.hostels = data;
    });
  }
}
 */
