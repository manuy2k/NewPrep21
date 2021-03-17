import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjshomeComponent } from './rxjshome.component';

describe('RxjshomeComponent', () => {
  let component: RxjshomeComponent;
  let fixture: ComponentFixture<RxjshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
