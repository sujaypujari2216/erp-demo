import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { OnlineexaminationService } from './onlineexamination.service';


@Component({
  selector: 'app-online-examination',
  templateUrl: './online-examination.component.html',
  styleUrls: ['./online-examination.component.css']
})
export class OnlineExaminationComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/online-exam/`;

  onlineexamination = [];
  onlineexamDto = {
    "attempt": 0,
    "description": "",
    "duration": "",
    "exam": "",
    "examFrom": "",
    "examTo": "",
    "id": 0,
    "isActive": "yes",
    "passingPercentage": 0,
    "publishResult": 0,
    "timeFrom": "",
    "timeTo": "",
  };

  isUpdate: boolean = false;
  // purposes: any;

  constructor(private onlineexaminationService: OnlineexaminationService,
      private datatableservice: DatatableService ) { }

  ngOnInit(): void {
    this.getonlineList();
   
  }

 
  getonlineList() {
    this.onlineexaminationService.getonlineList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.onlineexamination = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Online Examination');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  addonline() {
    this.onlineexaminationService.save(this.onlineexamDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getonlineList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }
  getByonlineId(onlineId) {
   
    this.onlineexaminationService.getByonlineId(onlineId).subscribe((res: any) => {
      this.onlineexamDto.attempt = res.data.attempt;
      this.onlineexamDto.id = res.data.id;
      this.onlineexamDto.isActive = res.data.isActive;
      this.onlineexamDto.description = res.data.description;
      this.onlineexamDto.duration = res.data.duration;
      this.onlineexamDto.examFrom = res.data.examFrom;
      this.onlineexamDto.examTo = res.data.examTo;
      this.onlineexamDto.passingPercentage = res.data.passingPercentage;
      this.onlineexamDto.publishResult = res.data.publishResult;
      this.onlineexamDto.timeFrom = res.data.timeFrom;
      this.onlineexamDto.timeTo = res.data.timeTo;

      console.log(this.onlineexamDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.onlineexamDto;
  }
  setUpdateFileds(onlineId) {
    this.isUpdate = true;
    this.getByonlineId(onlineId);
  }

  updateonline(onlineId) {

    this.onlineexaminationService.updateonline(this.onlineexamDto, onlineId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getonlineList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });
  }

  deleteonline(onlineId) {
    this.onlineexaminationService.deleteonline(onlineId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getonlineList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }
  clearData() {
    this.onlineexamDto.attempt = 0;
    this.onlineexamDto.id = 0;
    this.onlineexamDto.isActive = "yes";
    this.onlineexamDto.description = "";
    this.onlineexamDto.duration = "";
    this.onlineexamDto.examFrom = "";
    this.onlineexamDto.examTo = "";
    this.onlineexamDto.passingPercentage = 0;
    this.onlineexamDto.publishResult = 0;
    this.onlineexamDto.timeFrom = "";
    this.onlineexamDto.timeTo = "";

    this.isUpdate = false;
  }
}