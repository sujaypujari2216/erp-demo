import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-teachers-rating',
  templateUrl: './teachers-rating.component.html',
  styleUrls: ['./teachers-rating.component.css']
})
export class TeachersRatingComponent implements OnInit {

  constructor(private datatebleservice:DatatableService) { }

  ngOnInit(): void {
    this.datatebleservice.initTable("Teachers' Ratings List");
  }

}
