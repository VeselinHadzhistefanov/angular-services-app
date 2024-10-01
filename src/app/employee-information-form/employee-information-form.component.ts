import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataService} from "../data.service";

@Component({
  selector: 'app-employee-information-form',
  templateUrl: './employee-information-form.component.html',
  styleUrls: ['./employee-information-form.component.css'],
  providers: [DataService]
})
export class EmployeeInformationFormComponent {

  createEmployee(employeeInfo : NgForm){
    console.log("Employee info: ", "Employee Name: ", employeeInfo.controls["employeeName"].value, " Employee Id: ", employeeInfo.controls["employeeId"].value, " please query database for confirmation.")
    // Create employee object in database / employee service

    this.dservice.addInfo([employeeInfo.controls["employeeName"].value, employeeInfo.controls["employeeId"].value])
  }

  constructor(private dservice : DataService){

  }

}
