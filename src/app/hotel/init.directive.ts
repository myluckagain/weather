import { Directive } from '@angular/core';
import { HotelsService } from '../common/services/hotels.service';
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

  public ngOnChanges(): void {
    if (this.first) {
      this.__hotelsService.selectedHotel$.next(this.hotel);
      console.log('first ngOnChanges ' + this.hotel.name);
    }else{
      console.log('not first ngOnChanges ' + this.hotel.name);
    }

  }


}
