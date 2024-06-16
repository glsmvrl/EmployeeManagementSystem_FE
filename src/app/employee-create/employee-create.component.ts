import {Component} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
  }

  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
        console.log(data);
        this.goToEmployeeList();
      },
      error => console.log(error));
  }

  goToEmployeeList() {
  this.router.navigate(['employees'])
  }

  onSubmit() {
    this.saveEmployee();
  }
}
