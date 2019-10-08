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
  ff : number
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.name=param['name'];
      this.stuid=param['stuid'];
      this.degree=param['degree'];
    })
  }

}
