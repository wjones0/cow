import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDeleteModalComponent } from './character-delete-modal.component';

describe('CharacterDeleteModalComponent', () => {
  let component: CharacterDeleteModalComponent;
  let fixture: ComponentFixture<CharacterDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
