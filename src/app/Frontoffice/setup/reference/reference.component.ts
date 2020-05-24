import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/reference`;
  references = [];

  constructor(private http: HttpClient, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.http
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res['data'];
        var content = data['content'];

        this.references = content.map(key => ({ ...key }))
        this.datatableservice.initTable('source');

      });
  }

}

