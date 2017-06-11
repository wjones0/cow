import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MdDialog } from '@angular/material';

import { CharService } from '../../services/char-service/char.service';
import { Set } from '../../models/set';
import { SetModalComponent } from '../set-modal/set-modal.component';
import { SetDeleteModalComponent } from '../set-delete-modal/set-delete-modal.component';

@Component({
  selector: 'cow-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit, OnDestroy {

  routeSub: Subscription;
  authSub: Subscription;
  setList: Observable<Set[]>;

  charID: string;
  charName: string;
  showAll: boolean;

  constructor(public charSvc: CharService, public dialog: MdDialog, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.routeSub = this._route.params.subscribe(params => {
      this.charID = decodeURI(params['charid']);
      this.charName = decodeURI(params['charName']);

      this.authSub = this.charSvc.authed.subscribe((value) => {
        if (!value)
          return;
        this.setList = this.charSvc.setsForCharacter(this.charID);
      });

    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.authSub.unsubscribe();
  }

  total(items: any) {
    if (!items)
      return 0;

    return Object.keys(items).length;
  }

  obtained(items: any) {
    if (!items)
      return 0;

    let count = 0;

    for (let i of Object.keys(items)) {
      if (items[i].obtained)
        count++;
    }

    return count;
  }

  selectSet(set: Set) {
    this._router.navigate(['set-details', {
      charid: this.charID,
      charName: this.charName,
      setID: set.$key,
      setName: encodeURIComponent(set.name).replace(/\(/g, "%28").replace(/\)/g, "%29")
    }]);
  }

  add() {
    let dialogRef = this.dialog.open(SetModalComponent, {
      width: '75%',
      disableClose: false,
      data: null
    });
  }

  edit(set: Set) {
    let dialogRef = this.dialog.open(SetModalComponent, {
      width: '75%',
      disableClose: false,
      data: set
    });
  }

  delete(set: Set) {
    let dialogRef = this.dialog.open(SetDeleteModalComponent, {
      width: '75%',
      disableClose: false,
      data: set
    });
  }

}
