import {Page, NavController, NavParams} from 'ionic-angular';
import {SetsActivePage} from '../sets-active/sets-active';

/*
  Generated class for the SetsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/sets/sets.html',
})
export class SetsPage {

  currentCharID: string;
  activeTabRoot: any = SetsActivePage;

  constructor(private _nav: NavController, private _navParams: NavParams) {
    this.currentCharID = this._navParams.get('charID');
  }

}

