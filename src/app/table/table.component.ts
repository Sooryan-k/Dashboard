import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ashok', weight: '245', symbol: '243'},
  {position: 2, name: 'Kripesh', weight: '238', symbol: '218'},
  {position: 3, name: 'Sooryan', weight: '230', symbol: '200'},
  {position: 4, name: 'Sujay', weight: '230', symbol: '199'},
  {position: 5, name: 'Amal', weight: '225', symbol: '180'},
  {position: 6, name: 'Vijesh', weight: '200', symbol: '145'},
  {position: 7, name: 'Raju', weight: '200', symbol: '140'},
  {position: 8, name: 'Lolan', weight: '200', symbol: '139'},
  {position: 9, name: 'Rahul', weight: '200', symbol: '115'},
  {position: 10, name: 'Raman', weight: '200', symbol: '78'},
];  
