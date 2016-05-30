import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Rx';

import {Character} from '../../models/character';

/*
  Generated class for the NewCharacterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/new-character/new-character.html',
})
export class NewCharacterPage {

  dbURL: string;
  newChar: Character;

  constructor(private _nav: NavController, private _af: AngularFire, private _navParams: NavParams) {
    this.dbURL = this._navParams.get('dbURL');
  }
  
  ngOnInit() {
        this.newChar = {
          name: "",
          realm: ""
        };
    }

  addCharacter() {
    const characters = this._af.database.list(this.dbURL);
    characters.push(this.newChar);
    
    this._nav.pop();
  }



}
