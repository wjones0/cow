import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {CharactersPage} from './pages/characters/characters';

import {
    FIREBASE_PROVIDERS, defaultFirebase,
    AngularFire, firebaseAuthConfig, AuthProviders,
    AuthMethods
} from 'angularfire2';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
        FIREBASE_PROVIDERS,
        defaultFirebase('https://cowfire.firebaseio.com/'),
        firebaseAuthConfig({
          provider: AuthProviders.Google,
          method: AuthMethods.Popup
        })
  ],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = CharactersPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
