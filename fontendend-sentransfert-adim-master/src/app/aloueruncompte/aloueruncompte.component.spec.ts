import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloueruncompteComponent } from './aloueruncompte.component';

describe('AloueruncompteComponent', () => {
  let component: AloueruncompteComponent;
  let fixture: ComponentFixture<AloueruncompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloueruncompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloueruncompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
