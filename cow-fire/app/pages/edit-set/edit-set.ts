import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire} from 'angularfire2';

/*
  Generated class for the EditSetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/edit-set/edit-set.html',
})
export class EditSetPage {

  newSet: any;
  setID: string;
  dbURL: string;

  constructor(private _nav: NavController, private _af: AngularFire, private _navParams: NavParams) {
    this.setID = this._navParams.get('setID');
    this.dbURL = this._navParams.get('dbURL') + '/' + this.setID;
  }

  ngOnInit() {
    this._af.database.object(this.dbURL).subscribe((data) => {
      if (data) {
        this.newSet = data;
      }
    });
  }

  saveSet() {
    this._af.database.object(this.dbURL).update(this.newSet);

    this._nav.pop();
  }
}
