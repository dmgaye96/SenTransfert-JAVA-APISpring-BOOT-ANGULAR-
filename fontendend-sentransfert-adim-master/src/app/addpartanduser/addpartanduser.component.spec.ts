import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpartanduserComponent } from './addpartanduser.component';

describe('AddpartanduserComponent', () => {
  let component: AddpartanduserComponent;
  let fixture: ComponentFixture<AddpartanduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpartanduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpartanduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
