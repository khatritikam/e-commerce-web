import { FormGroup } from "@angular/forms"
export function mustMatch(password:string, confirmPassword:string){
    return (form: FormGroup) => {
        const _password = form.controls[password]
        const confirm_password = form.controls[confirmPassword]
            // console.log(passwordValue)
            // console.log(confirmPasswordValue)
         if(confirm_password.errors && !confirm_password.errors['mustMatch']){
           // console.log(confirm_password.errors)
            return null;
         }   
        if(_password.value !== confirm_password.value){
            confirm_password.setErrors({passwordMacth:true})
            
        }else{
            confirm_password.setErrors(null)
        }
      //  console.log(confirm_password.errors)
    }}

