import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ShareService } from 'src/app/share.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData:any;
  @Input() displayedColumns=[];
  
  constructor(private shareservice: ShareService) {}

  sortBy: any;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.tableData = new MatTableDataSource(this.tableData);
    console.log(this.tableData);
  }
  ngAfterViewInit() {
    this.tableData.sort = this.sort;
    console.log(this.tableData.sort);
  }
}
