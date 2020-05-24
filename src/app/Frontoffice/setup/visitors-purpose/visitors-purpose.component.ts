import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visitors-purpose',
  templateUrl: './visitors-purpose.component.html',
  styleUrls: ['./visitors-purpose.component.css']
})
export class VisitorsPurposeComponent implements OnInit {


  url = `http://yamistha.cloudjiffy.net/visitor-purpose`;

  visitors = [];

  constructor(private http: HttpClient, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.http
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res['data'];
        var content = data['content'];

        this.visitors = content.map(key => ({ ...key }))
        this.datatableservice.initTable('visitors purpose');

      });
  }

}

