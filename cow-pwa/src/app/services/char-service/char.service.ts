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

  public characters: FirebaseListObservable<Character[]>;
  private sets: FirebaseListObservable<Set[]>;
  private items: FirebaseListObservable<Item[]>;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.userSub = afAuth.authState.subscribe((value) => {
      if (value) {
        this.user = value;
        this._authed.next(true);

        this.characters = db.list('/' + this.user.uid);
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
    this.characters.push(char);
  }

  updateCharacter(char: Character) {
    this.characters.update(char.$key, char);
  }

  removeCharacter(char: Character) {
    this.characters.remove(char.$key);
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

  newItem(item: Item) {
    this.items.push(item);
  }

  updateItem(item: Item) {
    this.items.update(item.$key, item);
  }

  removeItem(item: Item) {
    this.items.remove(item.$key);
  }
}
