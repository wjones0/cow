import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Rx';

import {NewSetPage} from '../new-set/new-set';

/*
  Generated class for the SetsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/sets/sets.html',
})
export class SetsPage {
  
  dbURL: string;
  sets: any;

  constructor(private _nav: NavController, private _af: AngularFire, private _navParams: NavParams) {
        this.dbURL = this._navParams.get('dbURL') + '/sets';
        this.sets = this._af.list(this.dbURL);
  }
  
  navToAdd() {
    this._nav.push(NewSetPage, {dbURL: this.dbURL});
  }
  

}
