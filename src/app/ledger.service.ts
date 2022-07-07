import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ValidBalancePipe } from './valid-balance.pipe';
import { SortRecordsPipe } from './sort-records.pipe';
import { RemoveDuplicatePipe } from './remove-duplicate.pipe';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  constructor(
    private httpClient: HttpClient, 
    private validBalance:ValidBalancePipe,
    private sortPipe:SortRecordsPipe,
    private duplicatePipe: RemoveDuplicatePipe
  ) { }

  async get_ledger(file_name) {  
    let data = await this.httpClient.get(`assets/${file_name}.json`).toPromise()
    let response = {
      valid: this.validBalance.transform(this.sortPipe.transform(this.duplicatePipe.transform(data))),
      invalid: this.validBalance.transform(this.sortPipe.transform(this.duplicatePipe.transform(data)), false),
    }
    return response
  }
}
