import { Component, OnInit, Input } from '@angular/core';
import { HotelsService } from '../common/services/hotels.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()
  public hotel: Hotel;
  constructor(
    private _hotelsService: HotelsService
  ) { }

  ngOnInit() {
    this._hotelsService.selectedHotel$.subscribe({

      next: (hotel) => {
        console.log('weather hotel: ' + hotel.name);
        this.hotel = hotel;
      }
    });
  }

}
