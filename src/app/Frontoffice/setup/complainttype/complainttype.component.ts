import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complainttype',
  templateUrl: './complainttype.component.html',
  styleUrls: ['./complainttype.component.css']
})
export class ComplainttypeComponent implements OnInit {


  url = `http://yamistha.cloudjiffy.net/complaint-type`;

  complainttypes = [];

  constructor(private http: HttpClient, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.http
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res['data'];
        var content = data['content'];

        this.complainttypes = content.map(key => ({ ...key }))
        this.datatableservice.initTable('source');

      });
  }

}

