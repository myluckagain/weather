import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HotelsFilterPipe } from './common/pipes/hotels-filter.pipe';
import { HotelsService } from './common/services/hotels.service';
import { CardComponent } from './card/card.component';
import { BASE_URL_TOKEN, BASE_URL } from './config';
import { HighlightDirective } from './common/directives/highlight.directive';
import { InitDirective } from './common/directives/init.directive';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    WeatherComponent,
    SocialComponent,
    HotelsFilterPipe,
    CardComponent,
    HighlightDirective,
    InitDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: HotelsService, useClass: HotelsService},
    {provide: BASE_URL_TOKEN, useValue: BASE_URL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
