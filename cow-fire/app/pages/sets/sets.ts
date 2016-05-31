import {Page, NavController, NavParams, Modal} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Rx';

import {NewSetPage} from '../new-set/new-set';
import {SetDetailsPage} from '../set-details/set-details';
import {EditSetPage} from '../edit-set/edit-set';
import {DeletePage} from '../delete/delete';

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
  charName: string;
  charID: string;
  sets: any;
  selSetFilter: string;

  constructor(private _nav: NavController, private _af: AngularFire, private _navParams: NavParams) {
    this.charName = this._navParams.get('charName');
    this.charID = this._navParams.get('charID');
    this.dbURL = this._navParams.get('dbURL') + '/' + this.charID + '/sets';
    this.sets = this._af.list(this.dbURL);
    this.selSetFilter = 'all';
  }

  navToAdd() {
    this._nav.push(NewSetPage, { dbURL: this.dbURL });
  }

  navToSetDetails(set: any) {
    this._nav.push(SetDetailsPage, { dbURL: this.dbURL, setID: set.$key, setName: set.name });
  }
  
  navToEditSet(set: any) {
    this._nav.push(EditSetPage, { dbURL: this.dbURL, setID: set.$key, setName: set.name });
  }
  
  navToDelete(set: any) {
    let modal = Modal.create(DeletePage, { dbURL: this.dbURL + '/' + set.$key, delName: set.name, delType: 'set'});
    this._nav.present(modal);
  }

  total(items: any) {
    if(!items)
      return 0;

    return Object.keys(items).length
  }
  
  obtained(items: any) {
    if(!items)
      return 0;
    
    let count = 0;
    
    for(let i of Object.keys(items))
    {
      if(items[i].obtained)
        count++;
    }
    
    return count;
  }

}
