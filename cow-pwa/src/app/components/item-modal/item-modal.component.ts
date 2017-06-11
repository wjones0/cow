import { Inject, Component, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Item } from '../../models/item';
import { CharService } from '../../services/char-service/char.service';

@Component({
  selector: 'cow-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.css']
})
export class ItemModalComponent implements OnInit {

  item: Item;

  constructor(private _charSvc: CharService, public dialog: MdDialogRef<ItemModalComponent>, @Inject(MD_DIALOG_DATA) public data: Item) { }

  ngOnInit() {
    if (this.data) {
      this.item = this.data;
    } else {
      this.item = {
        boe: false,
        buyable: false,
        mob: '',
        name: '',
        obtained: false,
        zone: ''
      };
    }
  }

  close() {
    this.dialog.close();
  }

  save() {
    // if we got data to start - update - else add new
    if (this.data) {
      this._charSvc.updateItem(this.item);
    } else {
      this._charSvc.newItem(this.item);
    }
    this.dialog.close();
  }
}
