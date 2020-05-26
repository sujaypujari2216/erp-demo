import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {



  url = `http://yamistha.cloudjiffy.net/hostel`;

  hostels = [];

  constructor(private http: HttpClient, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.http
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res['data'];
        var content = data['content'];

        this.hostels = content.map(key => ({ ...key }))
        this.datatableservice.initTable("Hoatel List");


      });
  }



  delete(Id) {
    this.addhostelService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData(){
    this.hostelDto.hostelName="",
    this.hostelDto.type="",
    this.hostelDto.intake=0,
    this.hostelDto.address="",
    this.hostelDto.description=""
  }

}

  
  

  

 
