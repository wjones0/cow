import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'cow-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnDestroy {

  user: firebase.User;
  userSub: Subscription;

  constructor(public afAuth: AngularFireAuth) {
    this.userSub = afAuth.authState.subscribe((value) => this.user = value);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
