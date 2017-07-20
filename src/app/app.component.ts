import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component'

@Component({
  selector: 'app-root',
  template: `<h1>Hi Welcome to my world from Regine</h1>
             <h4> Header for from App Component</h4>
             <my-tutorials></my-tutorials>`,
  styles:[`h4 {
    color:blue;
    }`]
})
export class AppComponent {
  /*title = 'Regine';*/
}

 /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/