import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  confirmationData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any
  ){
    this.confirmationData = data

  }

  // confirmDelete(){
  //     this.OrderService.cancelOrder(this.data.id, this.data.currentOrder).subscribe(()=>{
  //     this.dialogRef.close()
  //   })
  // }
}
