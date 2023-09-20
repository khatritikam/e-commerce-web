import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/card/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmOrderService {

  constructor(
    private dialog: MatDialog,
  
  ) { }

  opneModel(title:any, content:any){
    return this.dialog.open(
      ConfirmationDialogComponent,{
        data:{
          title,
          content
        }})
  }
}
