import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { CharService } from '../../services/char-service/char.service';
import { Character } from '../../models/character';

@Component({
  selector: 'cow-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(public charSvc: CharService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  selectChar(char: Character) {
    this.charSvc.selectCharacter(char.$key);
  }

}
