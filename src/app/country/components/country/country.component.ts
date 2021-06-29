import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  stateSum = [];
  summaryData = [];

  state: any;
  sum = [];
  dataSource = [];
  selectedValue: string;

  constructor(private shareservice: ShareService) {}

  ngOnInit(): void {
    this.stateSum = this.shareservice.stateSum;

    console.log(this.stateSum);

    this.summaryData = this.shareservice.totalSum();
    console.log(this.summaryData);
    this.sum = this.summaryData;
    this.dataSource = this.shareservice.data;
  }
  displayedColumns: string[] = [
    'State',
    'Active',
    'Confirmed',
    'Deceased',
    'Recovered',
    'GetDetails',
  ];

  changeAction(data: MatSelectChange) {
    var arr: any;
    var recover = 0;
    var deceased = 0;
    var confirm: number = 0;
    var active: number = 0;

    console.log(data.value);
    console.log(this.selectedValue);
    if (data.value.length == 0) {
      this.summaryData = this.sum;
    }

    for (var i = 0; i < data.value.length; i++) {
      this.summaryData = [];
      this.state = this.dataSource.find((x) => x.state == data.value[i]);

      console.log(this.state);

      this.state.data1.forEach((val) => {
        confirm = confirm + val.Confirmed;
        active = active + val.Active;
        recover = recover + val.Recovered;
        deceased = deceased + val.Deceased;

        console.log(recover);
        console.log(confirm);
        console.log(active);
        console.log(deceased);
      });
      arr = [
        {
          Active: active,
          Confirmed: confirm,
          Recovered: recover,
          Deceased: deceased,
        },
      ];

      console.log(arr);
      console.log(this.summaryData);

      this.summaryData = arr;
      console.log(this.summaryData);
    }
  }
}
