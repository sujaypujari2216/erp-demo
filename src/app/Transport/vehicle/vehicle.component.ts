import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private datatableservice: DatatableService, private vehicleService: VehicleService) { }

  vehs = [];
  vehicleDto = {
    "driverContact": "",
    "driverLicence": "",
    "driverName": "",
    "id": 0,
    "isActive": "yes",
    "manufactureYear": "",
    "note": "",
    "vehicleModel": "",
    "vehicleNo": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getvehList();
  }
  getvehList() {
    this.vehicleService.getvehList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.vehs = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('vehicle');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addveh() {
    this.vehicleService.save(this.vehicleDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getvehList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getvehById(vehId) {
    this.vehicleService.getvehById(vehId).subscribe((res: any) => {
      this.vehicleDto.vehicleNo = res.data.vehicleNo;
      this.vehicleDto.vehicleModel = res.data.vehicleModel;
      this.vehicleDto.note = res.data.note;
      this.vehicleDto.manufactureYear = res.data.manufactureYear;
      this.vehicleDto.driverName = res.data.driverName;
      this.vehicleDto.driverLicence = res.data.driverLicence;
      this.vehicleDto.driverContact = res.data.driverContact;
      this.vehicleDto.id = res.data.id;
      this.vehicleDto.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.vehicleDto;
  }
  setUpdateFileds(vehId) {
    this.isUpdate = true;
    this.getvehById(vehId);
  }
  updateveh(vehId) {
    this.vehicleService.updateveh(this.vehicleDto, vehId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getvehList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteveh(vehId) {
    this.vehicleService.deleteveh(vehId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getvehList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.vehicleDto.vehicleNo = "";
    this.vehicleDto.vehicleModel = "";
    this.vehicleDto.note = "";
    this.vehicleDto.manufactureYear = "";
    this.vehicleDto.driverName = "";
    this.vehicleDto.driverLicence = "";
    this.vehicleDto.driverContact = "";
    this.vehicleDto.id = 0;
    this.vehicleDto.isActive = "yes";
    this.isUpdate = false;
  }

}
