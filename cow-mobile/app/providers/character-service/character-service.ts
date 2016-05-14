import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

import {Character} from '../../character/character';

/*
  Generated class for the CharacterService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CharacterService {
  
  data: Character[];

  constructor() {
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      resolve([
        { 'id': 'ABC1', 'name': 'Zinul', 'realm': 'Icecrown', 'picURL': 'http://x' },
        { 'id': 'ABC2', 'name': 'Turav', 'realm': 'Icecrown',  'picURL': 'http://x' }
      ]);
    });
  }
}

