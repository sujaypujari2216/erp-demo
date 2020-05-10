import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  //styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Srtup Front Office");
  }

}


