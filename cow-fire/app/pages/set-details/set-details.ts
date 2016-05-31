import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {NewItemPage} from '../new-item/new-item';

/*
  Generated class for the SetDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/set-details/set-details.html',
})
export class SetDetailsPage {

  setID: string;
  setName: string;
  dbURL: string;
  items: any;
  
  constructor(private _nav: NavController, private _navParams: NavParams, private _af: AngularFire) {
        this.setID = this._navParams.get('setID');
        this.setName = this._navParams.get('setName');
        this.dbURL = this._navParams.get('dbURL') + '/' + this.setID + '/items';
        this.items = this._af.list(this.dbURL);
  }
  
  navToAdd() {
    this._nav.push(NewItemPage, {dbURL: this.dbURL, setID: this.setID});
  }
  
  updateObtained(item:any) {
    this.items.update(item.$key, { obtained: !item.obtained });
  }
  
}
