import {Page, NavController, NavParams} from 'ionic-angular';
import {AngularFire} from 'angularfire2';

/*
  Generated class for the NewSetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/new-set/new-set.html',
})
export class NewSetPage {
  
  newSet: any;
  dbURL: string;
  
  constructor(private _nav: NavController, private _af: AngularFire, private _navParams: NavParams) {
    this.dbURL = this._navParams.get('dbURL');
  }
  
  ngOnInit() {
        this.newSet = {
          name: "",
          numItemsHave: 0,
          numItemsTotal: 0
        };
    }
    
addSet() {
    const sets = this._af.database.list(this.dbURL);
    sets.push(this.newSet);
    
    this._nav.pop();
  }    
}
