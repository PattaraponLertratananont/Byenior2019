import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-registed',
  templateUrl: './view-registed.component.html',
  styleUrls: ['./view-registed.component.css']
})
export class ViewRegistedComponent implements OnInit {
  
  students:DATA[]
  displayedColumns = ['id', 'name', 'stuid', 'degree'];
  dataSource = []
  count = 1

  constructor(private stuService : StudentService) { }

  ngOnInit() {
    this.stuService.readRegisted().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.data()['id'],
          stuid: e.payload.doc.data()['stuid'],
          degree: e.payload.doc.data()['degree'],
          name: e.payload.doc.data()['name'],
          status: e.payload.doc.data()['status'],
        };
      })
      this.dataSource = this.students
      console.log(this.dataSource)
    });
  }
}
export interface DATA {
  id: number;
  stuid: string;
  degree: string;
  name: string;
}