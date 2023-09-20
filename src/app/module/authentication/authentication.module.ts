import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MobilePatternDirective} from 'src/app/directive/mobile-pattern.directive'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { LogInComponent } from './log-in/log-in.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoreService } from 'src/app/services/core.service';


@NgModule({
  declarations: [
    SignUpComponent,
    MobilePatternDirective,
    LogInComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    UserService,
    CoreService
  ]
})
export class AuthenticationModule { }
