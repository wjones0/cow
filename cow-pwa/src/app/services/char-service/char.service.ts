import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Character } from '../../models/character';
import { Set } from '../../models/set';
import { Item } from '../../models/item';

@Injectable()
export class CharService {

  private _authed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public authed: Observable<boolean> = this._authed.asObservable();

  user: firebase.User;
  userSub: Subscription;

  public characterList: Observable<Character[]>;

  private sets: FirebaseListObservable<Set[]>;
  private items: FirebaseListObservable<Item[]>;

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
    this.sets = this.db.list('/' + this.user.uid + '/' + charID + '/sets');
    return this.sets;
  }

  itemsForSet(charID: string, setID: string): Observable<Item[]> {
    this.items = this.db.list('/' + this.user.uid + '/' + charID + '/sets/' + setID + '/items');
    return this.items;
  }

  obtainItemUpdate(item: Item) {
    this.items.update(item.$key, { obtained: !item.obtained });
  }

  newCharacter(char: Character) {
    const characters = this.db.list('/' + this.user.uid);
    characters.push(char);
  }

  updateCharacter(char: Character) {
    this.db.object('/' + this.user.uid + '/' + char.$key).update(char);
  }

  removeCharacter(char: Character) {
    this.db.object('/' + this.user.uid + '/' + char.$key).remove();
  }

  newSet(set: Set) {
    this.sets.push(set);
  }

  updateSet(set: Set) {
    this.sets.update(set.$key, set);
  }

  removeSet(set: Set) {
    this.sets.remove(set.$key);
  }
}
