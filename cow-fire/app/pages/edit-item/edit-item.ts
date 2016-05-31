import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire} from 'angularfire2';


/*
  Generated class for the EditItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/edit-item/edit-item.html',
})
export class EditItemPage {

  newItem: any;
  itemID: string;
  dbURL: string;

  constructor(private _nav: NavController, private _af: AngularFire, private _navParams: NavParams) {
    this.itemID = this._navParams.get('itemID');
    this.dbURL = this._navParams.get('dbURL') + '/' + this.itemID;
  }

  ngOnInit() {
    this._af.database.object(this.dbURL).subscribe((data) => {
      if (data) {
        this.newItem = data;
      }
    });
  }

  saveItem() {
    this._af.database.object(this.dbURL).update(this.newItem);

    this._nav.pop();
  }
}
