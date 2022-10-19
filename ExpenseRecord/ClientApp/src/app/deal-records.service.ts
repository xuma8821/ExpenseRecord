import { Injectable } from '@angular/core';
import { Record } from './model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DealRecordsService {
  mockRecords:Record[]=[];

  constructor() { }
  fetchRecords(){
    this.mockRecords = this.readData();
    return this.mockRecords;
  }

  addRecord(newRecord:Record){
    const targetRecord = {
      ...newRecord,
      id: uuidv4()
    };
    this.mockRecords.unshift(targetRecord);
    this.modifyData(this.mockRecords);
  }

  deleteRecord(deletingRecord:Record){
    const targetIndex =this.mockRecords.findIndex(item=>item.id = deletingRecord.id);
    this.mockRecords.splice(targetIndex, 1);
    this.modifyData(this.mockRecords);
  }
  readData(){
    const resString =  localStorage.getItem("expenseRecords");
    return resString?JSON.parse(resString):[]
  }
  modifyData(records:Record[]){
    localStorage.setItem("expenseRecords", JSON.stringify(records));
  }
}
