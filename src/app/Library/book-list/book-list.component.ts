import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AddbookService } from './addbook.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/api/book`;


  books = [];
  Dto = {
    "author": "",
    "avaliable": 0,
    "bookNo": "",
    "bookTitle": "",
    "description": "",
    "id": 0,
    "isActive": "yes",
    "isbnNo": "",
    "perunitcost": 0,
    "postdate": "",
    "publish": "",
    "qty": 0,
    "rackNo": "",
    "subject": ""
  };

  isUpdate: boolean = false;
  constructor(private addbookService: AddbookService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.getbookList();
  }

  getbookList() {
    this.addbookService.getbookList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.books = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('books');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addbook() {
    this.addbookService.save(this.Dto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getbookList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getbookById(bookId) {
    this.addbookService.getbookById(bookId).subscribe((res: any) => {
      this.Dto.author = res.data.author;
      this.Dto.avaliable = res.data.avaliable;
      this.Dto.bookNo = res.data.bookNo;
      this.Dto.isActive = res.data.isActive;
      this.Dto.bookTitle = res.data.bookTitle;
      this.Dto.description = res.data.description;
      this.Dto.id = res.data.id;
      this.Dto.isbnNo = res.data.isbnNo;
      this.Dto.perunitcost = res.data.perunitcost;
      this.Dto.postdate = res.data.postdate;
      this.Dto.publish = res.data.publish;
      this.Dto.qty = res.data.qty;
      this.Dto.rackNo = res.data.rackNo;
      this.Dto.subject = res.data.subject;

      // console.log(this.Dto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.Dto;
  }
  setUpdateFileds(bookId) {
    this.isUpdate = true;
    this.getbookById(bookId);
  }
  updatebook(bookId) {

    this.addbookService.updatebook(this.Dto, bookId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getbookList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletebook(bookId) {
    this.addbookService.deletebook(bookId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getbookList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.Dto.author = "";
    this.Dto.avaliable = 0;
    this.Dto.bookNo = "";
    this.Dto.isActive = "yes";
    this.Dto.bookTitle = "";
    this.Dto.description = "";
    this.Dto.id = 0;
    this.Dto.isbnNo = "";
    this.Dto.perunitcost = 0;
    this.Dto.postdate = "";
    this.Dto.publish = "";
    this.Dto.qty = 0;
    this.Dto.rackNo = "";
    this.Dto.subject = "";
    this.isUpdate = false;
  }
}