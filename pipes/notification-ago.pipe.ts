import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notificationAgo'
})
export class NotificationAgoPipe implements PipeTransform {

  transform(collection: any[]): any {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if(!collection) {
        return null;
    }
 debugger;
    collection.forEach(current=> {
      current.data.forEach(element => {
        var distance=(new Date().getTime())-(new Date(element.time).getTime());
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 element.agoTime = (days!=0?(days + "d " ):(hours!=0?(hours + "h " ):(minutes!=0?(minutes + "m " ):(seconds!=0?(seconds + "s " ):''))));
      });
      current.agoTime=current.data[0].agoTime;
    });
 console.log("groupedCollection",collection)
    
    return collection;
}

}
