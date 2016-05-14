import {Page, NavController} from 'ionic-angular';
import {AuthService} from '../../services/auth/auth';
import {CharactersPage} from '../characters/characters';

@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  // We need to inject AuthService so that we can
  // use it in the view
  constructor(private auth: AuthService, private _nav: NavController) {}

  login() {
    this.auth.login();
    this._nav.push(CharactersPage);
  }

  gotoChars() {
    this._nav.push(CharactersPage);
  }
}