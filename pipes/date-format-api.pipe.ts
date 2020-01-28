import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatApi'
})
export class DateFormatApiPipe implements PipeTransform {

  constructor(public datepipe:DatePipe){}

  transform(value: any, ...args: any[]): any {
    var formatedDate;
    if(value && value!='')
    formatedDate=this.datepipe.transform(value, 'yyyy-MM-dd');
    else
    formatedDate=value; 
    return formatedDate;
    
    return null;
  }

}
