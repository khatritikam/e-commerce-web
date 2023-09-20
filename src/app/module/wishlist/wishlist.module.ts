import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoreService } from 'src/app/services/core.service';


@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    MatSnackBarModule
  ],
  providers:[CoreService]
})
export class WishlistModule { }
