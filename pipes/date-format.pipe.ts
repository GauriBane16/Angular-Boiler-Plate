import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatPipe'
})
export class DateFormatPipe implements PipeTransform {

  constructor(public datepipe:DatePipe){}

  transform(value: any, ...args: any[]): any {
    var formatedDate;
    if(value && value!='')
    // formatedDate=this.datepipe.transform(value, 'MMM dd, yyyy');
    formatedDate=new Date(value);
    else
    formatedDate=value; 
    return formatedDate;
  }

}
