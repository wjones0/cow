import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';

import { CharService } from '../../services/char-service/char.service';
import { Item } from '../../models/item';
import { ItemModalComponent } from '../item-modal/item-modal.component';
import { ItemDeleteModalComponent } from '../item-delete-modal/item-delete-modal.component';

@Component({
  selector: 'cow-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.css']
})
export class SetDetailsComponent implements OnInit {

  routeSub: Subscription;
  authSub: Subscription;
  itemList: Observable<Item[]>;

  charID: string;
  charName: string;
  setID: string;
  setName: string;
  showAll: boolean;

  constructor(public charSvc: CharService, public dialog: MatDialog, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.routeSub = this._route.params.subscribe(params => {
      this.charID = decodeURI(params['charid']);
      this.charName = decodeURI(params['charName']);
      this.setID = decodeURI(params['setID']);
      this.setName = decodeURI(params['setName']).replace(/%2F/g, "/");

      this.authSub = this.charSvc.authed.subscribe((value) => {
        if (!value)
          return;
        this.itemList = this.charSvc.itemsForSet(this.charID, this.setID);
      });

    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.authSub.unsubscribe();
  }

  selectItem(item: Item) {
    this.charSvc.obtainItemUpdate(item);
  }

  add() {
    let dialogRef = this.dialog.open(ItemModalComponent, {
      width: '75%',
      disableClose: false,
      data: null
    });
  }

  edit(item: Item) {
    let dialogRef = this.dialog.open(ItemModalComponent, {
      width: '75%',
      disableClose: false,
      data: item
    });
  }

  delete(item: Item) {
    let dialogRef = this.dialog.open(ItemDeleteModalComponent, {
      width: '75%',
      disableClose: false,
      data: item
    });
  }

}
