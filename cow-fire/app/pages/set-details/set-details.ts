import {Page, NavController, NavParams, Modal} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {NewItemPage} from '../new-item/new-item';
import {EditItemPage} from '../edit-item/edit-item';
import {DeletePage} from '../delete/delete';

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

  showAll = false;

  constructor(private _nav: NavController, private _navParams: NavParams, private _af: AngularFire) {
    this.setID = this._navParams.get('setID');
    this.setName = this._navParams.get('setName');
    this.dbURL = this._navParams.get('dbURL') + '/' + this.setID + '/items';
    this.items = this._af.list(this.dbURL);
  }

  navToAdd() {
    this._nav.push(NewItemPage, { dbURL: this.dbURL });
  }

  navToEdit(item: any) {
    this._nav.push(EditItemPage, { dbURL: this.dbURL, itemID: item.$key })
  }

  navToDelete(item: any) {
    let modal = Modal.create(DeletePage, { dbURL: this.dbURL + '/' + item.$key, delName: item.name, delType: 'item' });
    this._nav.present(modal);
  }

  updateObtained(item: any) {
    this.items.update(item.$key, { obtained: !item.obtained });
  }

}
