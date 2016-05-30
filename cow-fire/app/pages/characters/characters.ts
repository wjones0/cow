import {Page, NavController} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Rx';

import {NewCharacterPage} from '../new-character/new-character';

/*
  Generated class for the CharactersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/characters/characters.html',
})
export class CharactersPage {
  
  characters: Observable<any>;
  userID: any;
  dbURL: string;
  
  constructor(private _nav: NavController, private _af: AngularFire) {
  }
  
  ngOnInit() {
        // subscribe to the auth object to check for the login status
        // of the user, if logged in, save some user information and
        // execute the firebase query...
        this._af.auth.subscribe((data) => {
            if (data) {
                this.userID = data.uid;
                this.dbURL = "/" + this.userID;
                this.characters = this._af.list(this.dbURL);
            } 
        })
    }
  
  login() {
    this._af.auth.login();
  }
  
  logout() {
    this._af.auth.logout();
    this.characters = null;
  }
  
  navToAdd() {
    this._nav.push(NewCharacterPage, {dbURL: this.dbURL});
  }
  
}
