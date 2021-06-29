import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit,OnDestroy {
  recover: number = 0;
  deceased: number = 0;
  confirm: number = 0;
  active: number = 0;
  state: any;
  dataSource: any;
  dataByState: any;
  summaryData: any;
  selectedValue: any;
  paramsSubscription:Subscription;
  constructor(
    private shareservice: ShareService,
    private route: ActivatedRoute
  ) {}
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    
  }

  ngOnInit(): void {
    this.paramsSubscription=this.route.params.subscribe((data: Params) => {
      if (data) {
        console.log('---data-', data);
        this.dataByState = this.shareservice.getBystate(data.id);
        this.summaryData = this.shareservice.statewiseSum(data.id);
        console.log(this.summaryData);

        console.log(this.shareservice.getBystate(data.id));
      }
    });
    this.dataSource = this.shareservice.data;
  }
  changeAction(data) {
    var arr: any;

    console.log(data.value);
    console.log(data.value[0]);

    for (var i = 0; i < data.value.length; i++) {
      this.state = this.dataSource.find((x) => x.state == data.value[i]);
      console.log(this.state);

      this.state.data1.forEach((val) => {
        this.confirm = this.confirm + val.Confirmed;
        this.active = this.active + val.Active;
        this.recover = this.recover + val.Recovered;
        this.deceased = this.deceased + val.Deceased;

        console.log(this.recover);
        console.log(this.confirm);
        console.log(this.active);
        console.log(this.deceased);
      });
      arr = {
        
        Active: this.active,
        Confirmed: this.confirm,
        Recovered: this.recover,
        Deceased: this.deceased,
      };
      console.log(arr);
      this.summaryData = arr;
      console.log(this.summaryData);
    }
  }
  displayedColumns: string[] = [
    'District',
    'Active',
    'Confirmed',
    'Deceased',
    'Recovered',
  ];
}
