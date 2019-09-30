import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaradminpComponent } from './sidebaradminp.component';

describe('SidebaradminpComponent', () => {
  let component: SidebaradminpComponent;
  let fixture: ComponentFixture<SidebaradminpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebaradminpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaradminpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
