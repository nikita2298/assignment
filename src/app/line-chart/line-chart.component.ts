import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  baseConfig: Chart.ChartConfiguration = {
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      scales: {
        xAxes: [{ display: true }],
        yAxes: [{ display: true }],
      },
    },
  };
  lineData = [];
  dataSource = [];

  options: any;

  constructor(private shareservice: ShareService) {
    this.lineData = this.shareservice.stateSum;
    console.log(this.lineData);

    this.options = {
      autoSize: true,
      title: { text: 'Covid Cases' },
      data: this.lineData,
      series: [
        {
          xKey: 'State',
          yKey: 'Active',
          yName: 'Active',
        },
        {
          xKey: 'State',
          yKey: 'Confirmed',
          yName: 'Confirmed',
        },
        {
          xKey: 'State',
          yKey: 'Deceased',
          yName: 'Deceased',
        },
      ],
    };
  }

  ngOnInit(): void {}
}
