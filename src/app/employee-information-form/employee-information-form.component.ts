import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataService} from "../data.service";

@Component({
  selector: 'app-employee-information-form',
  templateUrl: './employee-information-form.component.html',
  styleUrls: ['./employee-information-form.component.css'],
  providers: []
})
export class EmployeeInformationFormComponent {

  createEmployee(employeeInfoForm : NgForm){
    console.log("Employee info: ", "Employee Name: ", employeeInfoForm.controls["employeeName"].value, " Employee Id: ", employeeInfoForm.controls["employeeId"].value, " please query database for confirmation.")
    // Create employee object in database / employee service

    let empInfo : string[] = [employeeInfoForm.controls["employeeName"].value, employeeInfoForm.controls["employeeId"].value]
    this.dservice.addInfo([employeeInfoForm.controls["employeeName"].value, employeeInfoForm.controls["employeeId"].value])
  }

  constructor(private dservice : DataService){

  }

}
