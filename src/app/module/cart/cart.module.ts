import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { ShippingComponent } from './shipping/shipping.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule,MatAccordion} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoreService } from 'src/app/services/core.service';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmOrderService } from './confirm-order.service';


@NgModule({
  declarations: [
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers:[
    CoreService,
    ConfirmOrderService
  ]

})
export class CartModule { }
