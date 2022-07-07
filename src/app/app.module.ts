import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoveDuplicatePipe } from './remove-duplicate.pipe';
import { SortRecordsPipe } from './sort-records.pipe';
import { TxDescriptionPipe } from './tx-description.pipe';
import { FileNamePipe } from './file-name.pipe';
import { ValidBalancePipe } from './valid-balance.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    DashboardComponent,
    RemoveDuplicatePipe,
    SortRecordsPipe,
    TxDescriptionPipe,
    FileNamePipe,
    ValidBalancePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ValidBalancePipe, SortRecordsPipe, RemoveDuplicatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
