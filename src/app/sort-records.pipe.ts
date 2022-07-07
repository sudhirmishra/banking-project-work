import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortRecords'
})
export class SortRecordsPipe implements PipeTransform {

  transform(value) {
    if (!value){
      return value
    }
    let order_by_time = function(a, b) {
      return Date.parse(a.date) - Date.parse(b.date);
    }
    value.sort(order_by_time)
    return value;
  }

}
