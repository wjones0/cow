import {Page, NavController, NavParams, Modal, ViewController} from 'ionic-angular';
import {AngularFire} from 'angularfire2';

/*
  Generated class for the DeletePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/delete/delete.html',
})
export class DeletePage {

  dbURL: string;
  delType: string;
  delName: string;
  
  constructor(private _nav: NavController, private _af: AngularFire, private _navParams: NavParams, private _viewCtrl: ViewController) {
    this.delType = this._navParams.get('delType');
    this.delName = this._navParams.get('delName');
    this.dbURL = this._navParams.get('dbURL');
  }

  ngOnInit() {
  }

  removeItem() {
    this._af.database.object(this.dbURL).remove();

    this.close();
  }
  
  close() {
    this._viewCtrl.dismiss();
  }
}
