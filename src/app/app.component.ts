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
  genders = ['male', 'female'];

  answer = ''; //two way biding

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({ //set value of all the object of the form not the best approach , since it will delete all the previous valus
    //   userData : {
    //     username : 'Rafal',
    //     email : 'dupa@gmailcom'
    //   },
    //   secret : 'pet',
    //   questionAnswer : '',
    //   gender : 'male'
    // })
    this.signupForm.form.patchValue({ //only pathes the value
      userData : {
        username : 'Rafal'
      }
    })
  }

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
