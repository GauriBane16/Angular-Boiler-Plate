import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getKeys'
})
export class GetKeysPipe implements PipeTransform {

  transform(value: any, type?: any): any {
    var keys = [];
    for (let key in value) {
      keys.push(key);
    }
    
    return keys;
  }

}
