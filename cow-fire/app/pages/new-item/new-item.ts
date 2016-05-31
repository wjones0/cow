import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire} from 'angularfire2';

/*
  Generated class for the NewItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/new-item/new-item.html',
})
export class NewItemPage {

  newItem: any;
  dbURL: string;

  constructor(private _nav: NavController, private _af: AngularFire, private _navParams: NavParams) {
    this.dbURL = this._navParams.get('dbURL');
  }

  ngOnInit() {
    this.newItem = {
      name: "",
      obtained: false,
      buyable: false,
      boe: false
    };
  }

  addItem() {
    const sets = this._af.database.list(this.dbURL);
    sets.push(this.newItem);
    
    this._nav.pop();
  }
}
