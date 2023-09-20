import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: 'input[appMobilePattern]'
})
export class MobilePatternDirective {
  private regex = new RegExp( /^(?:\d{3}|\(\d{3}\))([-\.])\d{3}\1\d{4}$/g)
  constructor(
    private el:ElementRef
  ) {}
  
  //  @HostListener('keydown',['$event'])
  //   onKeyChange(event:any){
  //   let inputValue = this.el.nativeElement.value.concat(event.key)
  //   //console.log(!this.regex.test(event.target.value))    
  //   console.log(!inputValue.match(this.regex))
  //       if(!this.regex.test(inputValue)){
  //         event.preventDefault()
  //       }
  //       return
  //   }
}
