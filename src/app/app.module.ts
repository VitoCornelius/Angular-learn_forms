import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //has to be in oder to use the forms related functionality -> this sees the <form> and detect the input
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
