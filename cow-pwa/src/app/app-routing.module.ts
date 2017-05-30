import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { SetsComponent } from './components/sets/sets.component';
import { SetDetailsComponent } from './components/set-details/set-details.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'sets', component: SetsComponent },
  { path: 'set-details', component: SetDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
