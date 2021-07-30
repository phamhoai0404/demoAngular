import { CommonService } from './../Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public age;
  constructor(private common: CommonService) {
    this.age = common.age;
   }

  ngOnInit(): void {
  }

}
