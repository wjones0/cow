import { Inject, Component, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Set } from '../../models/set';
import { CharService } from '../../services/char-service/char.service';

@Component({
  selector: 'cow-set-modal',
  templateUrl: './set-modal.component.html',
  styleUrls: ['./set-modal.component.css']
})
export class SetModalComponent implements OnInit {

  set: Set;

  constructor(private _charSvc: CharService, public dialog: MdDialogRef<SetModalComponent>, @Inject(MD_DIALOG_DATA) public data: Set) { }

  ngOnInit() {
    if (this.data) {
      this.set = this.data;
    } else {
      this.set = {
        name: '',
        raidTier: ''
      };
    }
  }

  close() {
    this.dialog.close();
  }

  save() {
    // if we got data to start - update - else add new
    if (this.data) {
      this._charSvc.updateSet(this.set);
    } else {
      this._charSvc.newSet(this.set);
    }
    this.dialog.close();
  }

}
