import { Component, OnInit } from '@angular/core';
import { Record } from '../model';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  records: Record[] =[];
  newRecord:Record = {
    description:"",
    type:"",
    amount:"",
    date:""
  };
  constructor() { }
  ngOnInit(): void {
  }
  addRecord(){

  }
  deleteRecord(){

  }
}
