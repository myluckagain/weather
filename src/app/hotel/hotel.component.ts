import { Component, OnInit } from '@angular/core';
import { hotels$ } from '../data';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public hotels$: Observable<Hotel[]>;

  public loadImg = 'assets/images/gears.gif';

  public text: string; // строка фильтра




  @Output()
  public mySelect: EventEmitter<Hotel> = new EventEmitter();
  constructor() { }

  select(hotel: Hotel) {
    this.mySelect.emit(hotel);
  }


  ngOnInit() {
    this.hotels$ = hotels$;
  }


}
