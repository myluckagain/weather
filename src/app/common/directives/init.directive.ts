import { Directive } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { Input } from '@angular/core';

@Directive({
  selector: '[appInit]'
})
export class InitDirective {

  constructor(
    private __hotelsService: HotelsService
  ) { }

  @Input()
  public hotel: Hotel;
  @Input()
  public first: boolean;

  public ngOnInit(): void {
    if (this.first) {
      this.__hotelsService.selectedHotel$.next(this.hotel);
      console.log('first init ' + this.hotel.name);
    }else{
      console.log('not first init ' + this.hotel.name);
    }

  }

}
