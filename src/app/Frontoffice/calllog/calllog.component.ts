import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { calllogService } from './calllog.service';


@Component({
  selector: 'app-calllog',
  templateUrl: './calllog.component.html',
  styleUrls: ['./calllog.component.css'],
})
export class calllogComponent implements OnInit {


  url = `http://yamistha.cloudjiffy.net/general-call`;

  calllogs = [];
  Dto = {
    "callDureation": '',
    "callType": '',
    "contact": "",
    "date": "",
    "description": "",
    "followUpDate": "",
    'id': 0,
    "isActive": "yes",
    "name": "",
    "note": ""
  }

  isUpdate: boolean = false;
  constructor(private calllogService: calllogService, private datatableservice: DatatableService) { }
  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.calllogService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.calllogs = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Call Logs');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.calllogService.save(this.Dto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(Id) {
    console.log(this.Dto);
    console.log(this.Dto);
    this.calllogService.getById(Id).subscribe((res: any) => {
      this.Dto.callDureation = res.data.callDureation;
      this.Dto.callType = res.data.callType;
      this.Dto.contact = res.data.contact;
      this.Dto.date = res.data.date;
      this.Dto.description = res.data.description;
      this.Dto.followUpDate = res.data.followUpDate;
      this.Dto.id = res.data.id;
      this.Dto.isActive = res.data.isActive;
      this.Dto.name = res.data.name;
      this.Dto.note = res.data.note;
      console.log(this.Dto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.Dto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {
    this.calllogService.update(this.Dto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.calllogService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    // this.Dto.callDureation = "";
    // this.Dto.callType = "";
    // this.Dto.contact = "";
    // this.Dto.date = "";
    // this.Dto.description = "";
    // this.Dto.followUpDate = "";
    // this.Dto.id = 0;
    // this.Dto.isActive = "yes";
    // this.Dto.name = "";
    // this.Dto.note = "";
    this.isUpdate = false;
  }
}


// import { Component, OnInit } from '@angular/core';
// import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
// import { calllogService } from './calllog.service';

// @Component({
//   selector: 'app-calllog',
//   templateUrl: './calllog.component.html',
//   styleUrls: ['./calllog.component.css'],
// })
// export class calllogComponent implements OnInit {


//   url = `http://yamistha.cloudjiffy.net/general-call`;

//   calllogs = [];

//   constructor(private calllogService: calllogService, private datatableservice: DatatableService) { }

//   ngOnInit(): void {
//   }



// }






