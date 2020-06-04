import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { VisitorsPerposeService } from './visitors-perpose.service';

@Component({
  selector: 'app-visitors-purpose',
  templateUrl: './visitors-purpose.component.html',
  styleUrls: ['./visitors-purpose.component.css']
})
export class VisitorsPurposeComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/visitor-purpose`;
  visitors = [];
  visitorsPurpose = {
    "description": "string",
    "id": 0,
    "visitorsPurpose": "string"
  }

  isUpdate: boolean = false;
  constructor(private visitorsperposeService: VisitorsPerposeService, 
    private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getpurposeList();
  }

  getpurposeList() {
    this.visitorsperposeService.getpurposeList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.visitors = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Visitors Perpose');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.visitorsperposeService.save(this.visitorsPurpose).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getpurposeList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(Id) {
    this.visitorsperposeService.getById(Id).subscribe((res: any) => {
      this.visitorsPurpose.description = res.data.description;
      this.visitorsPurpose.visitorsPurpose = res.data.visitorsPurpose;
      this.visitorsPurpose.id = res.data.id;
      console.log(this.visitorsPurpose);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.visitorsPurpose;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {
    this.visitorsperposeService.update(this.visitorsPurpose, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getpurposeList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.visitorsperposeService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getpurposeList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.visitorsPurpose.description = "";
    this.visitorsPurpose.id = 0;
    this.visitorsPurpose.visitorsPurpose = "";
    this.isUpdate = false;
  }
}

