import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MdDialog } from '@angular/material';

import { CharService } from '../../services/char-service/char.service';
import { Character } from '../../models/character';
import { CharacterModalComponent } from '../character-modal/character-modal.component';
import { CharacterDeleteModalComponent } from '../character-delete-modal/character-delete-modal.component';

@Component({
  selector: 'cow-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(public charSvc: CharService, public dialog: MdDialog, private _router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  add() {
    let dialogRef = this.dialog.open(CharacterModalComponent, {
      width: '75%',
      disableClose: false,
      data: null
    });
  }

  selectChar(char: Character) {
    this._router.navigate(['sets', { charid: char.$key, charName: char.name }]);
  }

  edit(char: Character) {
    let dialogRef = this.dialog.open(CharacterModalComponent, {
      width: '75%',
      disableClose: false,
      data: char
    });
  }

  delete(char: Character) {
    let dialogRef = this.dialog.open(CharacterDeleteModalComponent, {
      width: '75%',
      disableClose: false,
      data: char
    });
  }

}
