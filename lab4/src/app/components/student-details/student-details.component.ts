import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent {
  students = [
    { name: "", age: 23, email: "", phone: '', address: '' },

    { name: "esraa", age: 23, email: "esraa@gmail.com", phone: '01113375563', address: 'Alexandria, Egypt' },
   
  ]
  selectedUser: any;
  id = 0
  constructor(route: ActivatedRoute) {
    this.id = +route.snapshot.params["id"];
    this.selectedUser = this.students[this.id]
    console.log(this.selectedUser);
  }
}
