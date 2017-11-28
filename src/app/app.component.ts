import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HotelsService } from './common/services/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Отели';

}
