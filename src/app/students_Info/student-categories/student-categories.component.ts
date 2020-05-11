import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-student-categories',
  templateUrl: './student-categories.component.html',
  styleUrls: ['./student-categories.component.css']
})
export class StudentCategoriesComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Student Categories");
  }

}
