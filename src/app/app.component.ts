import { Component, setTestabilityGetter } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private employee : EmployeeService){

  }
  title = 'emp';
  id
  name
  dept
  
  ad(){ 
    this.employee.setEmployee(this.id,this.name,this.dept);
  }
}
