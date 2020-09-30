import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { StudcategoryService } from './studcategory.service';

@Component({
  selector: 'app-student-categories',
  templateUrl: './student-categories.component.html',
  styleUrls: ['./student-categories.component.css']
})
export class StudentCategoriesComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/api/category/`;

  students = [];
  categoryDto = {
    
    "id": 0,
    "isActive": "yes",
    "category": "",
  };

  isUpdate: boolean = false;
  constructor(private studcategoryService: StudcategoryService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getcategoryList();
  }

  getcategoryList() {
    this.studcategoryService.getcategoryList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.students = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('References');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.studcategoryService.save(this.categoryDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getcategoryList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }
  
   
  getById(Id) {
    this.studcategoryService.getById(Id).subscribe((res: any) => {
      this.categoryDto.category = res.data.reference;
      this.categoryDto.id = res.data.id;
      this.categoryDto.isActive = res.data.isActive;
      console.log(this.categoryDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.categoryDto;
  }
  
  setUpdateFileds(Id) {
    console.log(Id);
    this.isUpdate = true;
    this.getById(Id);
  }
   
  update(Id) {

    this.studcategoryService.update(this.categoryDto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getcategoryList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }
  
  delete(Id) {
    this.studcategoryService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getcategoryList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
     this.categoryDto.id = 0;
    this.categoryDto.isActive = "yes";
    this.categoryDto.category = "";
    this.isUpdate = false;
  }
}
