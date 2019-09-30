import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcaissierComponent } from './sidebarcaissier.component';

describe('SidebarcaissierComponent', () => {
  let component: SidebarcaissierComponent;
  let fixture: ComponentFixture<SidebarcaissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarcaissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarcaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
