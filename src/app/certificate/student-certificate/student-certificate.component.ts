import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { StudcertificateService} from './studcertificate.service';

@Component({
  selector: 'app-student-certificate',
  templateUrl: './student-certificate.component.html',
  styleUrls: ['./student-certificate.component.css']
})
export class StudentCertificateComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/certificate/`;

  certificate = [];
  certificateDto = 
    {
      'backgroundImage': '',
      'centerFooter': '',
      'centerHeader': '',
      'certificateName': '',
      'certificateText': '',
      'contentHeight': 0,
      'contentWidth': 0,
      'createdFor': 0,
      'enableImageHeight': 0,
      'enableStudentImage': 0,
      'footerHeight': 0,
      'headerHeight': 0,
      'id': 0,
      'isActive': 'yes',
      'leftFooter': '',
      'leftHeader': '',
      'rightFooter': '',
      'rightHeader': '',
      'status': 0
    }
  isUpdate: boolean = false;
  
  // purposes: any;

  constructor(private studcertificateService: StudcertificateService,
    private datatableservice: DatatableService,

  ) { }

  ngOnInit(): void {
    this.getcertificateList();
  }

   getcertificateList() {
    this.studcertificateService.getcertificateList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.certificate = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Expenses');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  addcer() {
    this.studcertificateService.save(this.certificateDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getcertificateList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }
  getBycerId(cerId) {
    this.studcertificateService.getBycerId(cerId).subscribe((res: any) => {
      this.certificateDto.backgroundImage = res.data.backgroundImage;
      this.certificateDto.id = res.data.id;
      this.certificateDto.isActive = res.data.isActive;
      this.certificateDto.centerFooter = res.data.centerFooter;
      this.certificateDto.centerHeader = res.data.centerHeader;
      this.certificateDto.certificateName = res.data.certificateName;
      this.certificateDto.certificateText = res.data.certificateText;
      this.certificateDto.contentHeight = res.data.contentHeight;
      this.certificateDto.contentWidth = res.data.contentWidth;
      this.certificateDto.createdFor = res.data.createdFor;
      this.certificateDto.enableImageHeight = res.data.enableImageHeight;
      this.certificateDto.footerHeight = res.data.footerHeight;
      this.certificateDto.headerHeight = res.data.headerHeight;
      this.certificateDto.leftFooter = res.data.leftFooter;
      this.certificateDto.leftHeader = res.data.leftHeader;
      this.certificateDto.rightFooter = res.data.rightFooter;
      this.certificateDto.rightHeader = res.data.rightHeader;
      this.certificateDto.status = res.data.status;


      console.log(this.certificateDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.certificateDto;
  }
  setUpdateFileds(cerId) {
    this.isUpdate = true;
    this.getBycerId(cerId);
  } 

  updatecer(cerId) {

    this.studcertificateService.updatecer(this.certificateDto, cerId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getcertificateList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });
  }

  deletecer(cerId) {
    this.studcertificateService.deletecer(cerId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getcertificateList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }
  clearData() {
    this.certificateDto.backgroundImage = "";
    this.certificateDto.id = 0
    this.certificateDto.isActive = "yes";
    this.certificateDto.centerFooter = "";
    this.certificateDto.centerHeader = "";
    this.certificateDto.certificateName = "";
    this.certificateDto.certificateText = "";
    this.certificateDto.contentHeight = 0;
    this.certificateDto.contentWidth = 0;
    this.certificateDto.createdFor = 0;
    this.certificateDto.enableImageHeight = 0;
    this.certificateDto.enableStudentImage = 0;
    this.certificateDto.footerHeight = 0;
    this.certificateDto.headerHeight = 0;
    this.certificateDto.leftFooter = "";
    this.certificateDto.leftHeader = "";
    this.certificateDto.rightFooter = "";
    this.certificateDto.rightHeader = "";
    this.certificateDto.status = 0;
    this.isUpdate = false;
  }
}
