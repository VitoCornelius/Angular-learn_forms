import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f',  {static: false}) signupForm : NgForm; //we can use this as well 

  defaultQuestion = 'pet';

  answer = ''; //two way biding

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
