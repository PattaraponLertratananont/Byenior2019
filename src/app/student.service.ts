import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: AngularFirestore) { }

  readAllStudents() {
    return this.firestore.collection('student').snapshotChanges();
  }
  readStudents(stuid: string) {
    return this.firestore.collection('student', ref => ref.where('stuid', '==', stuid)).snapshotChanges();
  }
  readRegisted() {
    return this.firestore.collection('student', ref => ref.where('status', '==', true)).snapshotChanges();
  }
  readRegistedRandom(stuid: string) {
    return this.firestore.collection('student', ref => ref.where('status', '==', true).where('stuid', '==', stuid)).snapshotChanges();
  }
  updateStudent(id: string) {
    this.firestore.doc('student/' + id).update({ status: true }).then((value) => null, (err) => null);
  }
  removeFormRandom(id: string) {
    this.firestore.doc('student/' + id).update({ status: false });
  }
  addStudent(id: string, data: any) {
    this.firestore.collection('student').doc(id).set(data)
  }
}
