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

  private _authed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public authed: Observable<boolean> = this._authed.asObservable();

  user: firebase.User;
  userSub: Subscription;

  public characterList: Observable<Character[]>;

  private _setList: BehaviorSubject<Set[]> = new BehaviorSubject<Set[]>([]);
  public setList: Observable<Set[]> = this._setList.asObservable();

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.userSub = afAuth.authState.subscribe((value) => {
      if (value) {
        this.user = value;
        this._authed.next(true);

        this.characterList = db.list('/' + this.user.uid);
      }
    });
  }

  setsForCharacter(charID: string): Observable<Set[]> {
    return this.db.list('/' + this.user.uid + '/' + charID + '/sets');
  }

}
