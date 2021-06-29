import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { ShareService } from 'src/app/share.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  vaccinated = [];
  dataSource: any;
  list1 = [];
  list2 = [];
  state: string;

  constructor(
    private shareservice: ShareService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      console.log(data);
      this.state = data.id;
    });
    this.dataSource = this.shareservice.data;
    this.dataSource.forEach((element) => {});
    this.list1 = this.dataSource.find((array1) => {
      if (this.state == array1.state) {
        console.log(array1.data1);
        this.list2 = array1.data1;

        return array1.data1;
      }
    });
    console.log(this.list1);

    this.list2.forEach((val) => {
      this.barChartLables.push(val.District);
      this.vaccinated.push(val.Vaccinated);
    });
    console.log(this.barChartLables);
    console.log(this.vaccinated);

    
  }
  public barChartOptions: ChartOptions = { responsive: true };
  public barChartLables: Label[] = [];
  public barChartType: ChartType = 'pie';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    {
      data: ([] = this.vaccinated),
      label: 'Cases',
      backgroundColor: ['#0074D9', '#FF4136', '#2ECC40', '#FF851B'],
    },
  ];
}
