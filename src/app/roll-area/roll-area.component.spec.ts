import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollAreaComponent } from './roll-area.component';

describe('RollAreaComponent', () => {
  let component: RollAreaComponent;
  let fixture: ComponentFixture<RollAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
