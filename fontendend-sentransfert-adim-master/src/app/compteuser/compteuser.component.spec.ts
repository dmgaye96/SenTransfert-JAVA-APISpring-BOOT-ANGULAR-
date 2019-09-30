import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteuserComponent } from './compteuser.component';

describe('CompteuserComponent', () => {
  let component: CompteuserComponent;
  let fixture: ComponentFixture<CompteuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
