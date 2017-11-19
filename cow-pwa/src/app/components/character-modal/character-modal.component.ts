import { Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Character } from '../../models/character';
import { CharService } from '../../services/char-service/char.service';

@Component({
  selector: 'cow-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.css']
})
export class CharacterModalComponent implements OnInit {

  character: Character;

  constructor(private _charSvc: CharService, public dialog: MatDialogRef<CharacterModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Character) { }

  ngOnInit() {
    if (this.data) {
      this.character = this.data;
    } else {
      this.character = {
        name: '',
        realm: ''
      };
    }
  }

  close() {
    this.dialog.close();
  }

  save() {
    // if we got data to start - update - else add new
    if (this.data) {
      this._charSvc.updateCharacter(this.character);
    } else {
      this._charSvc.newCharacter(this.character);
    }
    this.dialog.close();
  }

}
