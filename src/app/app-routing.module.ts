import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { StudentRoutingModule} from './students_Info/student-routing.module';
import { LibraryRoutingModule } from './Library/Library-routing.module';
import { DownloadRoutingModule } from './Download-Center/downloadcenter-routing.module';
import { CommunicateRoutingModule } from './Communicate/communicate-routing.module';
import { HostelRoutingModule } from './Hostel/hostel-routing.module';
import { InventoryRoutingModule } from './Inventory/inventory-routing.module';
import { HomeworkRoutingModule } from './Homework/homework-routing.module';
import { TransportRoutingModule } from './Transport/Transport-routing.module';
import { FrontcmsRoutingModule } from './Frontcms/Frontcms-routing.module';
import { FormsRoutingModule } from './feecollection/feecollection-routing.module';
import {  FrontofficeRoutingModule } from './Frontoffice/FrontofficeRoutingModule';
import { CertificateRoutingModule } from './certificate/certificate-routing.module';
import { ReportsRoutingModule } from './Reports/reports-routing.module';
import { HumanResourceRoutingModule } from './human_resource/human_resource-routing.module';









const routes: Routes = [];

@NgModule({
  // tslint:disable-next-line: max-line-length
  imports: [RouterModule.forRoot(routes, {useHash: true}), StudentRoutingModule, CommunicateRoutingModule, LibraryRoutingModule, HostelRoutingModule,
    // tslint:disable-next-line: max-line-length
    DownloadRoutingModule, InventoryRoutingModule, HomeworkRoutingModule, TransportRoutingModule, FrontcmsRoutingModule, FormsRoutingModule,
    FrontofficeRoutingModule, CertificateRoutingModule,
    ReportsRoutingModule, HumanResourceRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
