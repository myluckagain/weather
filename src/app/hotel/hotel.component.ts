import { Component, OnInit } from '@angular/core';
// import { hotels$ } from '../data';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { HotelsService } from '../common/services/hotels.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public hotels$: Observable<Hotel[]>;

  private _filteredType: string;
  public filters: string[];
  public loadImg = 'assets/images/gears.gif';




  constructor(
    private __hotelsService: HotelsService
  ) { }



  public typeSelected(type: string) {


    this._filteredType = type;


  }

  public ngOnInit(): void {
    this.filters = ['All', 'Cheap', 'Fishing', 'Winter'];

    this.hotels$ = this.__hotelsService.hotels$;



  }



}
