import { Pipe, PipeTransform } from '@angular/core';
import {CommonService} from './../_services/common.service';

@Pipe({
  name: 'getFilteredData'
})
export class GetFilteredDataPipe implements PipeTransform {
constructor(private commonService:CommonService){

}
  transform(value: any, ...args: any[]): any {
    // debugger;
    var data=[]
    if(this.commonService.loggedInUser.role_name=='Superadmin' ){
      value.forEach(element => {
        if(element.active_status){
          data.push(element);
        }
      });
      // console.log("data",data)
      return data;
    }
    else{
      data=value;
      return data;
    }
    //console.log("value",value)
   
  }

}
