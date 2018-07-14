import { Component } from '@angular/core';
import Game from './config';

console.log(Game);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
}
