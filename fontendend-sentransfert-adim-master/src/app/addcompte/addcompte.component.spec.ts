import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompteComponent } from './addcompte.component';

describe('AddcompteComponent', () => {
  let component: AddcompteComponent;
  let fixture: ComponentFixture<AddcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
