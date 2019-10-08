import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  pattern = /([0-9]?[0-9]?[0-9][\s-]?[0-9]{9}|[0-9][\s-]?[0-9]{9}|[0-9]{9}[\s-]?[0-9]{9})$/
  stuid = new FormControl('', [
    Validators.pattern(this.pattern),
    Validators.minLength(10)
  ]);
  students : any[]
  success = ""
  count = 0;
  
  constructor(
    private stuService: StudentService,
    private router: Router
    ) { }
  
  ngOnInit(){
  }

  removeMesg(){
    this.success = '';
  }
  
  GetRecord() {
    this.stuService.readStudents(this.stuid.value).subscribe(data => {
      if(data.length > 0){
        this.students = data.map(e => {
          return {
            id: e.payload.doc.id,
            stuid: e.payload.doc.data()['stuid'],
            degree: e.payload.doc.data()['degree'],
            name: e.payload.doc.data()['name'],
            status: e.payload.doc.data()['status'],
          };
        })
        this.success = 'ยินดีต้อนรับ คุณ' + this.students[0].name;
        this.stuid.setValue('');
        this.stuid.disable();
        this.router.navigate(['/confirm',{name: this.students[0].name, stuid: this.students[0].stuid, degree: this.students[0].degree}])
      }else{
        this.success = 'ไม่มีนักศึกษาในระบบ'
        this.stuid.setValue('');
      }
      console.log(this.students)
    });
  }
  UpdateRecord(stuid:string) {
    this.stuService.getCount().subscribe(
      (data) =>{
        this.count = data.payload.data()['count']
        this.count = this.count +1;
        console.log('count', this.count);
    });
    this.Update(stuid)
  }
  Update(stuid:string){
    this.stuService.updateStudent(this.count, stuid);
    this.stuService.updateCount(this.count);
  }
}
