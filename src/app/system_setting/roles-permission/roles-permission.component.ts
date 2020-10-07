import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { RolespermissionService } from './rolespermission.service';
@Component({
  selector: 'app-roles-permission',
  templateUrl: './roles-permission.component.html',
  styleUrls: ['./roles-permission.component.css']
})
export class RolesPermissionComponent implements OnInit {
  url='http://yamistha.cloudjiffy.net/api/role/';


  constructor(private datatableservice: DatatableService, private RolespermissionService: RolespermissionService) { }

  roles = [];
  rolesDto = {
  "id": 0,
  "isActive": "yes",
  "isSuperadmin": 0,
  "isSystem": 0,
  "name": "",
  "roleName": "",
  "slug": ""
}

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getroleList();
  }
  getroleList() {
    this.RolespermissionService.getroleList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.roles = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('session setting');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addrole() {
    this.RolespermissionService.save(this.rolesDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getroleList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getroleById(rolesId) {
    this.RolespermissionService.getroleById(rolesId).subscribe((res: any) => {
      this.rolesDto.isSuperadmin = res.data.isSuperadmin;
      this.rolesDto.id = res.data.id;
      this.rolesDto.isActive = res.data.isActive;
        this.rolesDto.isSystem = res.data.isSystem;
       this.rolesDto.name = res.data.name;
      this.rolesDto.roleName = res.data.roleName;
      this.rolesDto.slug = res.data.slug;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.rolesDto;
  }
  setUpdateFileds(rolesId) {
    this.isUpdate = true;
    this.getroleById(rolesId);
  }
  updaterole(rolesId) {
    this.RolespermissionService.updaterole(this.rolesDto, rolesId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getroleList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleterole(rolesId) {
    this.RolespermissionService.deleterole(rolesId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getroleList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.rolesDto.isSuperadmin = 0;
      this.rolesDto.id = 0;
      this.rolesDto.isActive = "yes";
        this.rolesDto.isSystem = 0;
       this.rolesDto.name = "";
      this.rolesDto.roleName = "";
      this.rolesDto.slug = "";
    this.isUpdate = false;
  }

}
