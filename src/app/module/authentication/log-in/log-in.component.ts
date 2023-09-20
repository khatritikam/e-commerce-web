import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationMsgService } from 'src/app/services/validation-msg.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  hide = true;
  loginform: FormGroup;

  constructor(
    private validationMsgService: ValidationMsgService,
    private userService: UserService ,
    private router:Router,
    private snackBarService: CoreService
  ) { }

  ngOnInit(): void {
    this.createFormGroup()
  }

  createFormGroup() {
    this.loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
       })
  }

  logIn(){
    if(this.loginform.valid){
      this.userService.getuser().subscribe({
        next: (val:any) =>{
          //console.log(val)
          const user = val.find((a:any)=>{
            //console.log(a)
            return a.email === this.loginform.value.email && a.password === this.loginform.value.password
          })
          if(user){
            this.loginform.reset()
            this.snackBarService.openSnackBar('Loged In successfully','Ok')
            this.router.navigate(['dashboard'])
          }else{
            this.snackBarService.openSnackBar('User Not Fund','Ok')
          }
        }, error:(err:any) =>{
          console.log(err)
        }
      })
    }
   
  }
  
}
