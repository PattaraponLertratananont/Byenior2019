import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-registed',
  templateUrl: './view-registed.component.html',
  styleUrls: ['./view-registed.component.css']
})
export class ViewRegistedComponent implements OnInit {
  
  students:DATA[]
  displayedColumns = ['name', 'stuid', 'degree'];
  dataSource = []
  count = 1
  total : number
  constructor(private stuService : StudentService) { }

  ngOnInit() {
    this.stuService.readRegisted().subscribe(data => {
      this.students = data.map(e => {
        return {
          stuid: e.payload.doc.data()['stuid'],
          degree: e.payload.doc.data()['degree'],
          name: e.payload.doc.data()['name'],
          status: e.payload.doc.data()['status'],
        };
      })
      this.dataSource = this.students
      this.total = this.students.length
    });
  }
}
export interface DATA {
  stuid: string;
  degree: string;
  name: string;
}