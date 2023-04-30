import { Component } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styles: []
})
export class StudentsTableComponent {

  students = [
    { name: "esraa", age: 23, email: "esraa@gmail.com" },

  ]

}
