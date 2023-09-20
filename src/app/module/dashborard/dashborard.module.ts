import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashborardRoutingModule } from './dashborard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VegetablesComponent } from '../vegetables/vegetables/vegetables.component';
import { VegetablesModule } from '../vegetables/vegetables.module';
import { CardModule } from 'src/app/shared/card/card.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashborardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CardModule,
  ]
})
export class DashborardModule { }
