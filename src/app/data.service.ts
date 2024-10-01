import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1: string[] = ["John Mathew", "JM011"] // Employee 1
  info2: string[] = ["Michael Johnes", "MJB32"] // Employee 2
  info3: string[] = ["Samantha Parkins", "SPLL3"] // Employee 3

  infoArray: string[][] = []

  getInfo1() {
    return this.info1
  }

  getInfo2() {
    return this.info2
  }

  getInfo3() {
    return this.info3
  }

  addInfo(info : string[]){
    this.infoArray.push(info)
  }

  getInfoById(id : number){
    if(id < this.infoArray.length){
      return this.infoArray[id]
    }

    return null
  }

  constructor() {
    this.addInfo(this.info1)
    this.addInfo(this.info2)
    this.addInfo(this.info3)
  }

  print(id : number){
    console.log("Id: ", id, ": ", this.getInfoById(id))
  }

}
