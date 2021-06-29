import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  dataSource: any;

  recover: number = 0;
  deceased: number = 0;
  confirm: number = 0;
  active: number = 0;
  @Input() summaryData=[];

  constructor(
    private shareservice: ShareService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    
    }
    
  }

