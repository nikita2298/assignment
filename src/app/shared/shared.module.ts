import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from '../common/components/summary/summary.component';
import { CountryComponent } from '../country/components/country/country.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from '../common/components/table/table.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MatSelectModule } from '@angular/material/select';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    SummaryComponent,
    CountryComponent,
    TableComponent,
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    MatSortModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    AgChartsAngularModule,
    MatCardModule,
    ChartsModule,
    MatSelectModule,
  ],
  exports: [SummaryComponent, CountryComponent, TableComponent],
})
export class SharedModule {}
