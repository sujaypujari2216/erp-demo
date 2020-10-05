import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { QuestionbankService } from './questionbank.service';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent implements OnInit {

  url = 'http://yamistha.cloudjiffy.net/api/question/';

  constructor(private datatableservice: DatatableService, private questionbankService: QuestionbankService,) { }

  question = [];
  questionDto = {
    "correct": "",
    "id": 0,
    "isActive": "yes",
    "optA": "",
    "optB": "",
    "optC": "",
    "optD": "",
    "optE": "",
    "question": ""

  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getquestionList();
  }

  getquestionList() {
    this.questionbankService.getquestionList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.question = content.map((key) => ({ ...key }));
      this.datatableservice.initTable(' question bank');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addque() {
    this.questionbankService.save(this.questionDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getquestionList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getqueById(queId) {
    this.questionbankService.getqueById(queId).subscribe((res: any) => {
    
      this.questionDto.correct = res.data.correct;
      this.questionDto.id = res.data.id;
      this.questionDto.isActive = res.data.isActive;
      this.questionDto.optA = res.data.optA;
      this.questionDto.optB = res.data.optB;
      this.questionDto.optC = res.data.optC;
      this.questionDto.optD = res.data.optD;
      this.questionDto.optE = res.data.optE;
      this.questionDto.question = res.data.question;


    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.questionDto;
  }
  setUpdateFileds(queId) {
    this.isUpdate = true;
    this.getqueById(queId);
  }
  updateque(queId) {
    this.questionbankService.updateque(this.questionDto, queId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getquestionList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteque(queId) {
    this.questionbankService.deleteque(queId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getquestionList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {

    this.questionDto.correct = "";
    this.questionDto.id = 0;
    this.questionDto.isActive = "yes";
    this.questionDto.optA = "";
    this.questionDto.optB = "";
    this.questionDto.optC = "";
    this.questionDto.optD = "";
    this.questionDto.optE = "";
    this.questionDto.question = "";
    this.isUpdate = false;
  }

}