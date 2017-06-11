import { Inject, Component, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Item } from '../../models/item';
import { CharService } from '../../services/char-service/char.service';

@Component({
  selector: 'cow-item-delete-modal',
  templateUrl: './item-delete-modal.component.html',
  styleUrls: ['./item-delete-modal.component.css']
})
export class ItemDeleteModalComponent implements OnInit {

  enteredName: string = '';

  constructor(private _charSvc: CharService, public dialog: MdDialogRef<ItemDeleteModalComponent>, @Inject(MD_DIALOG_DATA) public data: Item) { }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }

  delete() {
    this._charSvc.removeItem(this.data);
    this.dialog.close();
  }
}
