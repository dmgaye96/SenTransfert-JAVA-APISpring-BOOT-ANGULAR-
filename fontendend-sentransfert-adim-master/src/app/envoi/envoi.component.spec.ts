import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiComponent } from './envoi.component';

describe('EnvoiComponent', () => {
  let component: EnvoiComponent;
  let fixture: ComponentFixture<EnvoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
