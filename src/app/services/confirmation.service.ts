import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/card/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

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
