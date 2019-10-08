import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  result:number
  
  constructor() { }

  ngOnInit() {
  }
  
  luckyRandom(){
    this.result = Math.floor(Math.random()*37) + 1;
  }
}
