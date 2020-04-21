import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  name : string
  stuid : string
  degree : string
  major : string
  srcImg : string
  txtwelcome = 'ยินดีต้อนรับ'
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.name=param['name'];
      this.stuid=param['stuid'];
      this.degree=param['degree'];
    })
    if(this.stuid.slice(0,2) == "58"){
      this.txtwelcome = 'ยินดีต้อนรับพี่บัณฑิต'
    }
    this.major = this.stuid.slice(3,5)
    if(this.major == "21"){
      this.major = 'IT'
      this.srcImg = '../../assets/IT.png'
    }else if(this.major == "22"){
      this.major = 'IE'
      this.srcImg = '../../assets/IE.png'
    }else if(this.major == "23"){
      this.major = 'CPE'
      this.srcImg = '../../assets/CPE.png'
    }else if(this.major == "24"){
      this.major = 'AME'
      this.srcImg = '../../assets/AME.png'
    }else if(this.major == "25"){
      this.major = 'RAE'
      this.srcImg = '../../assets/RAE.png'
    }
  }

}
