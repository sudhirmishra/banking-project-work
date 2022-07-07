import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicate'
})
export class RemoveDuplicatePipe implements PipeTransform {

  transform(value) {
    if (!value){
      return value
    }
    let filter_duplicate = function (value, index, self){
        return index === self.findIndex((t) => (
            t.activity_id === value.activity_id
        ))
    }
    return value.filter(filter_duplicate);
  }

}
