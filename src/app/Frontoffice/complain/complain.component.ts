import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  //styleUrls: ['./complain.component.scss']
})
export class ComplainComponent implements OnInit {

  constructor(private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Complain");
  }

}





