import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileName'
})
export class FileNamePipe implements PipeTransform {
  data = {
    "simple_ledger": "Simple", 
    "complicated_ledger": "Complicated",
    "duplicate_ledger": "Duplicate"
  }
  transform(value) {
    
    return this.data[value];
  }

}
