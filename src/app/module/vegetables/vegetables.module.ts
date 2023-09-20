import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegetablesRoutingModule } from './vegetables-routing.module';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';


@NgModule({
  declarations: [
    VegetablesComponent
  ],
  imports: [
    CommonModule,
    VegetablesRoutingModule,
    CardModule,
    HttpClientModule
  ],
  providers:[ProductService]
})
export class VegetablesModule { }
