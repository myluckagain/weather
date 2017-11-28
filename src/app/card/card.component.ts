import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HotelsService } from '../common/services/hotels.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public hotel: Hotel;
  constructor(
    private _hotelsService: HotelsService
  ) { }

  public select(hotel: Hotel) {
    this._hotelsService.selectedHotel$.next(hotel);
  }
  ngOnInit() {
  }


}
