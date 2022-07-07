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
  files = ["simple_ledger", "complicated_ledger", "duplicate_ledger"]
  constructor(private ledger:LedgerService) { }

  async ngOnInit() {
    this.transactions = await this.ledger.get_ledger('simple_ledger')
    this.active_file = 'simple_ledger'
  }

  async change_source(file_name){
    this.active_file = file_name
    this.transactions = await this.ledger.get_ledger(file_name);
  }

}
