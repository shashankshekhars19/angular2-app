import { Component } from '@angular/core';

@Component({
  selector: 'angular2-app',
  template: ` <h1>Angular Router</h1>
  <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    
    </nav>
    <router-outlet></router-outlet>
    `})
export class AppComponent  {

  name = 'Angular';


 }
