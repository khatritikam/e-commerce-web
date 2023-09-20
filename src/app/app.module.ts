import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidationMsgService } from './services/validation-msg.service';
import { MatCardModule } from '@angular/material/card';
import { ConfirmationService } from './services/confirmation.service';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
     
  ],
  providers: [ValidationMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
