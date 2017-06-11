import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDeleteModalComponent } from './set-delete-modal.component';

describe('SetDeleteModalComponent', () => {
  let component: SetDeleteModalComponent;
  let fixture: ComponentFixture<SetDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
