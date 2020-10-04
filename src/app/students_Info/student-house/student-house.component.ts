import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { StudentshouseService } from './studentshouse.service';


@Component({
  selector: 'app-student-house',
  templateUrl: './student-house.component.html',
  styleUrls: ['./student-house.component.css']
})
export class StudentHouseComponent implements OnInit {


  url = 'http://yamistha.cloudjiffy.net/api/school-house';

  houses = [];
  schoolHous = {
    'id': 0,
    'isActive': 'yes',
    "description": "",
    "houseName": "",
  }
  isUpdate: boolean = false;

  constructor(
    private datatableservice: DatatableService,
    private studenthouseservice: StudentshouseService,
  ) { }

  ngOnInit(): void {

    this.getHouseList();

  }

  getHouseList() {
    this.studenthouseservice.getHouseList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.houses = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('houses');

    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }
 


  addHouse() {
    this.studenthouseservice.saveHouse(this.schoolHous).subscribe((res: any) => {
      if (res.success == true) {
        alert('House Saved Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.getHouseList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving Class');
      console.error(err);
    });
  }


  getHouseById(houseId) {
    this.studenthouseservice.getHouseById(houseId).subscribe((res: any) => {
      this.schoolHous.houseName = res.data.houseName;
      this.schoolHous.description = res.data.description;
      this.schoolHous.id = res.data.id;
      this.schoolHous.isActive = res.data.isActive;
      console.log(this.schoolHous);

    }, (err) => {
      console.log('Error while fetching class by Id');
      console.error(err);
    });
    return this.schoolHous;
  }
  setUpdateFileds(houseId) {
    this.isUpdate = true;
    this.getHouseById(houseId);
  }
  updateHouse(houseId) {

    this.studenthouseservice.updateHouse(this.schoolHous, houseId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert('House Updated Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getHouseList();
      this.clearData();

    }, (err) => {
      console.log('Error while Updating House');
      console.error(err);
    });

  }

  deleteHouse(houseId) {
    this.studenthouseservice.deleteHouse(houseId).subscribe((res: any) => {
      if (res.success == true) {
        alert('House deleted Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.getHouseList();
      this.clearData();

    }, (err) => {
      console.log('Error while deleting House');
      console.error(err);
    });
  }

  clearData() {

    this.schoolHous.id = 0;
    this.schoolHous.isActive = "yes";
    this.schoolHous.houseName = "";
    this.schoolHous.description = "";
    this.isUpdate = false;

  }


}