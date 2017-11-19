import { Observable } from 'rxjs/Observable';
// import { delay } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const data: Hotel[] = [
  {
    'id': 1,
    'name': 'Москва',
    'img': 'assets/images/res.jpg',
    'address': 'Санкт-Петербург, пл. Александра Невского',
    'phone': 'Tel:+1285 968 685',
    'weather':
    {
         'icon': 'assets/images/res.jpg',
          'water': 0,
         'temperature': 0
     },
     'social':
     {
        'img': 'assets/images/res.jpg',
        'followers': 122,
        'following': 202
     },
    'type': 'PREMIUM'
  },
  {
    'id': 2,
    'name': '7Seasons Apartments Budapest',
    'img': 'assets/images/r1.jpg',
    'address': 'Терезварош, Будапешт',
    'phone': 'Tel:+1285 968 685',
    'weather':
    {
         'icon': 'assets/images/r1.jpg',
          'water': 5,
         'temperature': 13
     },
     'social':
     {
        'img': 'assets/images/r1.jpg',
        'followers': 333,
        'following': 333
     },
    'type': 'CHEAP'
  },
  {
    'id': 3,
    'name': 'Carlton Madagascar',
    'img': 'http://placehold.it/320x320',
    'address': 'Antananarivo 101, Мадагаскар',
    'phone': 'Tel:+1285 968 685',
    'weather':
    {
         'icon': 'http://placehold.it/320x320',
          'water': 20,
         'temperature': 33
     },
     'social':
     {
        'img': 'http://placehold.it/320x320',
        'followers': 123,
        'following': 111
     },
    'type': 'FISHING'
  },
  {
    'id': 4,
    'name': 'Omena Hotel Lönnrotinkatu',
    'img': 'http://placehold.it/320x320',
    'address': 'Lönnrotinkatu 13, 00120 Helsinki, Финляндия',
    'phone': 'Tel:+1285 968 685',
    'weather':
    {
         'icon': 'http://placehold.it/320x320',
          'water': 0,
         'temperature': 0
     },
     'social':
     {
        'img': 'http://placehold.it/320x320',
        'followers': 122,
        'following': 202
     },
    'type': 'WINTER'
  }
];

export const hotels$: Observable<Hotel[]> =
  Observable.of(data)
    .delay(2000);
