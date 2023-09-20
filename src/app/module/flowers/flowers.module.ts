import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowersRoutingModule } from './flowers-routing.module';
import { FlowersComponent } from './flowers/flowers.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    FlowersComponent
  ],
  imports: [
    CommonModule,
    FlowersRoutingModule,
    CardModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers:[ProductService]
})
export class FlowersModule { }
