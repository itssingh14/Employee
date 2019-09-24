import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    myemployee;
    employee = [
        {id:1,name:'Ayush',dept:'CSE'},
        {id:2,name:'Raj',dept:'CSE'},
        {id:3,name:'Singh',dept:'CSE'}
      ]
      constructor(){}
      getEmployee(){
          return this.employee;
      }
      setEmployee(eid, ename, edept){
        this.myemployee = {
            id : null,
            name : null,
            dept : null
          }
        this.myemployee.id = eid;
        this.myemployee.name = ename;
        this.myemployee.dept = edept;
        this.employee.push(this.myemployee);
      }
}