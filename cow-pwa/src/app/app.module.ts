import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import 'hammerjs';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdSlideToggleModule,
  MdToolbarModule,
} from '@angular/material';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CharactersComponent } from './components/characters/characters.component';

import { CharService } from './services/char-service/char.service';
import { SetsComponent } from './components/sets/sets.component';
import { SetDetailsComponent } from './components/set-details/set-details.component';
import { CharacterModalComponent } from './components/character-modal/character-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    CharactersComponent,
    SetsComponent,
    SetDetailsComponent,
    CharacterModalComponent
  ],
  entryComponents: [
    CharacterModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdSlideToggleModule,
    MdToolbarModule,
    AppRoutingModule
  ],
  providers: [
    CharService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
