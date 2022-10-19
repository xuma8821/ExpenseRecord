import { Injectable } from '@angular/core';
import { Record } from './model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DealRecordsService {
  // mockRecords:Record[]=[
  //   {
  //     description:'lunch',
  //     type:"meal",
  //     amount:"50",
  //     date:"20221010"
  //   },
  //   {
  //     description:'lunch2',
  //     type:"meal",
  //     amount:"50",
  //     date:"20221010"
  //   },
  //   {
  //     description:'lunch3',
  //     type:"meal",
  //     amount:"50",
  //     date:"20221010"
  //   },
  // ]

  // constructor() { }
  // fetchRecords(){
  //   return this.mockRecords;
  // }

  // addRecord(newRecord:Record){
  //   this.mockRecords.unshift(newRecord);
  // }

  // deleteRecord(deletingRecord:Record){
  //   const targetIndex =this.mockRecords.findIndex(item=>item.description = deletingRecord.description);
  //   this.mockRecords.splice(targetIndex, 1);
  // }
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
