import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitsComponent } from './fruits/fruits.component';
import { MatInputModule } from '@angular/material/input';
import { CardModule } from 'src/app/shared/card/card.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';



@NgModule({
  declarations: [
    FruitsComponent
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    MatInputModule,
    CardModule,
    HttpClientModule
  ],
  providers:[ProductService]
  
})
export class FruitsModule { }
