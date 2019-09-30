import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpartenaireComponent } from './userpartenaire.component';

describe('UserpartenaireComponent', () => {
  let component: UserpartenaireComponent;
  let fixture: ComponentFixture<UserpartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
