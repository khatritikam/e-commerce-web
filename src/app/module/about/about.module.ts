import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import {MatIconModule} from '@angular/material/icon';
import { LeadersComponent } from './leaders/leaders.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    CarouselComponent,
    LeadersComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatIconModule
  ]
})
export class AboutModule { }
