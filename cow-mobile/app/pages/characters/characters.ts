import {Page, NavController} from 'ionic-angular';
import {CharacterService} from '../../providers/character-service/character-service';
import {Character} from '../../character/character';
import {SetsPage} from '../sets/sets';

/*
  Generated class for the CharactersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/characters/characters.html'
})
export class CharactersPage {

  public characters: Character[];

  constructor(private _nav: NavController, private _charService: CharacterService) {
    this.getCharacters();
  }

  getCharacters() {
    this._charService.load()
      .subscribe(
        data => this.characters = data,
        err => console.log(JSON.stringify(err))
      );
  }

  navToSets(charID: string) {
    this._nav.push(SetsPage, {charID: charID});
  }

}
