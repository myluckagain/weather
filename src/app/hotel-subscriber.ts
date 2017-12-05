import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { HotelsService } from './common/services/hotels.service';
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class HotelSubscriber implements OnInit, OnDestroy {
 
    public hotel: Hotel;
    public subscription: Subscription;
    constructor(
        private _hotelsService: HotelsService
    ) { }

    ngOnInit() {
        this.subscription =
            this._hotelsService.selectedHotel$.subscribe({

                next: (hotel) => {
                    this.hotel = hotel;
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
