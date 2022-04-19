import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevourersComponent } from './devourers.component';

describe('DevourersComponent', () => {
  let component: DevourersComponent;
  let fixture: ComponentFixture<DevourersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevourersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevourersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
