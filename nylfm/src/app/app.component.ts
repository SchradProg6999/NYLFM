import { Component } from '@angular/core';
import * as SmoothScroll from 'node_modules/smooth-scroll/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nylfm';

  scroll = new SmoothScroll('a[href*="#"]');
}
