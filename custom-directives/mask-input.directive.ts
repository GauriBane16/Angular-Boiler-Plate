import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMaskInput]'
})
export class MaskInputDirective {

/**
 * @constructor
 * @param ngControl NgControler instance
 *  
 */
    constructor(public ngControl: NgControl) { }

/**
 * @Function onModelChange
 * @param event  
 */
    @HostListener('ngModelChange', ['$event'])
  
    onModelChange(event) {
     console.log('this.ngControl.name',this.ngControl.name)
     console.log('event in masking',event)
          if(this.ngControl.name=='vital-sign2')
          this.onInputChange(event, false);
          else
          this.onCustomInputChange(event, false);
    }

/**
 * @Function keydownBackspace
 * @param event 
 */
    @HostListener('keydown.backspace', ['$event'])
    keydownBackspace(event) {
      if(this.ngControl.name=='2')
      this.onInputChange(event.target.value, true);
      else
      this.onCustomInputChange(event.target.value, true);
    }
  
/**
 * @Function onCustomInputChange
 * @param event 
 * @param backspace 
 */
  onCustomInputChange(event, backspace){
    let newVal = event.replace(/\D/g, '');
    // if (backspace && newVal.length <= 5) {
    //   newVal = newVal.substring(0, newVal.length - 1);
    // }
    if (newVal.length === 0) {
      newVal = '';
    } 
  }


/**
 * @Function onInputChange
 * @param event 
 * @param backspace 
 */
    onInputChange(event, backspace) {
      let newVal = event.replace(/\D/g, '');
      if (backspace && newVal.length <= 5) {
        newVal = newVal.substring(0, newVal.length - 1);
      }
      if (newVal.length === 0) {
        newVal = '';
      } else if (newVal.length <= 3) {
        newVal = newVal.replace(/^(\d{0,3})/, '$1');
      } else if (newVal.length <= 5) {
        newVal = newVal.replace(/^(\d{0,3})(\d{0,2})/, '$1/$2');
      } 
      // else if (newVal.length <= 10) {
      //   newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) ($2)-$3');
      // } else {
      //   newVal = newVal.substring(0, 10);
      //   newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) ($2)-$3');
      // }
      this.ngControl.valueAccessor.writeValue(newVal);
    }


}

