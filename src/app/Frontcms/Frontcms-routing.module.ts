import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event/event.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NewsComponent } from './news/news.component';
import { MediaManagerComponent } from './media-manager/media-manager.component';
import { PagesComponent } from './pages/pages.component';
import { MenusComponent } from './menus/menus.component';
import { BannerImagesComponent } from './banner-images/banner-images.component';

const routes: Routes = [
  {path: 'event', component: EventComponent },
  {path: 'gallary', component: GallaryComponent },
  {path: 'news', component: NewsComponent },
  {path: 'media-manager', component: MediaManagerComponent },
  {path: 'pages', component: PagesComponent },
  {path: 'menus', component: MenusComponent },
  {path: 'banner-images', component: BannerImagesComponent },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FrontcmsRoutingModule { }
