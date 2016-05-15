import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the CharacterService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CharacterService {

  constructor() {}

  loadMock() {
      return Observable.of([
        { 'id': 'ABC1', 'name': 'Zinul', 'realm': 'Icecrown', 'picURL': 'http://x' },
        { 'id': 'ABC2', 'name': 'Turav', 'realm': 'Icecrown',  'picURL': 'http://x' }
      ]);
  }
  
  load() {
    return this.loadMock();
  }

}

