import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JshomeComponent } from './jshome.component';

describe('JshomeComponent', () => {
  let component: JshomeComponent;
  let fixture: ComponentFixture<JshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
