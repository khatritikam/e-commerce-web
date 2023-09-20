import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationMsgService } from 'src/app/services/validation-msg.service'
import { mustMatch } from 'src/app/validetors/passwordmatch';
import { UserService } from './../service/user.service'
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CoreService } from 'src/app/services/core.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;

  signInForm: FormGroup;
  public validationMsg: any;
  


  constructor(
    private validationMsgService: ValidationMsgService,
    private userService: UserService ,
    private router:Router,
    private snackBarService: CoreService
  ) { }

  ngOnInit(): void {
    this.createFormGroup()
    this.validationMsgService.setBranchName('signUp')
    this.validationMsg = this.validationMsgService.getControlMsg('signIn')
  }

  createFormGroup() {
    this.signInForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.minLength(6), Validators.pattern('[a-zA-Z ]*')]),
      mobileNumber: new FormControl(null, [Validators.required, Validators.pattern(/^(?:\d{3}|\(\d{3}\))([ ])\d{3}\1\d{4}$/g)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required])
    }, { validators: mustMatch("password", "confirmPassword") })
  }

  onSignUp(){
    if(this.signInForm.valid){
      this.userService.adduser(this.signInForm.value).subscribe({
        next: (val:any) =>{
         this.signInForm.reset()
         this.snackBarService.openSnackBar('Sing In Successfully','Ok')
         this.router.navigateByUrl('/auth/login')
        },
          error:(err:any) =>{
          console.log(err)
        }
      })
    }
    
  }
}
