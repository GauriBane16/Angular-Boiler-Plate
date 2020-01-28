import { Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '../_services/common.service';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  constructor(public commonService:CommonService){

  }

  transform(collection: any[], property: any): any {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if(!collection) {
        return null;
    }

    const groupedCollection = collection.reduce((previous, current)=> {
     
       var distance=(new Date().getTime())-(new Date(current.time).getTime());
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
current.agoTime = (days!=0?(days + "d " ):(hours!=0?(hours + "h " ):(minutes!=0?(minutes + "m " ):(seconds!=0?(seconds + "s " ):''))));
        if(!previous[current[property]]) {
            previous[current[property]] = [current];
        } else {

            previous[current[property]].push(current);
        }

        return previous;
    }, {});

    console.log("groupedCollection",groupedCollection)

    // this will return an array of objects, each object containing a group of objects
    var data=Object.keys(groupedCollection).map(key => (
      { key, 
        value: groupedCollection[key],source_info: groupedCollection[key][0].source_info,
        source_info_id:groupedCollection[key][0].source_info.id,
        source_info_name:groupedCollection[key][0].source_info.name,
        source_info_profile_image:groupedCollection[key][0].source_info.profile_image,
        text:'You have some new notifications.',
        agoTime:groupedCollection[key][0].agoTime, 
        is_seen:groupedCollection[key][0].is_seen }));
    console.log("data",data)
    var unseen_count=0;
    data.forEach(element => {
      if(!element.is_seen)
      unseen_count++;
    });
    this.commonService.loggedInUser.unseen_count=unseen_count;
    this.commonService.setDataInLocalStorageAndObservable(
      "userData",
      this.commonService.loggedInUser
    );
    return data;
}
 

}

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({name: 'groupBy'})
// export class GroupByPipe implements PipeTransform {
//     transform(collection: Array, property: string): Array {
//         // prevents the application from breaking if the array of objects doesn't exist yet
//         if(!collection) {
//             return null;
//         }

//         const groupedCollection = collection.reduce((previous, current)=> {
//             if(!previous[current[property]]) {
//                 previous[current[property]] = [current];
//             } else {
//                 previous[current[property]].push(current);
//             }

//             return previous;
//         }, {});

//         // this will return an array of objects, each object containing a group of objects
//         return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
//     }
// }
