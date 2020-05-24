import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {


  url = `http://yamistha.cloudjiffy.net/source`;

  sources = [];

  constructor(private http: HttpClient, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.http
      .get(this.url)
      .toPromise()
      .then((res) => {
        var data = res['data'];
        var content = data['content'];

        this.sources = content.map(key => ({ ...key }))
        this.datatableservice.initTable('source');

      });
  }

}

