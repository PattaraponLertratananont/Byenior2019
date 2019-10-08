import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { csvInterface } from "../csv";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  stuid = new FormControl('',Validators.minLength(1))
  name = new FormControl('',Validators.minLength(1))
  selectedOption = new FormControl('');

  csvARR:any[]

  options = [
    { name: "ปี 1", value: 62 },
    { name: "ปี 2", value: 61 },
    { name: "ปี 3", value: 60 },
    { name: "ปี 4", value: 59 },
    { name: "พี่บัณฑิต", value: 58 }
  ]
  
  constructor(private studentService : StudentService) { }
  
  ngOnInit() {
  }

  addStudent(id:string,name:string,degree:string){
    var data = {
      stuid : id,
      name : name,
      degree : degree,
      status : false
    };
    this.studentService.addStudent(id,data)
    this.stuid.setValue('')
    this.name.setValue('')
    this.selectedOption.setValue('')
  }
  
  readCSV(files:FileList){
    if(files && files.length > 0) {
      let file : File = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        let csvSplitLine = csv.split(/\r\n|\n/)

        let csvArr = []
        let csvSplitByComma:string[]
        for (let i = 0; i < csvSplitLine.length; i++) {
          csvSplitByComma = (<string>csvSplitLine[i]).split(',');
          let C:csvInterface = new csvInterface();
          C.stuid =  csvSplitByComma[0].trim()
          C.name =  csvSplitByComma[1].trim()
          C.degree =  csvSplitByComma[2].trim()
          C.status = false
          csvArr.push(C)
        }
        this.csvARR = csvArr
      }
    }
  }

  addByCsv(){
    for (let i = 0; i < this.csvARR.length; i++) {
      var data = {
        stuid : this.csvARR[i]['stuid'],
        name : this.csvARR[i]['name'],
        degree : this.csvARR[i]['degree'],
        status : false
      };
      this.studentService.addStudent(this.csvARR[i]['stuid'],data)
    }
  }
}
