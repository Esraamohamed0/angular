import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  students: { name: string; age: number }[] = [];
  onAddStudent(student: any) {
    this.students.push(student);
  }
}
