import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  result: string = "Lucky ID"
  resultPrepare: string
  name: string = "ชื่อ-นามสกุล"
  fakeing: Boolean = false;
  idList: any[];

  constructor(
    private stuService: StudentService
  ) { }

  ngOnInit() {

  }

  delay(ms: number) {
    return new Promise(re => setTimeout(() => re(), ms));
  };

  async randomList() {
    this.stuService.readRegisted().subscribe(data => {
      this.idList = data.map(e => {
        return {
          stuid: e.payload.doc.data()['stuid'],
          name: e.payload.doc.data()['name'],
        };
      });
    });
    this.randomFake();
  };

  async randomFake() {
    let i = 0
    for (i = 0; i < 50; i++) {
      await this.delay(100);
      var a1 = ((Math.floor(Math.random() * 5) + 58).toString()); // หลักที่ 1-2 (ชั้นปี)
      var a2 = "5"; // หลักที่ 3
      var a3 = ((Math.floor(Math.random() * 5) + 21).toString()); // หลักที่ 4-5 (สาขา)
      var a4 = '00'; // หลักที่ 6-7
      var a5 = (Math.floor(Math.random() * 9).toString()); // หลักที่ 8 ()
      var a6 = (Math.floor(Math.random() * 9).toString()); // หลักที่ 8 ()
      var a7 = (Math.floor(Math.random() * 9).toString()); // หลักที่ 8 ()
      this.result = a1.concat(a2.concat(a3.concat(a4.concat(a5.concat(a6.concat(a7))))))
      this.name = "ชื่อ-นามสกุล"
      if (i == 49) {
        this.showID();
      }
    }
  };

  showID() {
    var random = Math.floor(Math.random() * this.idList.length - 1) + 1;
    this.result = this.idList[random]['stuid'];
    this.name = this.idList[random]['name'];
    this.stuService.removeFormRandom(this.result)
  };
}
