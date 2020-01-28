import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'agePipe'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    var html;
    var _DOB = moment(value);

    var days=moment().diff(_DOB , 'days');
    var years = moment().diff(_DOB , 'years');
    var months = moment().diff(_DOB , 'months');
    if(days<31 && days>0){
      html=days+(days==1?' day':' days');
    }else{
    html = years + ".";
    html += moment().subtract(years, 'years').diff(_DOB, 'months') + " years";
    }
    
    return html;

    // var today = new Date();
    // var birthDate = new Date(value);
    // var age = today.getFullYear() - birthDate.getFullYear();
    // var m = today.getMonth() - birthDate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //     age--;
    // }
    // return age;
    
  }

}
