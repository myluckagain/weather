import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { BASE_URL_TOKEN } from '../../config';
import { Subject } from 'rxjs/Subject';

import { hotels$ } from '../../data';

@Injectable()
export class HotelsService {

  public constructor(
    private _http: HttpClient,
    @Inject(BASE_URL_TOKEN) private _baseUrl: string
  ) { }

  public selectedHotel$ = new Subject<Hotel>();


  get hotels$(): Observable<Hotel[]> {
   // return this._http.get(`${this._baseUrl}/assets/images/mock.json`).
  //    map((res: any) => res.data).delay(2000);
  return  hotels$;

  }

}
