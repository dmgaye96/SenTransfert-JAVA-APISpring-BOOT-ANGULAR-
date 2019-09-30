import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptespartnaireComponent } from './comptespartnaire.component';

describe('ComptespartnaireComponent', () => {
  let component: ComptespartnaireComponent;
  let fixture: ComponentFixture<ComptespartnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptespartnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptespartnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
