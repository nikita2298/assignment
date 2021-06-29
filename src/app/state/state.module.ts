import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './components/state/state.component';
import { SharedModule } from '../shared/shared.module';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
//import { MatSelectModule } from '@angular/material/select';

//import { AppModule } from '../app.module';
// import { SummaryComponent } from '../common/components/summary/summary.component';
//import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StateComponent,
    PieChartComponent,
    //PieChartComponent,
   // SummaryComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    StateRoutingModule,
    MatSelectModule,
    //AppModule
    //SummaryComponent
   SharedModule
  ],
 // exports:[StateComponent]

 
})
export class StateModule { }
