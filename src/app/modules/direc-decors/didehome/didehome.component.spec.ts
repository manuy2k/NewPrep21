import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidehomeComponent } from './didehome.component';

describe('DidehomeComponent', () => {
  let component: DidehomeComponent;
  let fixture: ComponentFixture<DidehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
