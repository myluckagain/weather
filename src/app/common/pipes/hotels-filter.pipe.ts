import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], searchTerm: string): Hotel[] {
    if (!searchTerm) {
      return hotels;
    }
    return hotels
      .filter((hotel: Hotel) =>
        `${hotel.type}`.toLowerCase()
          .includes(searchTerm.toLowerCase()));
  }

}
