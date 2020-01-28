import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAvoidCharacter]'
})
export class AvoidCharacterDirective {
  regexStr = '[0-9]';
  alphaNum = '[a-zA-Z0-9]'

  @Input() isAlphaNumeric: boolean;

  constructor(private el: ElementRef) { }


  @HostListener('keypress', ['$event']) onKeyPress(event) {
    if (event.key.toLowerCase() == 'e' || event.code == 'Equal' || event.code == 'Minus')
      return false;
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    return false;
  }


}
