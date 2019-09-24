import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private employee : EmployeeService) { }
  ngOnInit() {
    this.emp_det = this.employee.getEmployee();
  }
  emp_det = [];
}
