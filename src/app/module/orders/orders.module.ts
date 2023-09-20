import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoreService } from 'src/app/services/core.service';
import { ConfirmationService } from 'src/app/services/confirmation.service';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers:[CoreService,ConfirmationService]
})
export class OrdersModule { }
