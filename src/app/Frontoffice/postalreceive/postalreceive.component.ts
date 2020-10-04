import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { PostalreceiveService } from './postalreceive.service';
@Component({
  selector: 'app-postalreceive',
  templateUrl: './postalreceive.component.html',
  //styleUrls: ['./postalreceive.component.scss']
})
export class PostalreceiveComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/api/dispatch-receive`;

   postalreceive=[];
  dispatchReceiveDto = {
    "address": "",
    "date": "",
    "fromTitle": "",
    "id": 0,
    "image": "",
    "isActive": "yes",
    "note": "",
    "referenceNo": "",
    "toTitle": "",
    "type": ""
  }

  isUpdate: boolean = false;
  constructor(private postalService: PostalreceiveService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getAllList();
  }

  getAllList() {
    this.postalService.getAllList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.postalreceive = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('postalreceive');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  

  add() {
 this.postalService.save(this.dispatchReceiveDto).subscribe(
  (res: any) => {
    if (res.success == true) {
      alert(' Saved Successfully');
    }
    //destroy dataTable
    this.datatableservice.destroy();
    this.getAllList();
    this.clearData();
  },
  (err) => {
    console.log('Error While Saving Class');
    console.error(err);
  });
  }


  getById(Id) {
    this.postalService.getById(Id).subscribe((res: any) => {
      this.dispatchReceiveDto.address = res.data.address;
      this.dispatchReceiveDto.date = res.data.date;
      this.dispatchReceiveDto.id = res.data.id;
      this.dispatchReceiveDto.image = res.data.image;
      this.dispatchReceiveDto.note = res.data.note;
      this.dispatchReceiveDto.referenceNo = res.data.referenceNo;
      this.dispatchReceiveDto.toTitle = res.data.toTitle;
      this.dispatchReceiveDto.fromTitle = res.data.fromTitle;
      this.dispatchReceiveDto.isActive = res.data.isActive;
      this.dispatchReceiveDto.type = res.data.type;

      // console.log(this.dispatchReceiveDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.dispatchReceiveDto;
  }

 
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {

    this.postalService.update(this.dispatchReceiveDto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      //this.isUpdate = false;
      this.getAllList();
      this.clearData();

    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }
  
 
  deleterec(Id) {
    this.postalService.deleterec(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getAllList();
      this.clearData();

    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }
  
  clearData() {
    this.dispatchReceiveDto.address = "";
    this.dispatchReceiveDto.date = "";
    this.dispatchReceiveDto.id = 0;
    this.dispatchReceiveDto.image = "";
    this.dispatchReceiveDto.note = "";
    this.dispatchReceiveDto.referenceNo = "";
    this.dispatchReceiveDto.toTitle = "";
    this.dispatchReceiveDto.isActive = "yes";
    this.dispatchReceiveDto.type ="";
    this.dispatchReceiveDto.fromTitle ="";
    this.isUpdate = false;
  }
}




