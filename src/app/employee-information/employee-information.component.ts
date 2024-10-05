import {Component} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css'],
  providers: []
})
export class EmployeeInformationComponent {
  infoReceived1: string[] = []
  infoReceived2: string[] = []
  infoReceived3: string[] = []

  constructor(private dservice: DataService) {

  }

  infoReceivedArray: string[][] = []

  getInfoFromService1() {
    this.infoReceived1 = this.dservice.getInfo1()
    this.addInfo(this.infoReceived1)
  }

  getInfoFromService2() {
    this.infoReceived2 = this.dservice.getInfo2()
    this.addInfo(this.infoReceived2)
  }

  getInfoFromService3() {
    this.infoReceived3 = this.dservice.getInfo3()
    this.addInfo(this.infoReceived3)
  }

  getInfoFromServiceWithId(id: number): string[] | null {
    let info = this.dservice.getInfoById(id)

    if (info) {
      this.addInfo(info)
      return info
    }

    return null
  }

  addInfo(info: string[]): string[] {
    this.infoReceivedArray.push(info)

    return info
  }

  requestInfoFromDataService() {
    // DEBUG code below
    let nEmp = this.infoReceivedArray.length
    console.log(nEmp)
    console.log(this.getInfoFromServiceWithId(nEmp))

    for (let i = this.infoReceivedArray.length, info = this.getInfoFromServiceWithId(i); info; i++, info = this.getInfoFromServiceWithId(i)) {
      console.log(info)
    }
  }

  getInfoById(id: number) {
    return this.infoReceivedArray[id]
  }
}
