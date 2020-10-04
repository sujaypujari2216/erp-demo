import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { DisabledreasonService } from './disabledreason.service';


@Component({
  selector: 'app-disable-reason',
  templateUrl: './disable-reason.component.html',
  styleUrls: ['./disable-reason.component.css']
})
export class DisableReasonComponent implements OnInit {

 
  url =`http://yamistha.cloudjiffy.net/api/disable-reason`;

  constructor(private datatableservice: DatatableService, private disabledreasonService: DisabledreasonService) { }

  reasons = [];
  disableReason = {
    "reason": "",
    "id": 0,
    "isActive": "yes"
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getreasonList();
  }
  getreasonList() {
    this.disabledreasonService.getreasonList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.reasons = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Disabled Reason');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addreason() {
    this.disabledreasonService.save(this.disableReason).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getreasonList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getreasonById(reasonId) {
    this.disabledreasonService.getreasonById(reasonId).subscribe((res: any) => {
      this.disableReason.reason = res.data.reason;
      this.disableReason.id = res.data.id;
      this.disableReason.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.disableReason;
  }
  setUpdateFileds(reasonId) {
    this.isUpdate = true;
    this.getreasonById(reasonId);
  }
  updatereason(reasonId) {
    this.disabledreasonService.updatereason(this.disableReason, reasonId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getreasonList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletereason(reasonId) {
    this.disabledreasonService.deletereason(reasonId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getreasonList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.disableReason.reason = "";
    this.disableReason.id = 0;
    this.disableReason.isActive = "yes";
    this.isUpdate = false;
  }

}


  
