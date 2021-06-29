import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { ChartsModule } from 'ng2-charts';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatTableModule,
    MatCardModule,
    SharedModule
    

  ],
  //exports:[CountryComponent,SummaryComponent],

  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
