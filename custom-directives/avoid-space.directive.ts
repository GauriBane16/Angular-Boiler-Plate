import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAvoidSpace]'
})
export class AvoidSpaceDirective {
  regexStr = '[0-9]';
  alpha = '[a-zA-Z]'

  @Input() isAlphaNumeric: boolean;

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    return this.AvoidSpace(event);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    this.validateFields(event);
    // return false;
  }

  AvoidSpace(event) {
     console.log("event",event.keyCode)
    // debugger;
    // if (!(new RegExp(this.alpha).test(event.key)) && event.target.value.length == 0){
    //   return false;
    // }
    // if ((event.srcElement.name == "firstname" || event.srcElement.name == "middlename" || event.srcElement.name == "lastname" || event.srcElement.name == "email") && event.target.value.length != 0 && event.keyCode==46) {
    //   return true;
    // }
    if ((event.srcElement.name == "firstname" || event.srcElement.name == "middlename" || event.srcElement.name == "lastname" || event.srcElement.name == "email") && event.keyCode == 32) {
      return false;
    }
    if((event.srcElement.name == "firstname" || event.srcElement.name == "middlename" || event.srcElement.name == "lastname") && !(new RegExp(this.alpha).test(event.key))){
      return false;
    }
    if (event.target.value.length != 0 && event.target.value[event.target.value.length - 1] == ' ') {
      if (event.keyCode == 32)
        return false;
    }
    else if (event.keyCode == 32 && event.target.value.length == 0)
      return false;
    else
      return true;
  }

  validateFields(event) {
    setTimeout(() => {
      this.el.nativeElement.value = this.el.nativeElement.value.replace(/&/g, '');
      event.preventDefault();
    }, 1)
  }
}
