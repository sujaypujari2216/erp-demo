import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {

  constructor(private datatablservice:DatatableService) { }

  ngOnInit(): void {
    this.datatablservice.initTable("Hostel List");
  }

}
