import {Page, NavController} from 'ionic-angular';
import {CharacterService} from '../../providers/character-service/character-service';
import {Character} from '../../character/character';

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
        this._charService.load().then(data =>
              this.characters = data
            );
    }
}
