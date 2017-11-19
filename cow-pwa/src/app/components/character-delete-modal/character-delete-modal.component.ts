import { Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Character } from '../../models/character';
import { CharService } from '../../services/char-service/char.service';

@Component({
  selector: 'cow-character-delete-modal',
  templateUrl: './character-delete-modal.component.html',
  styleUrls: ['./character-delete-modal.component.css']
})
export class CharacterDeleteModalComponent implements OnInit {

  enteredName: string = '';
  enteredRealm: string = '';

  constructor(private _charSvc: CharService, public dialog: MatDialogRef<CharacterDeleteModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Character) { }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }

  delete() {
    this._charSvc.removeCharacter(this.data);
    this.dialog.close();
  }

}
