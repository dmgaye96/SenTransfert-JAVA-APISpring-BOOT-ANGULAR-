import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepartenaireComponent } from './listepartenaire.component';

describe('ListepartenaireComponent', () => {
  let component: ListepartenaireComponent;
  let fixture: ComponentFixture<ListepartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListepartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
