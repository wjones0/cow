import {Page, NavController} from 'ionic-angular';
import {AngularFire} from 'angularfire2';


/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  

  constructor(private _nav: NavController, private _af: AngularFire) {
  }
  
  login() {
    this._af.auth.login();
  }
  
  logout() {
    this._af.auth.logout();
  }
}
