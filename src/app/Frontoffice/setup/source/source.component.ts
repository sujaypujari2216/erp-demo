import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { SourceService } from './source.service';


@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  sources = [];
  Dto = {
    "description": "",
    "id": 0,
    "isActive": "yes",
    "source": "",
  }

  isUpdate: boolean = false;
  constructor(private sourceService: SourceService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.sourceService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.sources = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Sources');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.sourceService.save(this.Dto).subscribe((res: any) => {
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
    this.sourceService.getById(Id).subscribe((res: any) => {
      this.Dto.description = res.data.description;
      this.Dto.source = res.data.source;
      this.Dto.id = res.data.id;
      this.Dto.isActive = res.data.isActive;
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

    this.sourceService.update(this.Dto, Id).subscribe((res: any) => {
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
    this.sourceService.delete(Id).subscribe((res: any) => {
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
    this.Dto.description = "";
    this.Dto.id = 0;
    this.Dto.isActive = "yes";
    this.Dto.source = "";
    this.isUpdate = false;
  }

}

