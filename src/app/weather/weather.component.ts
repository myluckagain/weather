import { Component, OnInit, Input } from '@angular/core';
import { HotelsService } from '../common/services/hotels.service';
import { HotelSubscriber } from '../hotel-subscriber';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent extends HotelSubscriber {}
