import { Component, OnInit } from '@angular/core';
import { AddparentService } from 'src/app/parents_Info/add-parents/addparent.service';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';


@Component({
  selector: 'app-add-parents',
  templateUrl: './add-parents.component.html',
  styleUrls: ['./add-parents.component.css']
})
export class AddParentsComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/student/`;


  addaparent = [];
  studentDto = {
    "guardianAddress": "",
    "fatherName": "",
    "parentId": 0,
    "fatherOccupation": "",
    "fatherPhone": "",
    "fatherPic": "",
    "guardianEmail": "",
    "guardianIs": "",
    "guardianName": "",
    "isActive": "yes",
    "guardianOccupation": "",
    "guardianPhone": "",
    "guardianPic": "",
    "guardianRelation": "",
    "motherName": "",
    "motherOccupation": "",
    "motherPhone": "",
    "motherPic": "",
    "schoolHouseId": 0,
    "measurementDate": "",
    
  };

  isUpdate: boolean = false;
  
  constructor(private addparentService: AddparentService,
    private datatableservice: DatatableService,
   

  ) { }

  ngOnInit(): void {
        this.getparentdetailList();


  }

   getparentdetailList() {
    this.addparentService.getparentdetailList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.addaparent = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('admissionforms');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }


  addparent() {
    this.addparentService.addparent(this.studentDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getparentdetailList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getparentById(ParId) {
    this.addparentService.getparentById(ParId).subscribe((res: any) => {
            // tslint:disable-next-line: no-unused-expression
      this.studentDto.guardianAddress = res.data.guardianAddress;
      this.studentDto.fatherName = res.data.fatherName;
      this.studentDto.parentId = res.data.parentId;
      this.studentDto.fatherOccupation = res.data.fatherOccupation;
      this.studentDto.fatherPhone = res.data.fatherPhone;
      this.studentDto.fatherPic = res.data.fatherPic;
      this.studentDto.guardianEmail = res.data.guardianEmail;
      this.studentDto.guardianIs = res.data.guardianIs;
      this.studentDto.guardianName = res.data.guardianName;
      this.studentDto.isActive = res.data.isActive;
      this.studentDto.guardianOccupation = res.data.guardianOccupation;
      this.studentDto.guardianPhone = res.data.guardianPhone;
      this.studentDto.guardianPic = res.data.guardianPic;
      this.studentDto.guardianRelation = res.data.guardianRelation;
      this.studentDto.motherName = res.data.motherName;
      this.studentDto.motherOccupation = res.data.motherOccupation;
      this.studentDto.motherPhone = res.data.motherPhone;
      this.studentDto.motherPic = res.data.motherPic;
      this.studentDto.measurementDate = res.data.measurementDate;
      //this.studentDto.adharNo = res.data.adharNo;

      console.log(this.studentDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.studentDto;
  }
  setUpdateFileds(ParId) {
    console.log(ParId);
    this.isUpdate = true;
    this.getparentById(ParId);
    console.log('setup successfull');
  }
  updateparentinfo(ParId) {

    this.addparentService.updateparentinfo(this.studentDto, ParId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getparentdetailList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteparent(ParId) {
    this.addparentService.deleteparent(ParId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getparentdetailList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.studentDto.guardianAddress = "";
    this.studentDto.fatherName = "";
    this.studentDto.parentId = 0;
    this.studentDto.fatherOccupation = "";
    this.studentDto.fatherPhone = "";
    this.studentDto.fatherPic = "";
    this.studentDto.guardianEmail = "";
    this.studentDto.guardianIs = "";
    this.studentDto.guardianName = "";
    this.studentDto.isActive = "yes";
    this.studentDto.guardianOccupation = "";
    this.studentDto.guardianPhone = "";
    this.studentDto.guardianPic = "";
    this.studentDto.guardianRelation = "";
    this.studentDto.motherName = "";
    this.studentDto.motherOccupation = "";
    this.studentDto.motherPhone = "";
    this.studentDto.motherPic = "";
    this.studentDto.measurementDate = "";
    this.isUpdate = false;

  }


}
