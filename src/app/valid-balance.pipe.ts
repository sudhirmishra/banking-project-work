import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validBalance'
})
export class ValidBalancePipe implements PipeTransform {
  
  transform(value, valid=true) {
    if (!value){
      return value
    }
    function check_for_valid_transaction(element, balance){
      if(
          element.hasOwnProperty('source') &&
          element.hasOwnProperty('destination') &&
          element.hasOwnProperty('balance') &&
          element.hasOwnProperty('amount') &&
          balance + element.amount == element.balance
      ){
            return true
      }
      return false
    }
    let validated = []
    let error_records = []
    let balance = 0
    value.forEach(element => {
        // does it have source and destination
        if (check_for_valid_transaction(element, balance)){
            
            balance = element.balance
            validated.push(element)            
        }else{
            error_records.push(element)
        }
    });
    let filtered;
    if(valid){
      filtered = validated
    }else{
      filtered = error_records
    }
    return filtered;
  }
}
