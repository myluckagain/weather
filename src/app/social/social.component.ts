import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HotelsService } from '../common/services/hotels.service';
import { HotelSubscriber } from '../hotel-subscriber';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent extends HotelSubscriber {}
