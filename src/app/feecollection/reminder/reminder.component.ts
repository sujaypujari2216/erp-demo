
import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  //styleUrls: ['./setup.component.scss']
})
export class ReminderComponent  implements OnInit {

  constructor(private datatable:DatatableService) { }

  ngOnInit(): void {
    this.datatable.initTable("Fees Reminder");
  }

}












