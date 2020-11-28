import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaulistComponent } from './restaulist.component';

describe('RestaulistComponent', () => {
  let component: RestaulistComponent;
  let fixture: ComponentFixture<RestaulistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaulistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
