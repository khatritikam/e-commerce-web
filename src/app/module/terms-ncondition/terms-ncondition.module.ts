import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsNConditionRoutingModule } from './terms-ncondition-routing.module';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';


@NgModule({
  declarations: [
    TermsAndConditionComponent
  ],
  imports: [
    CommonModule,
    TermsNConditionRoutingModule
  ]
})
export class TermsNConditionModule { }
