import { Component, OnInit } from '@angular/core';
import { HostelService } from './hostel.service';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: "app-add-hostel",
  templateUrl: "./add-hostel.component.html",
  styleUrls: ["./add-hostel.component.css"],
})
export class AddHostelComponent implements OnInit {

  url=`http://yamistha.cloudjiffy.net/hostel`;
  hostels=[];
  hostelDto = {
    'id': 0,
    'isActive': 'yes',
    'address': '',
    'description':'',
    'hostelName':'',
    'intake':0,
    'type':''
  }
  isUpdate: boolean = false;
  
  

  constructor(private hostelservice:HostelService,private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.getHostelList();
  }

  getHostelList() {
    this.hostelservice.getAllHostelList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.hostels = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('section');

    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }


  addHostel() {
    this.hostelservice.saveHostel(this.hostelDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('section Saved Successfully');
      }
      //destroy dataTable
      this.getHostelList();
    }, (err) => {
      console.log('Error While Saving Class');
      console.error(err);
    });
  }


  getHostelById(hostelId) {
    this.hostelservice.getHostelById(hostelId).subscribe((res: any) => {
      this.hostelDto.hostelName = res.data.hostelName;
      this.hostelDto.id = res.data.id;
      this.hostelDto.isActive = res.data.isActive;
      this.hostelDto.description = res.data.description;
      this.hostelDto.intake = res.data.intake;
      this.hostelDto.type = res.data.type;
      this.hostelDto.address = res.data.address;
      console.log(this.hostelDto);

    }, (err) => {
      console.log('Error while fetching class by Id');
      console.error(err);
    });
    return this.hostelDto;
  }
  setUpdateFileds(hostelId) {
    this.isUpdate = true;
    this.getHostelById(hostelId);
  }
  updateHostel(hostelId) {

    this.hostelservice.updateHostel(this.hostelDto, hostelId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert('section Updated Successfully');
      }
      //destroy dataTable
      this.getHostelList();
    }, (err) => {
      console.log('Error while Updating section');
      console.error(err);
    });

  }

  deleteHostel(hostelId) {
    this.hostelservice.deleteHostel(hostelId).subscribe((res: any) => {
      if (res.success == true) {
        alert('section deleted Successfully');
      }
      //destroy dataTable
      this.getHostelList();
    }, (err) => {
      console.log('Error while deleting section');
      console.error(err);
    });

  }

  clearData(){
    this.hostelDto.hostelName="",
    this.hostelDto.type="",
    this.hostelDto.intake=0,
    this.hostelDto.address="",
    this.hostelDto.description=""
  }

}

  
  

  

 