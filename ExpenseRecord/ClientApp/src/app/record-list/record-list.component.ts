import { Component, OnInit } from '@angular/core';
import { Record } from '../model';
import { DealRecordsService } from '../deal-records.service';


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
  constructor(private dealRecordsService:DealRecordsService) { }
  ngOnInit(): void {
    this.getAllRecords();
  }
  getAllRecords(){
    this.records = this.dealRecordsService.fetchRecords();
  }
  addRecord(newRecord:Record){
    this.dealRecordsService.addRecord(newRecord);
    newRecord.description ="";
    newRecord.type="";
    newRecord.amount="";
    newRecord.date=""

  }
  deleteRecord(deletingRecord:any){
    this.dealRecordsService.deleteRecord(deletingRecord);
  

  }
}
