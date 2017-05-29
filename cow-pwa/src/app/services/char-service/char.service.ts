import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Character } from '../../models/character';
import { Set } from '../../models/set';

@Injectable()
export class CharService {

  user: firebase.User;
  userSub: Subscription;

  private _characterList: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([]);
  public characterList: Observable<Character[]> = this._characterList.asObservable();

  private _setList: BehaviorSubject<Set[]> = new BehaviorSubject<Set[]>([]);
  public setList: Observable<Set[]> = this._setList.asObservable();

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.userSub = afAuth.authState.subscribe((value) => {
      if (value) {
        this.user = value;

        db.list('/' + this.user.uid).subscribe((value) => {
          this._characterList.next(value);
        });
      }
    });
  }

  selectCharacter(charID: string) {
    for (let c of this._characterList.value) {
      if (c.$key === charID) {
        this._setList.next(c.sets);
      }
    }
  }

}
