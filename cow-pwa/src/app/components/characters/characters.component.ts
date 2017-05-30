import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public charSvc: CharService, private _router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  selectChar(char: Character) {
    this._router.navigate(['sets', { charid: char.$key, charName: char.name }]);
  }

}
