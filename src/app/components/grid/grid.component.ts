import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { gridData } from 'src/assets/data/grid.data';
import { IGridData } from './../../../assets/data/grid.data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  rowData: IGridData[] = gridData;
  colDefs: ColDef[] = [
    {field: 'number'},
    {field: 'string'},
    {field: 'date'},
  ];
  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
