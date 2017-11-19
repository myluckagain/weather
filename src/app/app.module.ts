import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HotelsFilterPipe } from './common/pipes/hotels-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    WeatherComponent,
    SocialComponent,
    HotelsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
