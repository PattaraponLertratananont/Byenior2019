import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore:AngularFirestore){}

  readStudents(stuid:string) {
    return this.firestore.collection('student',ref => ref.where('stuid','==',stuid)).snapshotChanges();
  }
  readRegisted() {
    return this.firestore.collection('student',ref => ref.where('status','==',true)).snapshotChanges();
  }
  getCount() {
    return this.firestore.collection('count').doc('count').snapshotChanges();
  }
  updateCount(count:number){
    this.firestore.doc('count/count').update({count : count}).then((value)=>null,(err)=>null);
  }
  updateStudent(count:number, id:string){
    this.firestore.doc('student/'+id).update({status : true,id : count}).then((value)=>null,(err)=>null);
  }
  addStudent(id:string,data:any){
    this.firestore.collection('student').doc(id).set(data)
  }
}
