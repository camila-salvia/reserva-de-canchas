import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    //AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule // Add this line
    // other module imports
  ],
  providers: [],
 // bootstrap: [AppComponent]
})
export class AppModule { }