import { CommonService } from './../Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = "Phạm Hoài";
  public age;

  public cars = ['Honda', 'Vin', 'Royal', 'Huyndai'];

  constructor( private common: CommonService) { 
    this.age = common.age;
  }

  ngOnInit(): void {
  }
  public tangTuoi(){
   this.common.age++;
   this.age = this.common.age;
    this.cars.push("Phạm Hoài " + this.age );
  }
  public giamTuoi(){
    this.age --;
    this.cars.push("Phạm Hoài " + this.age );
  }
}
