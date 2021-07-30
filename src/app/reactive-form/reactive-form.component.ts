import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

   // public name = new FormControl();
   public profileForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });
    
    constructor() { }

    ngOnInit(): void {
    }
    public updateName(){
        //this.name.setValue("Phạm Hoài");
    }
    public onSubmit(){
        console.log("onSubmit");
        console.log(this.profileForm);
        //Mình thấy cái này cũng cho ra kết quả đúng
        //console.log("name = " + this.profileForm.value.name);
        console.log("name = " + this.profileForm.controls.name.value);
        console.log("age = " + this.profileForm.controls.age.value);
        
    }

}
