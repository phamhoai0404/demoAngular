import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    public name = '';
    public password = '';
    public cars = ['Honda', 'Vin', 'Royal', 'Huyndai'];
    private selectCar = '';

    constructor() { }

    ngOnInit(): void { }
    public onSubmit() {
        console.log('Go to on Submit');
        console.log('this.password = ' + this.password);
        console.log(' this.name = ' + this.name);
        console.log(' this.selectCar = ' + this.selectCar);
    }
    public select(event){
        //console.log(event.target.value);
        this.selectCar = event.target.value;
    }
}
