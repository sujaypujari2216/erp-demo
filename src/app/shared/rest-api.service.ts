import { Injectable } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject} from 'rxjs';
import {SubjectsComponent} from './academics.model';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

 
  constructor(private http:HttpClient,private datatableservice:DatatableService) { }
}
