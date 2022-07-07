import { Component, OnInit } from '@angular/core';
import { LedgerService } from '../ledger.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  transactions;
  error_transactions;
  active_file;
  error;
  files = ["simple_ledger", "complicated_ledger", "duplicate_ledger"]
  constructor(private ledger:LedgerService) { }

  async ngOnInit() {
    let transactions = await this.ledger.get_ledger('simple_ledger')
    this.transactions = transactions
    this.active_file = 'simple_ledger'
  }

  async change_source(file_name){
    this.active_file = file_name
    let transactions = await this.ledger.get_ledger(file_name);
    this.transactions = transactions
  }

  accept_item(idx){
    
    let element = this.transactions.invalid[idx]
    let lastBalance = this.transactions.valid[this.transactions.valid.length - 1].balance
    
    if (lastBalance + element.amount == element.balance){
      this.transactions.valid.push(element)
      this.transactions.invalid.splice(idx,1)
    } else {
      this.error = "Can't accept this record"
    }
    
  }
}
