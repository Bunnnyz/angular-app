import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  a: number = 10;
  b: number = 20;
  total = this.a+this.b;
  title = 'app';
}
