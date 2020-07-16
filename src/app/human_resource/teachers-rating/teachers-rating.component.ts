import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { TeachersRatingService } from './teachers-rating.service';

@Component({
  selector: 'app-teachers-rating',
  templateUrl: './teachers-rating.component.html',
  styleUrls: ['./teachers-rating.component.css']
})
export class TeachersRatingComponent implements OnInit {

  constructor(private datatableservice: DatatableService,
    private teacherRating: TeachersRatingService) { }

  ratings = [];
  Dto = {
    "comment": "",
    "id": 0,
    "isActive": "yes",
    "rate": 0,
    "role": "",
    "status": 0,
    "userId": 0
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.teacherRating.get().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.ratings = content.map((key) => ({ ...key }));
      this.datatableservice.initTable(' Expense head');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.teacherRating.save(this.Dto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.get();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(id) {
    this.teacherRating.getById(id).subscribe((res: any) => {
      this.Dto.comment = res.data.comment;
      this.Dto.id = res.data.id;
      this.Dto.isActive = res.data.isActive;
      this.Dto.rate = res.data.rate;
      this.Dto.role = res.data.role;
      this.Dto.status = res.data.status;
      this.Dto.userId = res.data.userId;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.Dto;
  }
  setUpdateFileds(id) {
    this.isUpdate = true;
    this.getById(id);
  }
  update(id) {
    this.teacherRating.update(this.Dto, id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.get();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(id) {
    this.teacherRating.delete(id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.get();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.Dto.comment = "";
    this.Dto.id = 0;
    this.Dto.isActive = "yes";
    this.Dto.rate = 0;
    this.Dto.role = "";
    this.Dto.status = 0;
    this.Dto.userId = 0;
    this.isUpdate = false;
  }

}
