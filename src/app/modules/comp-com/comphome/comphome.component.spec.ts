import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComphomeComponent } from './comphome.component';

describe('ComphomeComponent', () => {
  let component: ComphomeComponent;
  let fixture: ComponentFixture<ComphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
