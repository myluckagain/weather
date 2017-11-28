import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HotelsService } from '../common/services/hotels.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
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
