import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { EmployeeService } from "../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;

  constructor(
    private employeesService: EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeesService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeesService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    }, error => console.error(error))
  }

  detailEmployee(id: number) {
    this.router.navigate(['detail-employee',id]);
  }

  protected readonly Number = Number;
}
