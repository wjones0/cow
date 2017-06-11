import { Inject, Component, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Set } from '../../models/set';
import { CharService } from '../../services/char-service/char.service';

@Component({
  selector: 'cow-set-delete-modal',
  templateUrl: './set-delete-modal.component.html',
  styleUrls: ['./set-delete-modal.component.css']
})
export class SetDeleteModalComponent implements OnInit {

  enteredName: string = '';

  constructor(private _charSvc: CharService, public dialog: MdDialogRef<SetDeleteModalComponent>, @Inject(MD_DIALOG_DATA) public data: Set) { }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }

  delete() {
    this._charSvc.removeSet(this.data);
    this.dialog.close();
  }
}
