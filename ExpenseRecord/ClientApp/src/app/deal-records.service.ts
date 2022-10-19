import { Injectable } from '@angular/core';
import { Record } from './model';

@Injectable({
  providedIn: 'root'
})
export class DealRecordsService {
  mockRecords:Record[]=[
    {
      description:'lunch',
      type:"meal",
      amount:"50",
      date:"20221010"
    },
    {
      description:'lunch2',
      type:"meal",
      amount:"50",
      date:"20221010"
    },
    {
      description:'lunch3',
      type:"meal",
      amount:"50",
      date:"20221010"
    },
  ]

  constructor() { }
  fetchRecords(){
    return this.mockRecords;
  }

  addRecord(newRecord:Record){
    this.mockRecords.unshift(newRecord);
  }

  deleteRecord(deletingRecord:Record){
    const targetIndex =this.mockRecords.findIndex(item=>item.description = deletingRecord.description);
    this.mockRecords.splice(targetIndex, 1);
  }
}
