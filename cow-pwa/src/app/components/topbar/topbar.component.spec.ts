import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { click } from '../../testing/click';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';

import { environment } from '../../../environments/environment';

import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;
  let jSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('button click should login when not logged in', () => {
    expect(component.user).toBeFalsy();

    let afAuth = fixture.debugElement.injector.get(AngularFireAuth);

    let logincalled = false;
    jSpy = spyOn(afAuth.auth, 'signInWithPopup').and.callFake(() => logincalled = true);

    let de = fixture.debugElement.query(By.css('button'));

    click(de);
    expect(logincalled).toBeTruthy();
  });


});
